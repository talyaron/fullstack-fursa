import React, { useEffect, useState } from "react";
import Nav from "../nav/Nav";
import Ajv from "ajv";

import './City.scss';

const ajv = new Ajv();

const cityWeather = {
    type: "object",
    properties: {
      current: { type: "object"},
      location: { type: "object"},
    },
    required: ["current", "location"],
    additionalProperties: false,
};

const dataSchema = {
  type: "object",
  items: cityWeather,
};


const validate = ajv.compile(dataSchema);

interface cityProp{
    setCity:any;
    city:any;
}

interface weather {
  current: { temperature: number; weather_descriptions: string;  weather_icons:string;};
  location: { name: string };
}

export default function City(prop:cityProp){
    const{city, setCity} = prop; 
    const [weatherInfo, setWeatherInfo] = useState<weather>();

    useEffect(() => {
        console.log("use effect");
    
        getWeather().then((weatherDB: any) => {
            setWeatherInfo(weatherDB);
            console.log(weatherDB);
         
        }).catch(err=>{
          console.error(err)
        });
      }, [city]);
    
    function getWeather() {
        return new Promise((resolve, reject) => {
          
          //Elias:b96d051120a1d6c4da58c21352316643
          fetch(`http://api.weatherstack.com/current?access_key=b96d051120a1d6c4da58c21352316643&query=${city}`)
            .then((response) => response.json())
            .then((weatherDB) => {
              const valid = validate(weatherDB);
              console.log(valid);

              if (valid) resolve(weatherDB)
              else reject(validate.errors);
            })
            .catch((err) => {
              reject(err);
            });
        });
      }

    return(
      <div>
      <div className="weather-wrapper">
      <div className="weather-card">
            <img src={weatherInfo?.current.weather_icons}  />
            <h1>{weatherInfo?.current.temperature}</h1>
           <p>{weatherInfo?.location.name}</p>
         </div>
        </div>
      <Nav city={city} setCity={setCity}></Nav>

    </div>



    );
}