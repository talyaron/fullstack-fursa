"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var AddCircleOutlineOutlined_1 = require("@material-ui/icons/AddCircleOutlineOutlined");
var Radio_1 = require("@material-ui/core/Radio");
var RadioGroup_1 = require("@material-ui/core/RadioGroup");
var FormControlLabel_1 = require("@material-ui/core/FormControlLabel");
var FormControl_1 = require("@material-ui/core/FormControl");
var FormLabel_1 = require("@material-ui/core/FormLabel");
var react_router_dom_1 = require("react-router-dom");
var signUp = function () {
    var paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" };
    var headerStyle = { margin: 0 };
    var avatarStyle = { backgroundColor: '#1bbd7e' };
    var marginTop = { marginTop: 5 };
    function handelLink() {
    }
    return (react_1["default"].createElement(core_1.Grid, null,
        react_1["default"].createElement(core_1.Paper, { elevation: 20, style: paperStyle },
            react_1["default"].createElement(core_1.Grid, null,
                react_1["default"].createElement(core_1.Avatar, { style: avatarStyle },
                    react_1["default"].createElement(AddCircleOutlineOutlined_1["default"], null)),
                react_1["default"].createElement("h2", { style: headerStyle }, "Sign Up")),
            react_1["default"].createElement("form", { onSubmit: handelLink },
                react_1["default"].createElement(core_1.TextField, { fullWidth: true, label: 'Name', required: true, placeholder: "Enter your name" }),
                react_1["default"].createElement(core_1.TextField, { fullWidth: true, label: 'Email', required: true, placeholder: "Enter your email" }),
                react_1["default"].createElement(FormControl_1["default"], { component: "fieldset", required: true, style: marginTop },
                    react_1["default"].createElement(FormLabel_1["default"], { component: "legend" }, "Gender"),
                    react_1["default"].createElement(RadioGroup_1["default"], { "aria-label": "gender", name: "gender", style: { display: 'initial' } },
                        react_1["default"].createElement(FormControlLabel_1["default"], { value: "female", control: react_1["default"].createElement(Radio_1["default"], null), label: "Female" }),
                        react_1["default"].createElement(FormControlLabel_1["default"], { value: "male", control: react_1["default"].createElement(Radio_1["default"], null), label: "Male" }))),
                react_1["default"].createElement(core_1.TextField, { fullWidth: true, label: 'Phone Number', required: true, placeholder: "Enter your phone number" }),
                react_1["default"].createElement(core_1.TextField, { fullWidth: true, type: "password", label: 'Password', required: true, placeholder: "Enter your password" }),
                react_1["default"].createElement(core_1.TextField, { fullWidth: true, type: "password", label: 'Confirm Password', required: true, placeholder: "Confirm your password" }),
                react_1["default"].createElement(core_1.Button, { type: 'submit', onClick: handelLink, variant: 'contained', color: 'primary' }, " Sign up"),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/HomePage" }, "Cancel")))));
};
exports["default"] = signUp;
