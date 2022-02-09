import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bar from './view-components-bar/Bar';
const bar:Array<Item> = [{title:'Home',subtitle:'1'},{title:'Our Programs',subtitle:'2'},{title:'About us',subtitle:'3'},{title:'Staff',subtitle:'4'}];

interface Item{
  title:string;
  subtitle:string;
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {bar.map((item,index)=>{
          return <Bar key={index} title = {item.title} subtitle = {item.subtitle}/>
        })}
      </header>
    </div>
  );
}

export default App;
