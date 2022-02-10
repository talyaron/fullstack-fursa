import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bar from './view-components-bar/Bar';
const bar:Array<Item> = [{title:'Home',subtitle:'2.png'},{title:'Our Programs',subtitle:'2.png'},{title:'About us',subtitle:'2.png'},{title:'Staff',subtitle:'2.png'}];

interface Item{
  title:string;
  subtitle:string;
}
function App() {
  function handleDate(){
    console.log(Date());
  }
  return (
    <div className="App">
        <header className='App-header'>
        <div className='top'>
          <div>
        <img src="http://bsmart.org.il/ar/wp-content/uploads/2015/07/website-logo-H_89.png" alt="" />
        </div>
        {bar.map((item,index)=>{
          return <Bar key={index} title = {item.title} subtitle = {item.subtitle}/>
        })}
        </div>
      <div><button onClick={handleDate} > התחתלת משמרת </button> </div>
    </header>
   
    </div>
  );
}

export default App;
