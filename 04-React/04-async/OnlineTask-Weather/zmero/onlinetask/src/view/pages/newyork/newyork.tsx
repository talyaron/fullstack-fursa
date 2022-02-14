import React from 'react'
import { useState, useEffect } from "react";
import './newyork.scss'
import Ajv from "ajv";
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
    const [newyork, setNewyork] = useState([]);
    useEffect(() => {
        console.log("use effect");

        getData().then((e: any) => {
            setNewyork(e);
            console.log(e);
            console.log(newyork)

        }).catch(err => {
            console.log(err)
        });
    }, []);
    function getData() {
        return new Promise((resolve, reject) => {
            fetch(`http://api.weatherstack.com/current?access_key=c5b7804e5d20cb19bd8239fc79235b93&query=New20%York`)
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
        <div>{}</div>
    )
}

export default NewYork