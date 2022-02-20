import './calendar.scss';
/*
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import EventNoteTwoToneIcon from '@material-ui/icons/EventNoteTwoTone';
//import {DatePicker} from '@material-ui/lab' ;
//import "react-datepicker/dist/react-datepicker.css";
//import DatePicker from "react-datepicker";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';*/


import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker, { TimePickerValue } from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
//import { TimePicker } from '@material-ui/pickers'

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

interface eventInt{
    title: string;
    start: Date;
    end: Date;
    name: string;
    phone: string;
    time?: Date;
}

const events:Array<eventInt> = [
    {
        title: "Cupping  Therapy",
        start: new Date(2022,1, 25),
        end: new Date(2022,1, 25),
        name: "Asma",
        phone:"123" ,
        //time:"10:00"
                  
    },
    {
        title: "Hopi Candles",
        start: new Date(2022, 1, 29),
        end: new Date(2022, 1, 29),
        name: "Asma",
        phone:"123",
         
    }
];


function CalendarFun(){
    const [newEvent, setNewEvent] = useState({ title: "", name:"",phone:"",time:new Date(),start: new Date(2022, 1, 20),end: new Date(2022, 1, 20)});
    const [allEvents, setAllEvents] = useState(events);
    
    
   
    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
        console.log(allEvents);
    }

    return(
        <div>
            <div className="calendar">
            <h1>Calendar</h1>
            <div>
                <input  type="text" placeholder='Add Name' value={newEvent.name} onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })} />
                <input  type="text" placeholder='Add Phone Number' value={newEvent.phone} onChange={(e) => setNewEvent({ ...newEvent, phone: e.target.value })} />
                <input type="text" placeholder="Pick Treatment"  value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" selected={newEvent.start} onChange={(start:Date) => setNewEvent({ ...newEvent, start:start,end:start })} />
                             
                <button onClick={handleAddEvent}>
                    Book Now!
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" style={{ height: 500, margin: "50px" }} />
            </div >
        </div>
    )
}
// <TimePicker value={newEvent.time} onChange={(time) => setNewEvent({ ...newEvent, time:time})} />   
export default CalendarFun;




/*
                <h1>Calendar</h1>
                <div>
                    <input  type="text" placeholder='Add Name'/>
                    <input  type="text" placeholder='Add Phone Number'/>
                    <label>
                        Pick Treatment:
                        <select placeholder='Add Name'>
                            <option value="CuppingTherapy">Cupping Therapy</option>
                            <option value="Facial Treatment">'Facial Treatment</option>
                            <option value="Hopi Ear Candles">Hopi Ear Candles</option>
                        </select>
                    </label>
                    <input type="submit" value="Book Now!" />
                </div>

*/ 