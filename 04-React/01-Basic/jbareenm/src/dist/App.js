"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./dist/App.css");
function App() {
    var clicked = 10;
    function handleSubmit(e) {
        e.preventDefault();
        alert('You clicked submit.');
    }
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("p", null,
            "number of times clicked ",
            clicked),
        react_1["default"].createElement("form", { onSubmit: handleSubmit },
            react_1["default"].createElement("button", { type: "submit" }, "Submit"))));
}
exports["default"] = App;
