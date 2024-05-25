import {Text, Button, View, TextInput, StyleSheet, Alert} from 'react-native';
import React, {useReducer, useState} from 'react';
import {formState} from './types/types';
import {companyList, clientList, servicesListRN} from './data/data';
import RNPickerSelect from 'react-native-picker-select';
import {styles, pickerSelectStyles} from './formInvoiceStyle';

const initialFormState: formState = {
  date: new Date().toLocaleDateString(),
  company: '',
  client: '',
  service: [],
  unitPrice: [],
  quantity: '',
  total: 0,
  note: '',
};

const reducer = (state: formState, action: {type: string; payload: any}) => {
  switch (action.type) {
    case 'select company':
      return {
        ...state,
        company: action.payload.company,
        client: action.payload.resetString,
        service: action.payload.resetList,
        unitPrice: action.payload.resetList,
        quantity: action.payload.resetString,
        total: 0,
        note: action.payload.resetString,
      };
      break;

    case 'select client':
      return {
        ...state,
        client: action.payload.client,
        service: action.payload.resetList,
        unitPrice: action.payload.resetList,
        quantity: action.payload.resetString,
        total: 0,
        note: action.payload.resetString,
      };
      break;

    case 'select service':
      return {
        ...state,
        service: [action.payload.service],
        unitPrice: [action.payload.unitPrice],
        quantity: action.payload.resetString,
        total: 0,
        note: action.payload.resetString,
      };
      break;

    case 'insert quantity':
      const actionValue = isNaN(action.payload.quantity)
        ? action.payload.quantity2
        : Number(action.payload.quantity);
      return {
        ...state,
        quantity: actionValue,
        total: actionValue * state.unitPrice[0],
      };
      break;

    case 'write note':
      return {
        ...state,
        note: action.payload.note,
      };
      break;

    case 'reset button':
      return {
        date: new Date().toLocaleDateString(),
        company: action.payload.resetString,
        client: action.payload.resetString,
        service: action.payload.resetList,
        unitPrice: action.payload.resetList,
        quantity: action.payload.resetString,
        total: 0,
        note: action.payload.resetString,
      };
      break;

    default:
      return state;
      break;
  }
};

const FormInvoice = () => {
  const [formState, dispatch] = useReducer(reducer, initialFormState);
  // console.log('formstate:', formState.service);

  function BtnGenerate() {
    Alert.alert('Data:', JSON.stringify(formState, null, 2));
    // console.log(formState);
  }

  return (
    <>
      <View style={styles.container}>
        <Text aria-label="Label for date" nativeID="date" style={styles.label}>
          Date:
          <Text
            style={styles.text}
            aria-label="text of date"
            aria-labelledby="date">
            {formState.date}
          </Text>
        </Text>

        <Text
          style={styles.label}
          aria-label="Label for select Company"
          nativeID="company">
          Company:
        </Text>
        <RNPickerSelect
          useNativeAndroidPickerStyle={false}
          value={formState.company}
          onValueChange={(value: string, index: number) => {
            if (index !== 0) {
              dispatch({
                type: 'select company',
                payload: {
                  company: value === null ? '' : value,
                  resetString: '',
                  resetList: [],
                },
              });
            }
          }}
          items={companyList}
          style={pickerSelectStyles}
        />

        {formState.company && (
          <>
            <Text
              style={styles.label}
              aria-label="Label for select Client"
              nativeID="client">
              Client:{' '}
            </Text>
            <RNPickerSelect
              value={formState.client}
              useNativeAndroidPickerStyle={false}
              onValueChange={(value: string, index: number) => {
                // console.log(123);
                if (index !== 0) {
                  dispatch({
                    type: 'select client',
                    payload: {
                      client: value === null ? '' : value,
                      resetString: '',
                      resetList: [],
                    },
                  });
                }
              }}
              items={clientList[formState.company as keyof typeof clientList]}
              style={pickerSelectStyles}
            />
          </>
        )}

        {formState.client && (
          <>
            <Text
              style={styles.label}
              aria-label="Label for select service"
              nativeID="service">
              Service:
            </Text>
            <RNPickerSelect
              value={{
                serviceName: formState.service[0],
                unitPrice: formState.unitPrice[0],
              }}
              useNativeAndroidPickerStyle={false}
              style={pickerSelectStyles}
              onValueChange={(
                value: {serviceName: string; unitPrice: number},
                index: number,
              ) => {
                if (index !== 0) {
                  dispatch({
                    type: 'select service',
                    payload: {
                      service: value === null ? '' : value.serviceName,
                      unitPrice: value === null ? '' : value.unitPrice,
                      resetString: '',
                      resetList: [],
                    },
                  });
                }
              }}
              items={
                servicesListRN[formState.client as keyof typeof servicesListRN]
              }
            />
          </>
        )}

        {formState.service.length !== 0 && (
          <>
            <Text
              style={styles.label}
              aria-label="Label for unitPrice"
              nativeID="unitprice">
              <Text>Unit Price:</Text>
              <Text
                style={styles.text}
                aria-label="text of unit price"
                aria-labelledby="unitprice">
                ${formState.unitPrice}
              </Text>
            </Text>

            <Text
              style={styles.label}
              aria-label="Label for quantity"
              nativeID="quantity">
              Quantity:
            </Text>
            <TextInput
              style={styles.textinput}
              value={formState.quantity}
              onChangeText={text => {
                dispatch({
                  type: 'insert quantity',
                  payload: {quantity: text, quantity2: ''},
                });
              }}
              placeholder="Insert quantity.."
            />
          </>
        )}

        {!isNaN(formState.quantity) && formState.quantity > 0 && (
          <>
            <Text
              style={styles.label}
              aria-label="Label for total"
              nativeID="total">
              <Text>Total:</Text>
              <Text
                style={styles.text}
                aria-label="text of total"
                aria-labelledby="total">
                ${formState.total}
              </Text>
            </Text>

            <Text
              style={styles.label}
              aria-label="Label for note"
              nativeID="note">
              Note:
            </Text>
            <TextInput
              style={styles.textinput}
              onChangeText={text => {
                dispatch({
                  type: 'write note',
                  payload: {note: text},
                });
              }}
              multiline={true}
              placeholder="If any.."
            />
          </>
        )}

        <View
          style={{
            width: 150,
            display: 'flex',
            flexDirection: 'row',
            margin: 25,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Button
            title="Generate"
            onPress={BtnGenerate}
            disabled={
              !isNaN(formState.total) && formState.total > 0 ? false : true
            }
          />
          <Button
            color={'red'}
            title="Reset"
            onPress={() => {
              dispatch({
                type: 'reset button',
                payload: {resetString: '', resetList: []},
              });
            }}
          />
        </View>
      </View>
    </>
  );
};

export default FormInvoice;
