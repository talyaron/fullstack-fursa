"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_datepicker_1 = require("react-datepicker");
require("react-datepicker/dist/react-datepicker.css");
function TableDatePicker() {
    var _a = react_1.useState(new Date()), date = _a[0], setDate = _a[1];
    var _b = react_1.useState(new Date()), startDate = _b[0], setStartDate = _b[1];
    var _c = react_1.useState(new Date()), endDate = _c[0], setEndDate = _c[1];
    var _d = react_1.useState(new Date()), value = _d[0], onChange = _d[1];
    var dt = new Date('02 15 2020');
    var includeDatesArray = [new Date('02-25-2022'), new Date('02-24-2022')];
    var maxDate = dt.setDate(dt.getDate() + 5);
    //  const date=new Date(any);
    function changeStartDate(date) {
        // date=>setStartDate(date)
        setStartDate(date);
    }
    function changeEndDate(date) {
        setEndDate(date);
    }
    var changeDate = function (e) {
        setEndDate(e);
    };
    var filterDays = function (date) {
        // Disable Weekends
        if (date.getDay() === 0 || date.getDay() === 6) {
            return false;
        }
        else {
            return true;
        }
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { style: { display: "flex" } },
            react_1["default"].createElement(react_datepicker_1["default"], { isClearable: true, placeholderText: "Select Start Date", showTimeSelect: true, dateFormat: "MMMM d, yyyy h:mmaa", selected: startDate, selectsStart: true, startDate: startDate, endDate: endDate, includeDates: includeDatesArray, filterDate: filterDays, 
                //  maxDate={maxDate}
                onChange: changeStartDate }),
            react_1["default"].createElement(react_datepicker_1["default"], { isClearable: true, placeholderText: "Select End Date", showTimeSelect: true, dateFormat: "MMMM d, yyyy h:mmaa", selected: endDate, selectsEnd: true, startDate: startDate, endDate: endDate, minDate: startDate, includeDates: includeDatesArray, filterDate: filterDays, 
                //  maxDate={maxDate}
                onChange: changeDate })),
        react_1["default"].createElement("div", null,
            "Selected start date=",
            startDate ? startDate.toString() : null),
        react_1["default"].createElement("div", null,
            "Selected end date=",
            endDate ? endDate.toString() : null)));
}
exports["default"] = TableDatePicker;
