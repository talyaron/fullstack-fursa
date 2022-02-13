import React from 'react';
import './App.css';
import Messages from './view/message/Messages';
import { useState } from 'react';
import Input from './view/input/Input';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Input />
      </header>
    </div>
  );
}

export default App;
