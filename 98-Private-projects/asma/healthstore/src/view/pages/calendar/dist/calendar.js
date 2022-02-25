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
exports.__esModule = true;
require("./calendar.scss");
/*
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import EventNoteTwoToneIcon from '@material-ui/icons/EventNoteTwoTone';
//import {DatePicker} from '@material-ui/lab' ;
//import "react-datepicker/dist/react-datepicker.css";
//import DatePicker from "react-datepicker";*/
var Box_1 = require("@material-ui/core/Box");
var TextField_1 = require("@material-ui/core/TextField");
var FormControl_1 = require("@material-ui/core/FormControl");
var Select_1 = require("@material-ui/core/Select");
var InputLabel_1 = require("@material-ui/core/InputLabel");
var MenuItem_1 = require("@material-ui/core/MenuItem");
var core_1 = require("@material-ui/core");
var EventNoteTwoTone_1 = require("@material-ui/icons/EventNoteTwoTone");
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
var hooks_1 = require("../../../app/hooks");
//import { selectTreatment } from '../../../features/treatment/treatmentSlice';
var appointmentsSlice_1 = require("../../../features/appointment/appointmentsSlice");
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
function CalendarFun() {
    // const treatment = useAppSelector(selectTreatment);
    var appointments = hooks_1.useAppSelector(appointmentsSlice_1.selectAppointment);
    var _a = react_1.useState({ title: "", start: new Date(), end: new Date(), name: "", phone: "" }), newEvent = _a[0], setNewEvent = _a[1];
    var dispatch = hooks_1.useAppDispatch();
    function handleAddEvent() {
        if (newEvent.name === "" || newEvent.phone === "" || newEvent.title === "")
            alert("Your Info Is Incomplete!!");
        else {
            var result = appointments.find(function (appoint) {
                return appoint.start.getFullYear() === newEvent.start.getFullYear() &&
                    appoint.start.getMonth() === newEvent.start.getMonth() &&
                    appoint.start.getDate() === newEvent.start.getDate() &&
                    (appoint.start.getHours() === newEvent.start.getHours() ||
                        (appoint.end.getHours() === newEvent.start.getHours() && appoint.end.getMinutes() > newEvent.start.getMinutes()) ||
                        (appoint.start.getHours() === newEvent.end.getHours() && appoint.start.getMinutes() < newEvent.end.getMinutes()));
            });
            if (result)
                alert("Date Is Not Available!!");
            else
                dispatch(appointmentsSlice_1.addAppointment(newEvent));
        }
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "calendar" },
            react_1["default"].createElement("h1", null, "Calendar"),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "info" },
                    react_1["default"].createElement(TextField_1["default"], { required: true, className: "inputs", id: "standard-basic", label: "Add Name", variant: "standard", value: newEvent.name, onChange: function (e) { return setNewEvent(__assign(__assign({}, newEvent), { name: e.target.value })); } }),
                    react_1["default"].createElement(TextField_1["default"], { required: true, className: "inputs", type: "number", id: "standard-basic", label: "Add Phone Number", variant: "standard", value: newEvent.phone, onChange: function (e) { return setNewEvent(__assign(__assign({}, newEvent), { phone: e.target.value })); } }),
                    react_1["default"].createElement(Box_1["default"], { className: "box", sx: { minWidth: 170 } },
                        react_1["default"].createElement(FormControl_1["default"], { fullWidth: true },
                            react_1["default"].createElement(InputLabel_1["default"], { id: "demo-simple-select-label" }, "Pick Appointment"),
                            react_1["default"].createElement(Select_1["default"], { labelId: "demo-simple-select-label", id: "demo-simple-select", value: newEvent.title, onChange: function (e) { return setNewEvent(__assign(__assign({}, newEvent), { title: e.target.value })); } },
                                react_1["default"].createElement(MenuItem_1["default"], { value: "Cupping Therapy" }, "Cupping Therapy"),
                                react_1["default"].createElement(MenuItem_1["default"], { value: "Facial Treatment" }, "Facial Treatment"),
                                react_1["default"].createElement(MenuItem_1["default"], { value: "Hopi Ear Candles" }, "Hopi Ear Candles"))))),
                react_1["default"].createElement(react_datetime_picker_1["default"], { className: "date", value: newEvent.start, onChange: function (value) { return setNewEvent(__assign(__assign({}, newEvent), { start: value, end: (new Date(value.getFullYear(), value.getMonth(), value.getDate(), value.getHours() + 1, value.getMinutes())) })); } }),
                react_1["default"].createElement(core_1.Button, { className: "button", onClick: handleAddEvent, startIcon: react_1["default"].createElement(EventNoteTwoTone_1["default"], null), variant: "contained" }, "Book Now!")),
            react_1["default"].createElement("div", { className: "table" },
                react_1["default"].createElement(react_big_calendar_1.Calendar, { localizer: localizer, events: appointments, startAccessor: "start", endAccessor: "end" })))));
}
exports["default"] = CalendarFun;
