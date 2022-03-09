import React from "react"
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../../components/navbar/navbar'

import AccidentComp from '../../components/previousAccidents/previousAccidentComponent';

function PreviousAccident() {
    const [accidents, setAccident] = useState([]);


    async function handleGetAccident(e:any)
    {
      const response= await  axios.get("/get-previous-accidents").then(({ data }) => {
        console.log(data);
        setAccident(data);
      });
      
    }
    useEffect(() => {
        axios.get("/previousAccidents/get-previous-accidents").then(({ data }) => {
          console.log(data);
          setAccident(data);
        });
      }, []);

    return (
        <div className='AccidentContainer'>
             <Navbar />
  
        <button onClick={handleGetAccident}> get previous accidents </button>
        <div className="accidentsContent">
          {accidents.map((accident:any, index:any) => {
            return (
              <AccidentComp key={index} connect={"connect"} details={accident.details} notifications={accident.notifications} />
            );
          })}
        </div>
      </div>
    )

}
export default PreviousAccident;