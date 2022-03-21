"use strict";
exports.__esModule = true;
var react_1 = require("react");
function ny(props) {
    //const nav = useNavigate();
    //const {state}:any = useLocation();
    // nav('/ListForm', {
    //     state: state
    // });
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: 'box' },
            react_1["default"].createElement("div", { className: 'wave -one' }),
            react_1["default"].createElement("div", { className: 'wave -two' }),
            react_1["default"].createElement("div", { className: 'wave -three' }),
            react_1["default"].createElement("div", { className: "weathercon" },
                react_1["default"].createElement("i", { className: 'fas fa-sun' })),
            react_1["default"].createElement("div", { className: "info" },
                react_1["default"].createElement("h2", { className: "location" }, "New York"),
                react_1["default"].createElement("p", { className: "date" }, "MONDAY | SEP 12 | 12:34"),
                react_1["default"].createElement("h1", { className: "temp" }, "25 \u00B0C | 77 \u00B0F"))),
        react_1["default"].createElement("span", null, "Enable location to see yours! :)")));
}
exports["default"] = ny;
