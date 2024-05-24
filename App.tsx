import {StyleSheet, SafeAreaView, ScrollView, Text} from 'react-native';
import React from 'react';
import FormInvoice from './components/FormInvoice/FormInvoice';
function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FormInvoice />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({});
