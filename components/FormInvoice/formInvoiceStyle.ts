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
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: 'black',
    paddingRight: 35,
  },
  text: {
    fontSize: 22,
    color: 'black',
    paddingRight: 30,
  },
  textinput: {
    fontSize: 22,
    paddingHorizontal: 107,
    paddingVertical: 12,
    width: 300,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingLeft: 5,
  },
});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 22,
    paddingVertical: 12,
    // paddingHorizontal: 200,
    width: 300,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 22,
    // paddingHorizontal: 200,
    paddingVertical: 12,
    width: 300,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingLeft: 5,
  },
});
