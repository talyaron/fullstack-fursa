import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ItemImage from './features/item/ItemImage';
import ItemShow from './features/item/ItemShow';
import Product from './features/posts/Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ItemShow />
        <ItemImage />
        <Product />
      </header>
    </div>
  );
}

export default App;
