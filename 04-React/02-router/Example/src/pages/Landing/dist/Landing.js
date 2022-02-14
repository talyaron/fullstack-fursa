"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./style.css");
var icon_svg_1 = require("../../assets/images/icon.svg");
var landing_svg_1 = require("../../assets/images/landing.svg");
var SignUp_svg_1 = require("../../assets/images/icons/SignUp.svg");
var login_ico_png_1 = require("../../assets/images/icons/login-ico.png");
var purple_heart_svg_1 = require("../../assets/images/icons/purple-heart.svg");
var react_router_dom_1 = require("react-router-dom");
function Landing(props) {
    var setCounter = props.setCounter, counter = props.counter;
    function handleCounter() {
        setCounter(counter + 1);
    }
    return (react_1["default"].createElement("div", { id: "page-landing" },
        react_1["default"].createElement("div", { id: "page-landing-content", className: "container" },
            react_1["default"].createElement("button", { onClick: handleCounter },
                "ADD: ",
                counter),
            react_1["default"].createElement("div", { className: "logo-container" },
                react_1["default"].createElement("img", { src: icon_svg_1["default"], alt: "onTime" }),
                react_1["default"].createElement("h2", null, "Arrange Your Daily Tasks Brilliant")),
            react_1["default"].createElement("img", { src: landing_svg_1["default"], alt: "on Time", className: "hero-image" }),
            react_1["default"].createElement("div", { className: "buttons-container" },
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/main/signUp/", className: "study" },
                    react_1["default"].createElement("img", { src: SignUp_svg_1["default"], alt: "SignUp" }),
                    "Sign Up"),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/main/signin", className: "give-classes" },
                    react_1["default"].createElement("img", { src: login_ico_png_1["default"], alt: "Estudar" }),
                    "log in")),
            react_1["default"].createElement("span", { className: "total-connections" },
                "perfect schedulieng make great results",
                " ",
                react_1["default"].createElement("img", { src: purple_heart_svg_1["default"], alt: "" })))));
}
exports["default"] = Landing;
