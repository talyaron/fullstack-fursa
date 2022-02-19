"use strict";
exports.__esModule = true;
var react_calendar_1 = require("react-calendar");
require("react-calendar/dist/Calendar.css");
var react_1 = require("react");
// class MyApp extends Component {
//     state = {
//       date: new Date(),
//     }
// onChange = date => this.setState({ date })
function Calender() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_calendar_1["default"]
        //   onChange={this.onChange}
        //   value={this.state.date}
        , null)));
}
exports["default"] = Calender;
