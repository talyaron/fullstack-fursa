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
  type: "array",
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
      fetch(`http://api.weatherstack.com/current?access_key=c5b7804e5d20cb19bd8239fc79235b93&query=${cityName}`)
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
  <BrowserRouter>
    <Routes>
     <Route path="/" element={<App/>} />
      <Route path="london" element={<London weather={weather} setWeather={setWeather}  />} />
      <Route path="newYork" element={<NewYork weather={weather} setWeather={setWeather}  />} />
      <Route path="telAviv" element={<TelAviv weather={weather} setWeather={setWeather}  />} />

    </Routes>
  </BrowserRouter>
  return (
    <div className="App">
      <header className="App-header">
        {/* <Link to="/london">london <button>aaa</button></Link>
        <Link to="/newYork">NewYork</Link>
        <Link to="/telAviv">London</Link> */}
        

      </header>
    </div>
  );
}

export default App;
