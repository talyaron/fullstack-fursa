import './calendar.scss';
/*
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import EventNoteTwoToneIcon from '@material-ui/icons/EventNoteTwoTone';
//import {DatePicker} from '@material-ui/lab' ;
//import "react-datepicker/dist/react-datepicker.css";
//import DatePicker from "react-datepicker";*/
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core';
import EventNoteTwoToneIcon from '@material-ui/icons/EventNoteTwoTone';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
// import format from "date-fns/format";
// import getDay from "date-fns/getDay";
// import parse from "date-fns/parse";
// import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';
//import DatePicker from "react-datepicker";
import DateTimePicker from 'react-datetime-picker';
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-datepicker/dist/react-datepicker.css";
//import TimePicker, { TimePickerValue } from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
//import { selectTreatment } from '../../../features/treatment/treatmentSlice';
import { addAppointment, getAppointmentsAsyn, selectAppointment } from '../../../features/appointment/appointmentsSlice';
import { appointment } from '../../../features/appointment/appointmentsSlice';
import axios from 'axios';

// const locales = {
//     "en-US": require("date-fns/locale/en-US"),
// };
// const localizer = dateFnsLocalizer({
//     format,
//     parse,
//     startOfWeek,
//     getDay,
//     locales,
// });
const localizer = momentLocalizer(moment);



// interface eventInt{
//     title: string;
//     start: Date;
//     end: Date;
//     name: string;
//     phone: string;
// }

// const events:Array<eventInt> = [
//     {
//         title: "Cupping  Therapy",
//         start: new Date('2022-03-07T04:30:00.000Z'),
//         end: new Date('2022-03-07T05:30:00.000Z'),
//         name: "Asma",
//         phone:"123" ,            
//     }
// ];





