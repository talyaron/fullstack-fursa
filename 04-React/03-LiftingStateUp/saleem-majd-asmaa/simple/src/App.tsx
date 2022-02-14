import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Texting from './components/Texting';
import Texinput from './components/texinput';


function App() {
  
  const [textArray, settextArray] = useState([])

  return (
    <div className="App">
      <Texinput setTextArray={settextArray} textArray={textArray} ></Texinput>
      <div>
        {textArray.map((item, index)=>{
          
          return <Texting key={index} text ={item}></Texting>
        })}
      </div>
     
    </div>
  );
}

export default App;
