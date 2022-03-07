"use strict";
exports.__esModule = true;
require("./Nav.scss");
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var fa_1 = require("react-icons/fa");
var core_1 = require("@material-ui/core");
function Nav() {
    var _a = React.useState(2), value = _a[0], setValue = _a[1];
    var handleChange = function () {
        setValue(value);
    };
    return (React.createElement("nav", null,
        React.createElement("div", { className: "nav" },
            React.createElement(react_router_dom_1.Link, { to: "/" },
                React.createElement("img", { src: "https://www.pngall.com/wp-content/uploads/2016/06/Health-PNG-File.png" }),
                "   "),
            React.createElement(core_1.ButtonGroup, { variant: "text", "aria-label": "text button group", disableElevation: true },
                React.createElement(core_1.Button, { href: "/" }, "Home"),
                React.createElement(core_1.Button, { href: "/vitamins" }, "Supplements"),
                React.createElement(core_1.Button, { href: "/Cosmetics" }, "Cosmetics"),
                React.createElement(core_1.Button, { href: "/Cupping Therapy" }, "Cupping Therapy"),
                React.createElement(core_1.Button, { href: "/Facial Treatment" }, "Facial Treatment"),
                React.createElement(core_1.Button, { href: "/Hopi Candles" }, "Hopi Candles"),
                React.createElement(core_1.Button, { href: "/Calendar" }, "Calender")),
            React.createElement("div", { className: "icons" },
                React.createElement(react_router_dom_1.Link, { to: "#" },
                    React.createElement(fa_1.FaPhone, null),
                    " "),
                React.createElement(react_router_dom_1.Link, { to: "#" },
                    React.createElement(fa_1.FaFacebook, null),
                    " "),
                React.createElement(react_router_dom_1.Link, { to: "#" },
                    React.createElement(fa_1.FaInstagram, null),
                    " "),
                React.createElement(react_router_dom_1.Link, { to: "#" },
                    React.createElement(fa_1.FaWaze, null),
                    " ")))));
}
exports["default"] = Nav;
/**
 *         <Link to="/"> Home</Link>
        <Link to="vitamins">  Supplements</Link>
        <Link to="Cosmetics">  Cosmetics</Link>
          <Button><FaPhone/></Button>
          <Button><FaFacebook/></Button>
          <Button><FaInstagram/></Button>
          <Button><FaWaze/></Button>


 */ 
