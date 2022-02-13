import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Outlet} from 'react-router-dom';
import Bar from './view-components-bar/Bar';
const bar:Array<Item> = [{title:'Home',id:'1'},{title:'Our Programs',id:'2'},{title:'About us',id:'3'},{title:'Staff',id:'4'}];

interface Item{
  title:string;
  id:string;
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
          return <Bar key={index} title = {item.title} id = {item.id}/>
        })}
        <Outlet />
        </div>
      <div><button onClick={handleDate} > התחתלת משמרת </button> </div>
    </header>
   
    </div>
  );
}

export default App;
