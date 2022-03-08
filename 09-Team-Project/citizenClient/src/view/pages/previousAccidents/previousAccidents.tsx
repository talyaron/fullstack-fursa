import React from "react"
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../../components/navbar/navbar'

import AccidentComp from '../../components/previousAccidents/previousAccidentComponent';

function PreviousAccident() {
    const [accidents, setAccident] = useState([]);
    // const [accidents, setAccidents] = useState<Array<any>>([
    //     { details: { name: "test 1", content: text }, notifications: 10 },
    //     { details: { name: "test 2", content: text }, notifications: 5 },
    //     { details: { name: "test 3", content: text }, notifications: 4 },
    //   ]);
    
    //   useEffect(() => {
    //     console.log("Accident");
    //   }, [])

    async function handleGetAccident(e:any)
    {
      const response= await  axios.get("/get-previous-accidents").then(({ data }) => {
        console.log(data);
        setAccident(data);
      });
      
    }
    useEffect(() => {
        axios.get("/get-previous-accidents").then(({ data }) => {
          console.log(data);
          setAccident(data);
        });
      }, []);

    return (
        <div className='AccidentContainer'>
             <Navbar />
        <div className="accidentHeader">
          <div className="accidentHeader_home">Home</div>
          <div className="accidentHeader_search">search</div>
          <div className="accidentHeader_settings">settings</div>
        </div>
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