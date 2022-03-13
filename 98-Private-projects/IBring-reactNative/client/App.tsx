import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";
import Login from './view/pages/Login/Login';
import Register from './view/pages/Register/Register';
import Home from './view/pages/Home/Home';
import List from './view/pages/List/List';
import Greetings from './view/pages/Greetings/Greetings';
import ListForm from './view/pages/ListForm/ListForm';
import TypeList from './view/pages/TypeList/TypeList';
import ChooseFriends from './view/pages/choosefriends/ChooseFriends';
import Contact from './view/pages/choosefriends/Contact/Contact';

const App = () => (
  <Provider store={store}>
    <NativeRouter>
      <View style={styles.container}>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/choosefriends" element={<ChooseFriends />} />
          <Route path="/typeList" element={<TypeList />} />
          <Route path="/ListForm" element={<ListForm />} />
          <Route path="/greetings" element={<Greetings />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
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