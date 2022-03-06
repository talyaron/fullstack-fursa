import './treatment.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import EventNoteTwoToneIcon from '@material-ui/icons/EventNoteTwoTone';


export interface TreatmentInt{
    id: number;
    name: string;
    img: string;
    text: string;
}


function Treatment(props: TreatmentInt){
    const {name,img,text}=props
    return(
        <div>
            <div className="treatment">
                <h1>{name}</h1>
                <img src={img}></img>
                <p>{text}</p>
                <Button className="button" href="/calendar" variant="contained" startIcon={<EventNoteTwoToneIcon />} >Book Appointment</Button>
            </div >
        </div>
    )
}

export default Treatment;