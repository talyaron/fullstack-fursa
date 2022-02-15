import { useEffect, useState } from 'react';
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
    current: { temperature: number; };
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
            fetch(`http://api.weatherstack.com/current?access_key=c5b7804e5d20cb19bd8239fc79235b93&${query}`)
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
            <p>temperature: {data?.current.temperature}</p>
            <p>location: {data?.location.country}</p>
        </div>
    );
}

export default Card;
