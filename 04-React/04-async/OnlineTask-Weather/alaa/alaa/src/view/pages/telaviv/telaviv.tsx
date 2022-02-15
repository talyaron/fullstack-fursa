import React from 'react'
import { useState, useEffect } from "react";
import './telaviv.scss'
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

function TelAviv() {
    const [telaviv, settelaviv] = useState(0);
    useEffect(() => {
        console.log("use effect");

        getData().then((e: any) => {
            settelaviv(e.current.temperature);
            console.log(e);
            console.log(telaviv)

        }).catch(err => {
            console.log(err)
        });
    }, []);
    function getData() {
        return new Promise((resolve, reject) => {
            fetch(`http://api.weatherstack.com/current?access_key=a86268b9fec2fec325d4ac76b371f28b&query=Tel20%Aviv`)
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
            <div className='telaviv' >
            <h1>the current weather in TelAviv</h1>
                {telaviv}</div>

            </div>
    )
}


export default TelAviv
