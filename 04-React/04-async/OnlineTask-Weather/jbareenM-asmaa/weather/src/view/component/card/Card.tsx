import React,{ useEffect, useState } from 'react';
import './Card.scss';
import Ajv from "ajv";
const ajv = new Ajv();

const weatherSchema = {
    type: "object",
    properties: {
        current: { type: "object" },
        location: { type: "object" },
        request: { type: "object" },
        
    },
    required: ["current", "location"],
    additionalProperties: false,
};

const dataSchema = {
    type: "object",
    items: weatherSchema,
};

const validate = ajv.compile(dataSchema);

interface weather {
    current: { temperature: number; weather_descriptions:Array<string>; humidity:number };
    location: { country: string };
    
}


function Card(props:any) {
    const {query} = props;
    const [data, setData] = useState<weather>();

    console.log("data: ", query)
    useEffect(() => {
        getWeather().then((weather: any) => {
            setData(weather);
            console.log(weather);
        }).catch(err => {
            console.log(err)
        });
    }, [])


    function getWeather() {
        return new Promise((resolve, reject) => {
            fetch(`http://api.weatherstack.com/current?access_key=b950af67c30a6c465df1f85f63111934&${query}`)
                .then((r) => r.json())
                .then((weather) => {
                    const valid = validate(weather);
                    console.log(valid);
                    if (valid)
                        resolve(weather)
                    else reject(validate.errors);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    return (
        <div className="cardContainer">
            <p>Country: {data?.location.country}</p>
            <p>Weather_Descriptions: {data?.current.weather_descriptions}</p>
            <p>Temperature: {data?.current.temperature}</p>
            <p>Humidity: {data?.current.humidity}</p>
        </div>
    );
}

export default Card;
