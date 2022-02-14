//import './App.scss';

//components
//import Card from './view/components/card/Card';

import React, { useState } from 'react';
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

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
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