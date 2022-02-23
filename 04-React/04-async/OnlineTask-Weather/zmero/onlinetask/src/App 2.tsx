import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Menu from './view/components/menu/menu'

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <div className="background"></div>
    </div>
  );
}

export default App;
