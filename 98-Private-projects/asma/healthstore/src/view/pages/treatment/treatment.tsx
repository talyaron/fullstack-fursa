import './treatment.scss';
import React,{ useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import EventNoteTwoToneIcon from '@material-ui/icons/EventNoteTwoTone';
import { useAppDispatch } from '../../../app/hooks';
import {update} from '../../../features/treatment/treatmentSlice';
import { Link } from "react-router-dom";

// export interface TreatmentInt{
//     id: number;
//     name: string;
//     img: string;
//     text: string;
// }


function Treatment(props:any){
    //const {name,img,text}=props;
    const [treatment, setTreatment] = useState({ title: "" ,img:"",text:""});
    const {title} =props;
    useEffect(() => {

        fetch(`/treatments/get-${title}`)
            .then(res => res.json())
            .then(data => {
                setTreatment(data[0]);
                console.log(data[0]);
            }).catch(err => {
                console.error(err);
            })
    }, []);

    return(
        <div>
            <div className="treatment">
                <h1>{treatment.title}</h1>
                <img src={treatment.img}></img>
                <p>{treatment.text}</p>
                <Link to="/calendar"><Button className="button"  variant="contained" startIcon={<EventNoteTwoToneIcon />} >Book Appointment</Button> </Link>
            </div >
        </div>
    )
}

export default Treatment;