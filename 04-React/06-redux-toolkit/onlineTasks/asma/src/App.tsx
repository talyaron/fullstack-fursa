import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import PicturesShow from './features/pictures/PicturesShow';
import './App.css';
import PicShow from './features/pictures/PicShow';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <PicShow />
          <PicturesShow /> 
        </header>
    </div>
   
  );
}

export default App;
