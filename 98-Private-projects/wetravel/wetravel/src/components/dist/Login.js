"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
require("../components/Login.scss");
var TextField_1 = require("@mui/material/TextField");
var react_router_dom_1 = require("react-router-dom");
var Travelles_png_1 = require("../Images/Travelles.png");
var react_google_button_1 = require("react-google-button");
var InputAdornment_1 = require("@mui/material/InputAdornment");
var icons_material_1 = require("@mui/icons-material");
var material_1 = require("@mui/material");
var Email_1 = require("@mui/icons-material/Email");
var hooks_1 = require("../hooks/hooks");
var userSlice_1 = require("../reducers/userSlice");
function Login() {
    var dispatch = hooks_1.useAppDispatch();
    var _a = react_1.useState({
        email: "",
        name: ""
    }), userData = _a[0], setUserdata = _a[1];
    var _b = react_1["default"].useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false
    }), values = _b[0], setValues = _b[1];
    var handleChange = function (prop) { return function (event) {
        var _a;
        setValues(__assign(__assign({}, values), (_a = {}, _a[prop] = event.target.value, _a)));
    }; };
    var handleClickShowPassword = function () {
        setValues(__assign(__assign({}, values), { showPassword: !values.showPassword }));
    };
    var handleMouseDownPassword = function (event) {
        event.preventDefault();
    };
    var history = react_router_dom_1.useNavigate();
    return (react_1["default"].createElement("div", { className: "login" },
        react_1["default"].createElement("img", { src: Travelles_png_1["default"], style: { width: "5rem" } }),
        react_1["default"].createElement("h1", null, "Travellers"),
        react_1["default"].createElement("p", null, "Travel community app"),
        react_1["default"].createElement("div", { className: "login__inner" },
            react_1["default"].createElement(TextField_1["default"], { id: "outlined-name", label: "Email", onChange: function (ev) {
                    setUserdata(__assign(__assign({}, userData), { email: ev.target.value }));
                }, style: {
                    width: "90%",
                    border: "1px solid",
                    borderRadius: "0.3rem",
                    color: "#ff4500",
                    opacity: "0.6"
                }, InputLabelProps: { style: { color: "#ff4500" } }, InputProps: {
                    endAdornment: (react_1["default"].createElement(InputAdornment_1["default"], { position: "end", style: { color: "black" } },
                        react_1["default"].createElement(Email_1["default"], { style: { color: "#ff4500" } })))
                } }),
            react_1["default"].createElement(TextField_1["default"], { id: "outlined-uncontrolled", label: "Password", type: values.showPassword ? "text" : "password", onChange: function (ev) {
                    setUserdata(__assign(__assign({}, userData), { name: ev.target.value }));
                }, style: {
                    width: "90%",
                    margin: "1rem",
                    border: "1px solid",
                    opacity: "0.6",
                    borderRadius: "0.3rem",
                    color: "#ff4500"
                }, InputLabelProps: { style: { color: "#ff4500" } }, InputProps: {
                    endAdornment: (react_1["default"].createElement(InputAdornment_1["default"], { position: "end" },
                        react_1["default"].createElement(material_1.IconButton, { "aria-label": "toggle password visibility", style: { color: "#ff4500" }, onClick: handleClickShowPassword, onMouseDown: handleMouseDownPassword, edge: "end" }, values.showPassword ? react_1["default"].createElement(icons_material_1.VisibilityOff, null) : react_1["default"].createElement(icons_material_1.Visibility, null))))
                } })),
        react_1["default"].createElement("div", { className: "contact-us-div" },
            react_1["default"].createElement("div", { className: "contact-us" }, "Don't have an account?"),
            react_1["default"].createElement("a", { href: "/mainpage" }, "Contact us")),
        react_1["default"].createElement("div", { className: "buttons" },
            react_1["default"].createElement(react_google_button_1["default"], { style: {
                    margin: "auto",
                    width: "50vw",
                    textAlign: "center",
                    borderRadius: "0.3rem"
                } }),
            react_1["default"].createElement("button", { onClick: function () {
                    console.log("clicked");
                    dispatch(userSlice_1.setUser(userData));
                    history("/mainpage");
                } }, "Log In"))));
}
exports["default"] = Login;
