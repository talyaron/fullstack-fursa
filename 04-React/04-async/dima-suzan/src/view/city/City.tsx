import React, { useEffect, useState } from "react";
import Nav from "../nav/Nav";
import Ajv from "ajv";
const ajv = Ajv();

const cityWeather = {
    type: "object",
    properties: {
      current: { type: "object", temperature :{type : "number"} },
      location: { type: "object", name :{type : "string"} },
    },
    required: ["current"],
    additionalProperties: false,
};


const validate = ajv.compile(cityWeather);

interface cityProp{
    setCity:any;
    city:any;
}


export default function City(prop:cityProp){
    const{city, setCity} = prop;
    const [weatherInfo, setWeatherInfo] = useState({});

    useEffect(() => {
        console.log("use effect");
    
        getWeather().then((weatherDB: any) => {
            setWeatherInfo(weatherDB);
          console.log(weatherDB);
         
        }).catch(err=>{
          console.log(err)
        });
      }, []);
    
    function getWeather() {
        return new Promise((resolve, reject) => {
          fetch(`http://api.weatherstack.com/current?access_key=c5b7804e5d20cb19bd8239fc79235b93&query=New%20York`)
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
            <p>{weatherInfo.location.name}</p>
            <p>weatherInfo.current.temperature</p>

            <Nav city={city} setCity={setCity}/>
        </div>
    );
}