function CalendarFun() {

    const [newEvent, setNewEvent] = useState({ title: "", start: new Date(), end: new Date(), name: "", phone: "" });
    let appointments = useAppSelector(selectAppointment);
    const dispatch = useAppDispatch();

    // const [arr, setArr] = useState([]);

    useEffect(() => {

        // fetch('/get-appointments')
        // .then(res => res.json())
        // .then(data => {
        //     console.log("app");
        //     console.log(data.data);
        //     let {title,start,end,name,phone}=data.data[0];
        //     events.push({title:title,start:new Date(start),end:new Date(end),name,phone});
        //     //console.log(title,new Date(start),end);
        //     //setArr(data.data);
        // }).catch(err => {
        //     console.error(err);
        // })

        // console.log("events");
        // console.log(events);
        // console.log(arr);



        dispatch(getAppointmentsAsyn());

        //axios.get('http://localhost:3004/AppointmentData').then(({data})=>console.log(data));
        // //fetch kittens
        // fetch('/get-all-kitens')
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log("data");
        //         console.log(data);
        //         //setKittens(data);
        //     }).catch(err => {
        //         console.error(err);
        //     })


    }, []);


    async function handleDeleteEvent(){
        //missing info
        if (newEvent.name === "" || newEvent.phone === "" || newEvent.title === "") { alert("Your Info Is Incomplete!!"); return; }
        
        const result: appointment | undefined = appointments.find((appoint: appointment) =>
            (new Date(appoint.start)).getFullYear() === newEvent.start.getFullYear() &&
            (new Date(appoint.start)).getMonth() === newEvent.start.getMonth() &&
            (new Date(appoint.start)).getDate() === newEvent.start.getDate() &&
            (new Date(appoint.start)).getHours() === newEvent.start.getHours() && 
            (new Date(appoint.end)).getMinutes() === newEvent.start.getMinutes()&&
            appoint.name === newEvent.name &&
            appoint.phone === newEvent.phone &&
            appoint.title === newEvent.title )
            
        if (!result)
            alert("There Is No Matching Appointment!!");

        else {
            alert("An Appointment Found!!");
            console.log('deleted')
            //console.log(newEvent.start)
            const {data} = await axios.post('/delete-appointment',{ title: newEvent.title, start: newEvent.start, end: newEvent.end, name: newEvent.name, phone: newEvent.phone });
            console.log(data);
            dispatch(getAppointmentsAsyn());
        }
    }

    function handleAddEvent() {  

        //missing info
        if (newEvent.name === "" || newEvent.phone === "" || newEvent.title === "") { alert("Your Info Is Incomplete!!"); return; }

        //past date
        const cuurentDay = new Date();
        if (newEvent.start.getFullYear() < cuurentDay.getFullYear() ||
            (newEvent.start.getFullYear() === cuurentDay.getFullYear() && newEvent.start.getMonth() < cuurentDay.getMonth()) ||
            (newEvent.start.getFullYear() === cuurentDay.getFullYear() && newEvent.start.getMonth() === cuurentDay.getMonth() && newEvent.start.getDate() <= cuurentDay.getDate())) { alert("Date Is Not Available!!"); return; }

        //Out of Openning Hours    
        if (newEvent.start.getHours() < 8 || newEvent.start.getHours() > 16 || newEvent.start.getDay() === 5 || newEvent.start.getDay() === 6) { alert("Out of Openning Hours!!\nSun-Thu 08:00-18:00"); return; }

        //dates collision
        const result: appointment | undefined = appointments.find((appoint: appointment) =>
            (new Date(appoint.start)).getFullYear() === newEvent.start.getFullYear() &&
            (new Date(appoint.start)).getMonth() === newEvent.start.getMonth() &&
            (new Date(appoint.start)).getDate() === newEvent.start.getDate() &&
            ((new Date(appoint.start)).getHours() === newEvent.start.getHours() ||
                ((new Date(appoint.end)).getHours() === newEvent.start.getHours() && (new Date(appoint.end)).getMinutes() > newEvent.start.getMinutes()) ||
                ((new Date(appoint.start)).getHours() === newEvent.end.getHours() && (new Date(appoint.start)).getMinutes() < newEvent.end.getMinutes()))
        )
        if (result)
            alert("Date Is Not Available!!");

        else {
            dispatch(addAppointment({ title: newEvent.title, start: newEvent.start.toJSON(), end: newEvent.end.toJSON(), name: newEvent.name, phone: newEvent.phone }));
            // let data= { id:appointments.length+1 ,title:newEvent.title, start: newEvent.start.toJSON(),end:newEvent.end.toJSON(), name: newEvent.name, phone:newEvent.phone};
            // axios.post('http://localhost:3004/AppointmentData',data);
        }


    }

    return (
        <div>
            <div className="calendar">
                <h1>Calendar</h1>
                <div>
                    <div className="info">
                        <TextField required className="inputs" id="standard-basic" label="Add Name" variant="standard" value={newEvent.name} onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })} />
                        <TextField required className="inputs" type="number" id="standard-basic" label="Add Phone Number" variant="standard" value={newEvent.phone} onChange={(e) => setNewEvent({ ...newEvent, phone: e.target.value })} />
                        <Box className="box" sx={{ minWidth: 170 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Pick Appointment</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={newEvent.title}
                                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value as string })}
                                >
                                    <MenuItem value="Cupping Therapy">Cupping Therapy</MenuItem>
                                    <MenuItem value="Facial Treatment">Facial Treatment</MenuItem>
                                    <MenuItem value="Hopi Ear Candles">Hopi Ear Candles</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <DateTimePicker className="date" value={newEvent.start} onChange={(value) => setNewEvent({ ...newEvent, start: value, end: (new Date(value.getFullYear(), value.getMonth(), value.getDate(), value.getHours() + 1, value.getMinutes())) })} />
                    <Button className="button" onClick={handleAddEvent} startIcon={<EventNoteTwoToneIcon />} variant="contained" >Book Now!</Button>
                    <Button className="button" onClick={handleDeleteEvent} startIcon={<DeleteOutlineIcon />} variant="contained" >Delete Appointment!</Button>
                </div>
                <div className="table">
                    <Calendar views={["month", "agenda"]} localizer={localizer} events={appointments} startAccessor="start" endAccessor="end" />
                </div>
            </div>
        </div>
    )
}

export default CalendarFun;

