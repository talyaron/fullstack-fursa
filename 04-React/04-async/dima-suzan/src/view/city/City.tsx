import React, { useEffect, useState } from "react";
import Nav from "../nav/Nav";
import Ajv from "ajv";
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
  current: { temperature: number; };
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
      }, []);
    
    function getWeather() {
        return new Promise((resolve, reject) => {
          
          //dima: 01e604a29a583534ad0abe72cf45b4f7
          //suzan: bea7927e966b10f8e3f33df231779c2a
          fetch(`http://api.weatherstack.com/current?access_key=01e604a29a583534ad0abe72cf45b4f7&query=${city}`)
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
          <div>
            <p>{city}</p>
            {/* <p>temperature : {weatherInfo?.current.temperature}</p>
            <p>name : {weatherInfo?.location.name}</p> */}
          </div>
          <Nav city={city} setCity={setCity}/>
        </div>
    );
}