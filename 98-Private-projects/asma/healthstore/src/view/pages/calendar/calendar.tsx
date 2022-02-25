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
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import DateTimePicker from 'react-datetime-picker';
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker, { TimePickerValue } from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
//import { selectTreatment } from '../../../features/treatment/treatmentSlice';
import { addAppointment, selectAppointment } from '../../../features/appointment/appointmentsSlice';
import { appointment } from '../../../features/appointment/appointmentsSlice';

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

    // const treatment = useAppSelector(selectTreatment);
    const appointments = useAppSelector(selectAppointment);

    const [newEvent, setNewEvent] = useState({ title: "", start: new Date(), end: new Date(), name: "", phone: "" });

    const dispatch = useAppDispatch();

    function handleAddEvent() {
        if (newEvent.name === "" || newEvent.phone === "" || newEvent.title === "")
            alert("Your Info Is Incomplete!!");

        else {
            const result: appointment | undefined = appointments.find((appoint: appointment) =>
                appoint.start.getFullYear() === newEvent.start.getFullYear() &&
                appoint.start.getMonth() === newEvent.start.getMonth() &&
                appoint.start.getDate() === newEvent.start.getDate() &&
                (appoint.start.getHours() === newEvent.start.getHours() ||
                    (appoint.end.getHours() === newEvent.start.getHours() && appoint.end.getMinutes() > newEvent.start.getMinutes()) ||
                    (appoint.start.getHours() === newEvent.end.getHours() && appoint.start.getMinutes() < newEvent.end.getMinutes()))
            )
            if (result)
                alert("Date Is Not Available!!");

            else
                dispatch(addAppointment(newEvent));
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

