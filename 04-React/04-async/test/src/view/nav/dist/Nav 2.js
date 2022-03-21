"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
function Nav(prop) {
    var city = prop.city, setCity = prop.setCity;
    function handleCity1() {
        setCity("NewYork");
    }
    function handleCity2() {
        setCity("TelAviv");
    }
    function handleCity3() {
        setCity("London");
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/NewYork" },
            react_1["default"].createElement("button", { onClick: handleCity1 }, "New York")),
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/TelAviv" },
            react_1["default"].createElement("button", { onClick: handleCity2 }, "Tel-Aviv")),
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/London" },
            react_1["default"].createElement("button", { onClick: handleCity3 }, "London"))));
}
exports["default"] = Nav;
