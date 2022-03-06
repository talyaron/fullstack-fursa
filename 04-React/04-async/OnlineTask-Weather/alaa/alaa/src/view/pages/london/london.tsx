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
                temperature: { type: 'number' }
            }
        },
    },
    required: ['current'],
};

const validate = ajv.compile(weatherschema);

function London() {
    const [london, setlondon] = useState(0);
    useEffect(() => {
        console.log("use effect");

        getData().then((e: any) => {
            setlondon(e.current.temperature);
            
        }).catch(err => {
            console.log(err)
        });
    }, []);
    function getData() {
        return new Promise((resolve, reject) => {
            fetch(`http://api.weatherstack.com/current?access_key=a86268b9fec2fec325d4ac76b371f28b&query=London`)
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
              <div className='london' >
              <h1>the current weather in London</h1>
                  {london}</div>
            </div>
    )
}


export default London