import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import { render } from "react-dom";
//import Navbar from './view/components/navbar/Navbar';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import London from "./view/pages/london/London";
import NewYork from "./view/pages/newYork/NewYork";
import TelAviv from './view/pages/telAviv/TelAviv';
import Ajv from "ajv";
import Cities from './view/pages/cities/Cities';
const ajv = Ajv();

const weatherSchema = {
  type: "object",
  properties: {
    current: { type: "object",
    temperature:{type:"number"}},
  },
  required: ["current"],
  additionalProperties: false,
};


const dataSchema = {
  type: "object",
  items: weatherSchema,
};
const validate = ajv.compile(dataSchema);



function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    
    getWeather('London').then((weatherDB: any) => {
      setWeather(weatherDB);
      console.log(weatherDB);
     
    }).catch(err=>{
      console.log(err)
    }); 
   
  }, []);
  function getWeather(cityName:string) {
    return new Promise((resolve, reject) => {
      fetch(`http://api.weatherstack.com/current?access_key=d619498db69ef21f1475f9b54cda6417&query=${cityName}`)
        .then((response) => response.json())
        .then((weatherDB) => {
          const valid = validate(weatherDB);
          console.log(valid);
          if (valid) resolve(weatherDB)
          reject(validate.errors);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  
  return (
    <BrowserRouter>
  <Routes>
     <Route path="/" element={<Cities/>} />
      <Route path="london" element={<London weather={weather} setWeather={setWeather}  />} />
      <Route path="newYork" element={<NewYork weather={weather} setWeather={setWeather}  />} />
      <Route path="telAviv" element={<TelAviv weather={weather} setWeather={setWeather}  />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
