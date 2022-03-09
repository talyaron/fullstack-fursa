import React from "react"
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import axios from "axios";
import Navbar from '../../components/navbar/navbar'
import { fetchUser, getName, userInfo } from '../../../app/reducer/userReducer';
import AccidentComp from '../../components/previousAccidents/previousAccidentComponent';
import fetchAccident, { fetchPreviousAccident } from '../../../app/reducer/accidentReducer';
import {getAccident} from '../../../app/reducer/accidentReducer';

function PreviousAccident() {
    const [accidents, setAccident] = useState([]);
    const dispatch = useAppDispatch()
    const user = useAppSelector(userInfo)
    const preAccidents=useAppSelector(getAccident)
    const email=user.email;

    async function handleGetAccident(e:any)
    {
    
      dispatch(fetchPreviousAccident({"userEmail":email}));
      // const response= await  axios.get("/previousAccidents/get-previous-accidents").then(({ data }) => {
      //   console.log(data);
      //   setAccident(data);
      // });
      
    }
    // useEffect(() => {
    //     axios.get("/previousAccidents/get-previous-accidents").then(({ data }) => {
    //       console.log(data);
    //       setAccident(data);
    //     });
    //   }, []);

    return (
        <div className='AccidentContainer'>
             <Navbar />
  
        <button onClick={handleGetAccident}> get previous accidents </button>
        <div className="accidentsContent">
          {preAccidents.map((accident:any, index:any) => {
            return (
              <AccidentComp key={index} connect={"connect"} details={accident.details} notifications={accident.notifications} />
            );
          })}
        </div>
      </div>
    )

}
export default PreviousAccident;