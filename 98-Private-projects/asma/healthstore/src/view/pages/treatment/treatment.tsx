import './treatment.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import EventNoteTwoToneIcon from '@material-ui/icons/EventNoteTwoTone';
import { useAppDispatch } from '../../../app/hooks';
import {update} from '../../../features/treatment/treatmentSlice';

export interface TreatmentInt{
    id: number;
    name: string;
    img: string;
    text: string;
}


function Treatment(props: TreatmentInt){
    const {name,img,text}=props;
    const dispatch = useAppDispatch();

    function handleClick(ev: any) {
        //ev.preventDefault();
        console.log(name);
        dispatch(update(name));
      }


    return(
        <div>
            <div className="treatment">
                <h1>{name}</h1>
                <img src={img}></img>
                <p>{text}</p>
                <Button className="button" onClick={handleClick} href="/calendar" variant="contained" startIcon={<EventNoteTwoToneIcon />} >Book Appointment</Button>
            </div >
        </div>
    )
}

export default Treatment;