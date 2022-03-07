"use strict";
exports.__esModule = true;
var react_1 = require("react");
var BottomNavigation_1 = require("@mui/material/BottomNavigation");
var BottomNavigationAction_1 = require("@mui/material/BottomNavigationAction");
var CircleNotifications_1 = require("@mui/icons-material/CircleNotifications");
var Home_1 = require("@mui/icons-material/Home");
require("./Bottom_Nav.scss");
var react_router_dom_1 = require("react-router-dom");
var Bottom_Nav = function () {
    var _a = react_1.useState('recents'), value = _a[0], setValue = _a[1];
    var nav = react_router_dom_1.useNavigate();
    var state = react_router_dom_1.useLocation().state;
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    function clickHome(e) {
        nav('/', {
            state: state
        });
    }
    return (React.createElement("div", { className: "botnav" },
        React.createElement(BottomNavigation_1["default"] /*sx={{ width:100}}*/, { value: value, onChange: handleChange },
            React.createElement(BottomNavigationAction_1["default"], { label: "Home", value: "Home", icon: React.createElement(Home_1["default"], { color: "primary", onClick: clickHome }) }),
            React.createElement(BottomNavigationAction_1["default"], { label: "Notifications", value: "Notifications", icon: React.createElement(CircleNotifications_1["default"], { color: "primary" }) }))));
};
exports["default"] = Bottom_Nav;
