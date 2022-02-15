import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState ,useEffect} from 'react';

import './App.css';
import TA from './components/TA/TA';
import London from './components/London/London';
import NY from './components/NY/NY';
import Navbar from './components/Navbar/navbar'

interface weatherLondon{
  LondonTemp:any;
  setLondonTemp:any;
  weather_descriptions:string;
  temperature:number;
}
interface weatherTA{
  TATemp:any;
  setTATemp:any;
  weather_descriptions:string;
  temperature:number;
}
interface weatherNY{
  NYTemp:any;
  setNYTemp:any;
  weather_descriptions:string;
  temperature:number;
}


function App() {
  const [TATemp,setTATemp]=useState(0);
  const [NYTemp,setNYTemp]=useState(0);
  const [LondonTemp,setLondonTemp]=useState(0);



  getWather();

  function getWather() {
      fetch(`http://api.weatherstack.com/current?access_key=b96d051120a1d6c4da58c21352316643&query=Tel20%Aviv`)
      .then(response => response.json())
      .then(data => console.log(data.current))
        .catch((err) => {
          console.error(err);
        });
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<NY NYTemp={NYTemp} setNYTemp={setNYTemp}/>} />
        <Route path="/TA" element={<TA  TATemp={TATemp} setTATemp={setTATemp} />} />
        <Route path="/London" element={<London  LondonTemp={LondonTemp} setLondonTemp={setLondonTemp} />} />
      </Routes>
      <Navbar/>
    </Router>
  );
}

export default App;
