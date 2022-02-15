import React from "react";
import Ajv from "ajv";
import {useState,useEffect} from "react";
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

const validate = ajv.compile(weatherschema);

function City(num:Number) {
  const [city, setcity] = useState([]);
  useEffect(() => {
    console.log("use effect");

    getData()
      .then((e: any) => {
        setcity(e.current.temperature);
        console.log(e);
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
          const valid = validate(e);
          console.log(e);
          if (valid) resolve(e);
          else reject(validate.errors);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  return <div>{city}</div>;
}

export default City;
