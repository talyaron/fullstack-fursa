"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
require("./calendar.scss");
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
var format_1 = require("date-fns/format");
var getDay_1 = require("date-fns/getDay");
var parse_1 = require("date-fns/parse");
var startOfWeek_1 = require("date-fns/startOfWeek");
var react_1 = require("react");
var react_big_calendar_1 = require("react-big-calendar");
require("react-big-calendar/lib/css/react-big-calendar.css");
var react_datetime_picker_1 = require("react-datetime-picker");
require("react-datetime-picker/dist/DateTimePicker.css");
require("react-datepicker/dist/react-datepicker.css");
require("react-time-picker/dist/TimePicker.css");
var locales = {
    "en-US": require("date-fns/locale/en-US")
};
var localizer = react_big_calendar_1.dateFnsLocalizer({
    format: format_1["default"],
    parse: parse_1["default"],
    startOfWeek: startOfWeek_1["default"],
    getDay: getDay_1["default"],
    locales: locales
});
var events = [
    {
        title: "Cupping  Therapy",
        start: new Date(2022, 1, 25, 6, 30),
        end: new Date(2022, 1, 25, 7, 30),
        name: "Asma",
        phone: "123"
    },
    {
        title: "Hopi Candles",
        start: new Date(2022, 1, 26, 5),
        end: new Date(2022, 1, 26, 6),
        name: "Asma",
        phone: "123"
    }
];
function CalendarFun() {
    var _a = react_1.useState({ title: "", name: "", phone: "", start: new Date(), end: new Date() }), newEvent = _a[0], setNewEvent = _a[1];
    var _b = react_1.useState(events), allEvents = _b[0], setAllEvents = _b[1];
    function handleAddEvent() {
        setAllEvents(__spreadArrays(allEvents, [newEvent]));
        console.log(allEvents);
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "calendar" },
            react_1["default"].createElement("h1", null, "Calendar"),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("input", { type: "text", placeholder: 'Add Name', value: newEvent.name, onChange: function (e) { return setNewEvent(__assign(__assign({}, newEvent), { name: e.target.value })); } }),
                react_1["default"].createElement("input", { type: "text", placeholder: 'Add Phone Number', value: newEvent.phone, onChange: function (e) { return setNewEvent(__assign(__assign({}, newEvent), { phone: e.target.value })); } }),
                react_1["default"].createElement("input", { type: "text", placeholder: "Pick Treatment", value: newEvent.title, onChange: function (e) { return setNewEvent(__assign(__assign({}, newEvent), { title: e.target.value })); } }),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(react_datetime_picker_1["default"], { required: true, value: newEvent.start, onChange: function (value) { return setNewEvent(__assign(__assign({}, newEvent), { start: value, end: (new Date(value.getFullYear(), value.getMonth(), value.getDate(), value.getHours() + 1, value.getMinutes())) })); } }),
                    react_1["default"].createElement("button", { onClick: handleAddEvent }, "Book Now!"))),
            react_1["default"].createElement(react_big_calendar_1.Calendar, { localizer: localizer, events: allEvents, startAccessor: "start", endAccessor: "end", style: { height: 500, margin: "50px" } }))));
}
// <DatePicker placeholderText="Start Date" selected={newEvent.start} onChange={(start:Date) => setNewEvent({ ...newEvent, start:start,end:start })} />
// <TimePicker value={newEvent.time} onChange={(time) => setNewEvent({ ...newEvent, time:time})} />   
exports["default"] = CalendarFun;
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
