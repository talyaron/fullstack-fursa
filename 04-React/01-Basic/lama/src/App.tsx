import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Card from './view/components/Card/Card';

const family:Array<people>=[{name:'lama',age:23,height:160,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzq26b5cx_aUDvPE01vcyYi9w6LPvjaiXpCA&usqp=CAU'},
{name:'lama',age:23,height:160,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzq26b5cx_aUDvPE01vcyYi9w6LPvjaiXpCA&usqp=CAU'}]

interface people{
  name:string;
  age:number;
  height:number;
  img:string;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
      {family.map((family,index)=>{
         const {name,age,height,img}=family;
         return <Card key={index} info={{name,age,height,img}}/>
        })}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
