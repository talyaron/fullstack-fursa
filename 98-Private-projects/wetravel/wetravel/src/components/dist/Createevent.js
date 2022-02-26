"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TextField_1 = require("@mui/material/TextField");
var react_router_dom_1 = require("react-router-dom");
var camp_jpg_1 = require("../Images/camp.jpg");
require("../components/Createevent.scss");
function Createevent() {
    var handleChange = function () { };
    var history = react_router_dom_1.useNavigate();
    var _a = react_1["default"].useState([null, null]), value = _a[0], setValue = _a[1];
    return (react_1["default"].createElement("div", { className: "container" },
        react_1["default"].createElement("div", { className: "login__inner" },
            react_1["default"].createElement(TextField_1["default"], { id: "outlined-name", label: "Event title", onChange: handleChange, style: {
                    borderRadius: "1rem",
                    width: "90%",
                    border: "1px solid",
                    backgroundColor: "#aaa",
                    opacity: "0.4"
                } }),
            react_1["default"].createElement(TextField_1["default"], { id: "outlined-uncontrolled", label: "Event details", style: {
                    borderRadius: "1rem",
                    width: "90%",
                    height: "10vh",
                    margin: "1rem",
                    border: "1px solid",
                    backgroundColor: "#aaa",
                    opacity: "0.4"
                } }),
            react_1["default"].createElement("div", { className: "date" },
                react_1["default"].createElement("label", { className: "start" }, "Start date:"),
                react_1["default"].createElement("input", { type: "date", id: "start", name: "trip-start", value: "2018-07-22", min: "2018-01-01", max: "2018-12-31" }),
                react_1["default"].createElement("label", { className: "end" }, "End date:"),
                react_1["default"].createElement("input", { type: "date", id: "end", name: "trip-end", value: "2018-07-22", min: "2018-01-01", max: "2018-12-31" })),
            react_1["default"].createElement("div", { className: "img" },
                react_1["default"].createElement("h3", null, "Upload over photo"),
                react_1["default"].createElement("img", { src: camp_jpg_1["default"] }),
                react_1["default"].createElement("div", { className: "textbottom" },
                    react_1["default"].createElement("h2", null, "Uploaded"))),
            react_1["default"].createElement("button", { onClick: function () {
                    //console.log("clicked");
                    //history("");
                } }, "Create event"))));
}
exports["default"] = Createevent;
