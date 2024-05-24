import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    fontSize: 26,
    // paddingHorizontal: 10,
    // paddingVertical: 8,
    color: 'black',
    paddingRight: 35,
    // justifyContent: 'center',
    // alignItems: 'baseline',
    // alignContent: 'center',
  },
  text: {
    fontSize: 22,
    // paddingHorizontal: 10,
    // paddingVertical: 8,
    // borderWidth: 0.5,
    // borderColor: 'purple',
    // borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
  textinput: {
    fontSize: 22,
    // paddingHorizontal: 100,
    // paddingVertical: 15,
    width: 300,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingLeft: 5, // to ensure the text is never behind the icon
  },
});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 22,
    paddingHorizontal: 10,
    // paddingVertical: 15,
    width: 300,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingLeft: 5, // to ensure the text is never behind the icon
  },
});
