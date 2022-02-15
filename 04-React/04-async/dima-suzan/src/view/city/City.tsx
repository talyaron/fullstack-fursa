import React, { useEffect, useState } from "react";
import Nav from "../nav/Nav";
import Ajv from "ajv";

import './City.scss';

const ajv = Ajv();

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
  current: { temperature: number; weather_descriptions: string; wind_speed:number; feelslike:number; weather_icons:string;};
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
          
          //dima: 01e604a29a583534ad0abe72cf45b4f7
          //suzan: e219bf9a8bf80b11b554c4eb69e8d64c
          fetch(`http://api.weatherstack.com/current?access_key=e219bf9a8bf80b11b554c4eb69e8d64c&query=${city}`)
            .then((response) => response.json())
            .then((weatherDB) => {
              // resolve(weatherDB)
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
        <div className="city">
          <h1>{weatherInfo?.location.name}</h1>
          <div className="city__weather">
            <img src={weatherInfo?.current.weather_icons} alt="" />
            <p><span>temperature: </span>{weatherInfo?.current.temperature}</p>
            <p><span>feelslike: </span>{weatherInfo?.current.feelslike}</p>
            <p><span>weather discription: </span>{weatherInfo?.current.weather_descriptions}</p>
            <p><span>wind speed: </span>{weatherInfo?.current.wind_speed}</p>
            
          </div>
          <Nav city={city} setCity={setCity}/>
        </div>
    );
}