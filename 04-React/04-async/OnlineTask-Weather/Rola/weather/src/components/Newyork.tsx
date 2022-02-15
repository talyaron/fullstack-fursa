import React from 'react'
import {useState,useEffect} from "react";
import Ajv from "ajv";
import '../components/City.scss'
const ajv = new Ajv();
const weatherschema = {
  type: "object",
  properties: {
    current: {
      type: "object",
      properties: {
        temperature: { type: "number" },
      },
    },
  },
  required: ["current"],
};

function Newyork() {
    const [city, setcity] = useState<any>([]);
    useEffect(() => {
      console.log("use effect");
  
      getData()
        .then((e: any) => {

          console.log(city);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    function getData() {
      return new Promise((resolve, reject) => {
        fetch(
          `http://api.weatherstack.com/current?access_key=ff02cf8c1579fbdad53f6c6998e8f238&query=New20%York`
        )
          .then((response) => response.json())
          .then((e) => {
            //const valid = validate(e);
             //console.log(e);
             setcity([...city,e.current.temperature]);
             console.log(city);
           // if (valid) resolve(e);
            //else reject(validate.errors);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
    return <div className="city">{city}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptuXHiM5E-cOKGlmpofzjyHICceMXP4p2nA&usqp=CAU"/>
     </div>;
  }

export default Newyork