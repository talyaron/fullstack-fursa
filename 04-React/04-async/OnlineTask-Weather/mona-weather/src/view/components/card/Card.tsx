import Ajv from "ajv";

import {useState,useEffect} from 'react'
const ajv = Ajv();

const weatherSchema = {
    type: "object",
    properties: {
      current: { type: "object",
      temperature:{type:"number"}},
      location:{type:"object"},
    },
    required: ["current","location"],
    additionalProperties: false,
  };
  
  
  const dataSchema = {
    type: "object",
    items: weatherSchema,
  };
  const validate = ajv.compile(dataSchema);

  interface CardProps{
      cityName:string;
  }
  interface weatherArr{
    current:any;
    location:any;
    city:any;
  }
function Card(props: CardProps)
{
    const {cityName}=props;
    const [weather, setWeather] = useState<weatherArr>();

  useEffect(() => {
    
    getWeather(cityName).then((weatherDB: any) => {
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
    return(
        <div>
             <p> temperature: {weather?.current.temperature}</p>
             <p>location:{weather?.location.name}</p>
        </div>
    );

}
export default Card