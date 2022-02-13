import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Store from './view/store/Store';

function App() {
  const [productsList, setList] = useState([]);
  
  return (
    <div className="App">
      <Store productsList={productsList} setList={setList}/>
    </div>
  );
}

export default App;
