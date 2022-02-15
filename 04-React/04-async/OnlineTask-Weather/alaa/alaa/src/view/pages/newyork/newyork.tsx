import React from 'react'
import { useState, useEffect } from "react";
import './newyork.scss'
import Ajv from "ajv";
import Menu from '../../components/menu/menu'

const ajv = new Ajv();
const weatherschema = {
    type: "object",
    properties: {
        current: {
            type: "object",
            properties: {
                temperature: { type: 'number' }
            }
        },
    },
    required: ['current'],
    //additionalProperties: false,
};

const validate = ajv.compile(weatherschema);

function NewYork() {
    const [newyork, setNewyork] = useState(0);
    useEffect(() => {
        console.log("use effect");

        getData().then((e: any) => {
            setNewyork(e.current.temperature);
            console.log(e);
            console.log(newyork)

        }).catch(err => {
            console.log(err)
        });
    }, []);
    function getData() {
        return new Promise((resolve, reject) => {
            fetch(`http://api.weatherstack.com/current?access_key=a86268b9fec2fec325d4ac76b371f28b&query=New20%York`)
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
        <div>
              <Menu></Menu>
           
            <div className='newYork' >
            <h1>the current weather in NewYork</h1>
                {newyork}</div>
            </div>
    )
}

export default NewYork