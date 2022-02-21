"use strict";
exports.__esModule = true;
require("./TravelInfo1.scss");
var ej2_react_calendars_1 = require("@syncfusion/ej2-react-calendars");
var react_router_dom_1 = require("react-router-dom");
var TravelInfo1 = function () {
    var state = react_router_dom_1.useLocation().state;
    function clickProceed(e) {
        nav('/Signup', {
            state: state
        });
    }
    var dateValue = new Date(new Date().getFullYear(), new Date().getMonth(), 20);
    return (React.createElement("div", { className: "wrapper" },
        React.createElement("div", { className: "header" }, " Fill travel info"),
        React.createElement("form", { action: "", className: "TarvelInfo1Form" },
            React.createElement("div", { className: "whereHeader" }, "Where"),
            React.createElement("input", { type: "text", placeholder: 'Type here', className: 'whereInput' }),
            React.createElement("div", { className: "whenHeader" }, "When"),
            React.createElement(ej2_react_calendars_1.CalendarComponent, { id: "calendar", isMultiSelection: true }),
            React.createElement("div", { className: "HowMany" }, "Whow many People"),
            React.createElement("input", { type: "text", placeholder: 'Type here', className: 'HowManyInput' }),
            React.createElement("div", { className: "TravelP" }, "Travel Purpose"),
            React.createElement("div", { className: "grid-container" },
                React.createElement("div", { className: "grid-item" }, "1"),
                React.createElement("div", { className: "grid-item" }, "2"),
                React.createElement("div", { className: "grid-item" }, "3"),
                React.createElement("div", { className: "grid-item" }, "4"),
                React.createElement("div", { className: "grid-item" }, "5"),
                React.createElement("div", { className: "grid-item" }, "6")),
            React.createElement("div", { className: "ChooseL" }, "Choose Luggage"),
            React.createElement("div", { className: "grid-container" },
                React.createElement("div", { className: "grid-item" }, "1"),
                React.createElement("div", { className: "grid-item" }, "2"),
                React.createElement("div", { className: "grid-item" }, "3"),
                React.createElement("div", { className: "grid-item" }, "4"),
                React.createElement("div", { className: "grid-item" }, "5"),
                React.createElement("div", { className: "grid-item" }, "6")),
            React.createElement("button", { className: 'Proceedbtn', onClick: clickProceed }, "Proceed"))));
};
exports["default"] = TravelInfo1;
function nav(arg0, arg1) {
    throw new Error('Function not implemented.');
}
