"use strict";
exports.__esModule = true;
//import { useState } from 'react';
require("./Signup.scss");
//import { Link, useLocation, useNavigate } from "react-router-dom";
function Signup(props) {
    return (React.createElement("div", { className: 'wrapper' },
        React.createElement("div", null, "signup to save list"),
        React.createElement("div", { className: 'imagTeampet' },
            React.createElement("img", { src: "", alt: "" })),
        React.createElement("div", { className: 'loginOp' },
            React.createElement("button", { className: 'googlebuttonText' }, "Google"),
            "or",
            React.createElement("form", { className: 'other', action: "submit" },
                React.createElement("input", { type: "text", className: ' inputs username', placeholder: 'Email' }),
                React.createElement("input", { type: "password", className: 'inputs password', placeholder: 'Password' })),
            React.createElement("button", { className: 'SignUpbtn' }, "Sign Up"))));
}
exports["default"] = Signup;
