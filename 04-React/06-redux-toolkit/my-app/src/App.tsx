import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ItemImage from './features/item/ItemImage';
import ItemShow from './features/item/ItemShow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ItemShow />
        <ItemImage />
      </header>
    </div>
  );
}

export default App;
