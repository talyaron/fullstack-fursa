"use strict";
exports.__esModule = true;
require("./signUp.scss");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var FormControl_1 = require("@mui/material/FormControl");
var OutlinedInput_1 = require("@mui/material/OutlinedInput");
var Box_1 = require("@mui/material/Box");
var FormHelperText_1 = require("@mui/material/FormHelperText");
var signUp = function () {
    function handelSubmit(ev) {
    }
    function MyFormHelperText() {
        var focused = (FormControl_1.useFormControl() || {}).focused;
        var helperText = react_1["default"].useMemo(function () {
            if (focused) {
                return 'please add your uosername';
            }
            return 'username';
        }, [focused]);
        return react_1["default"].createElement(FormHelperText_1["default"], null, helperText);
    }
    return (react_1["default"].createElement("div", { className: 'warpper' },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h1", null, " Sign Up")),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("form", { onSubmit: handelSubmit },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(Box_1["default"], { component: "form", noValidate: true, autoComplete: "off" },
                        react_1["default"].createElement(FormControl_1["default"], { sx: { width: '25ch' } },
                            react_1["default"].createElement(OutlinedInput_1["default"], { placeholder: "Please enter text" }),
                            react_1["default"].createElement(MyFormHelperText, null))),
                    react_1["default"].createElement(Box_1["default"], { component: "form", noValidate: true, autoComplete: "off" },
                        react_1["default"].createElement(FormControl_1["default"], { sx: { width: '25ch' } },
                            react_1["default"].createElement(OutlinedInput_1["default"], { placeholder: "Please enter text" }),
                            react_1["default"].createElement(MyFormHelperText, null)))),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("br", null),
                    "Username",
                    react_1["default"].createElement("input", { type: "text", required: true })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("br", null),
                    "Username",
                    react_1["default"].createElement("input", { type: "text", required: true })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("br", null),
                    "Password",
                    react_1["default"].createElement("input", { type: "password", required: true })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("br", null),
                    "re-Password",
                    react_1["default"].createElement("input", { type: "password", required: true })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("br", null),
                    "Byer/seler",
                    react_1["default"].createElement("input", { type: "radio", id: "html", name: "fav_language", value: "HTML" }),
                    react_1["default"].createElement("label", null, "Byer"),
                    react_1["default"].createElement("input", { type: "radio", id: "html", name: "fav_language", value: "HTML" }),
                    react_1["default"].createElement("label", null, "S")),
                react_1["default"].createElement(react_router_dom_1.Link, { type: 'submit', to: "/Group" }, "signUp"),
                react_1["default"].createElement("br", null)),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/HomePage" }, "cancle"))));
};
exports["default"] = signUp;
