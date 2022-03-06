import React, { useEffect, useState } from "react";

import Ajv from "ajv";


import Bar from "./bar";

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
          
          fetch(`http://api.weatherstack.com/current?access_key=12c0f0c94925db508149569c31ff336b&query=${city}`)
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
        <div>
          <h1>{weatherInfo?.location.name}</h1>
          <div>
            <img src={weatherInfo?.current.weather_icons} alt="" />
            <p><span>temperature: </span>{weatherInfo?.current.temperature}</p>
            <p><span>weather discription: </span>{weatherInfo?.current.weather_descriptions}</p>
          </div>
          <Bar city={city} setCity={setCity}/>
        </div>
    );
}