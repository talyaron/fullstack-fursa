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
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState ,useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
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

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});


function CalendarFun() {

    const [newEvent, setNewEvent] = useState({ title: "", start: new Date(), end: new Date(), name: "", phone: "" });
    const appointments = useAppSelector(selectAppointment);
    const dispatch = useAppDispatch();
    


    useEffect(() => {
        dispatch(getAppointmentsAsyn());

        //console.log(date.getFullYear());

        //axios.get('http://localhost:3004/AppointmentData').then(({data})=>console.log(data));

    }, []);




    function handleAddEvent() {
        if (newEvent.name === "" || newEvent.phone === "" || newEvent.title === "")
            alert("Your Info Is Incomplete!!");

        else {
        //     dispatch(addAppointment(newEvent));
        //     console.log(appointments);
        //      //console.log(newEvent.start);
        //      var json ="2022-02-28T02:00:00.000Z";
        //      var date=new Date(JSON.parse(json));
        //      console.log(date);
        //      //console.log(date.getFullYear());

           
            const result: appointment | undefined = appointments.find((appoint: appointment) =>
           
            // //var json1 = appoint.start;
            // //var json2 = appoint.end;
            // var dateStart = new Date(appoint.start)
            // //console.log(json1);
            // console.log(dateStart); 
            // var dateEnd = (new Date(appoint.end));
            // console.log(dateEnd); 

            (new Date(appoint.start)).getFullYear() === newEvent.start.getFullYear() &&
            (new Date(appoint.start)).getMonth() === newEvent.start.getMonth() &&
            (new Date(appoint.start)).getDate() === newEvent.start.getDate() &&
                ((new Date(appoint.start)).getHours() === newEvent.start.getHours() ||
                    ((new Date(appoint.end)).getHours() === newEvent.start.getHours() && (new Date(appoint.end)).getMinutes() > newEvent.start.getMinutes()) ||
                    ((new Date(appoint.start)).getHours() === newEvent.end.getHours() && (new Date(appoint.start)).getMinutes() < newEvent.end.getMinutes()))
           )
            if (result)
                alert("Date Is Not Available!!");

            else{ 
                // console.log(newEvent);
                // console.log(appointments);
                dispatch(addAppointment({ title: newEvent.title, start: newEvent.start.toJSON(), end:newEvent.end.toJSON(), name: newEvent.name, phone: newEvent.phone }));
            }
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
                </div>
                <div className="table">
                    <Calendar localizer={localizer} events={appointments} startAccessor="start" endAccessor="end" />
                </div>
            </div>
        </div>
    )
}

export default CalendarFun;

