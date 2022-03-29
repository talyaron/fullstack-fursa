import './treatment.scss';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import EventNoteTwoToneIcon from '@material-ui/icons/EventNoteTwoTone';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';


function Treatment() {

    const { treatmentCategory } = useParams();
    console.log('treatmentCategory', treatmentCategory);
    const [treatment, setTreatment] = useState({ name: "", img: "", text: "" });
    
    useEffect(() => {
        axios.post('/treatments/get-treatmentByName', { treatment: treatmentCategory }).then(({ data }) => {
            console.log('get treatment by name', data.treatment[0]);
            setTreatment(data.treatment[0]);
        });
    }, [treatmentCategory]);

    return (
        <div>
            <div className="treatment">
                <h1>{treatment.name}</h1>
                <img src={treatment.img}></img>
                <p>{treatment.text}</p>
                <Link to="/calendar"><Button className="button" variant="contained" startIcon={<EventNoteTwoToneIcon />} >Book Appointment</Button> </Link>
            </div >
        </div>
    )
}

export default Treatment;