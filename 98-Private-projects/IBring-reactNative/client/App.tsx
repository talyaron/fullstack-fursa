import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";
import Test from './view/pages/Test';
import SecondTest from './view/pages/SecondTest';
import Login from './view/pages/Login/Login';

const App = () => (
  <Provider store={store}>
    <NativeRouter>
      <View style={styles.container}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/secondtest" element={<SecondTest />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </View>
    </NativeRouter>
  </Provider >
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
});

export default App;