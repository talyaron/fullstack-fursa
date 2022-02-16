import React from 'react'
import { useState, useEffect } from "react";
import './london.scss'
import Ajv from "ajv";
import Menu from '../../components/menu/menu'
const ajv = new Ajv();
const weatherschema = {
    type: "object",
    properties: {
        current: {
            type: "object",
            properties: {
                temp_c: { type: 'number' }
            }
        },
    },
    required: ['current'],
    //additionalProperties: false,
};

const validate = ajv.compile(weatherschema);

function London() {
    const [london, setLondon] = useState(0);
    let newDate = new Date()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[newDate.getDay()];
    let strDate = 'o Y m d'
        .replace('Y', "" + newDate.getFullYear())
        .replace('m', "" + newDate.getMonth() + 1)
        .replace('d', "" + newDate.getDate())
        .replace('o', day);
    useEffect(() => {
        console.log("use effect");

        getData().then((e: any) => {
            setLondon(e.current.temp_c);
            console.log(e.current.temp_c);
            console.log(london)

        }).catch(err => {
            console.log(err)
        });
    }, []);
    function getData() {
        return new Promise((resolve, reject) => {
            fetch(`http://api.weatherapi.com/v1/current.json?key=91901e4c18864d49872135614221502&q=London&aqi=no`)
                .then((response) => response.json())
                .then((e) => {
                    const valid = validate(e);
                    console.log(e);
                    if (valid) resolve(e)
                    else reject(validate.errors);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
    return (
        <div className="main">
            <Menu></Menu>
            <div className="background">
                <div className="badget">
                    <div className="date">{strDate}</div>
                    <div className="name">Tel Aviv<sup>IL</sup></div>
                    <div className="temp">{london}<sup>°C</sup></div>
                </div>
            </div>
        </div>
    )
}

export default London