//import './App.scss';

//components
//import Card from './view/components/card/Card';

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./view/pages/page1/page1";
import Page2 from "./view/pages/page2/page2";


interface Product{
  name: string;
  count: number;
  id: number;
}

function App() {
  
const [state, setState] = useState<Array<Product>>([]);
 /* useEffect(()=>{
   fetch('/get-all-users').then(res=>res.json()).then(data=>{
      console.log(data)
      setPpls(data);
      
    })
  },[])
  const [ppls,setPpls ] = useState([])*/
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 setState={setState} state={state}  />} />
        <Route path="page1" element={<Page1 setState={setState} state={state} />} />
        <Route path="page2" element={<Page2 setState={setState} state={state} />} />
      </Routes>
    </BrowserRouter>
    
  );


}

export default App;
/*      {students.map((student, index)=>{
        const {name, place, img} = student; //deconstractor 

        return <Card key={index} info={{name, place, img}}/>
      })} */
//<Route path="/" element={<App />} />








      /**
       *   return (
    <div className="App">
      <header className="App-header">
      {students.map((student, index)=>{
        const {name, place, img} = student; //deconstractor 

        return <Card key={index} info={{name, place, img}}/>
      })}
      </header>
    </div>
  );
       * 
       * 
       * 
       */