"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
function Bar(prop) {
    var city = prop.city, setCity = prop.setCity;
    function handleCity1() {
        setCity("New York");
    }
    function handleCity2() {
        setCity("Tel Aviv");
    }
    function handleCity3() {
        setCity("London");
    }
    return (React.createElement("div", null,
        React.createElement(react_router_dom_1.Link, { to: "/TelAviv" },
            React.createElement("button", { onClick: handleCity2 }, "Tel-Aviv")),
        React.createElement(react_router_dom_1.Link, { to: "/London" },
            React.createElement("button", { onClick: handleCity3 }, "London")),
        React.createElement(react_router_dom_1.Link, { to: "/NewYork" },
            React.createElement("button", { onClick: handleCity1 }, "New York"))));
}
exports["default"] = Bar;
