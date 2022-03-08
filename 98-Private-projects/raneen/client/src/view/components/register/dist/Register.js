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
var React = require("react");
var Avatar_1 = require("@mui/material/Avatar");
var Button_1 = require("@mui/material/Button");
var CssBaseline_1 = require("@mui/material/CssBaseline");
var TextField_1 = require("@mui/material/TextField");
var FormControlLabel_1 = require("@mui/material/FormControlLabel");
var Checkbox_1 = require("@mui/material/Checkbox");
var Link_1 = require("@mui/material/Link");
var Paper_1 = require("@mui/material/Paper");
var Box_1 = require("@mui/material/Box");
var Grid_1 = require("@mui/material/Grid");
var LockOutlined_1 = require("@mui/icons-material/LockOutlined");
var Typography_1 = require("@mui/material/Typography");
var styles_1 = require("@mui/material/styles");
function Copyright(props) {
    return (React.createElement(Typography_1["default"], __assign({ variant: "body2", color: "text.secondary", align: "center" }, props),
        'Copyright © ',
        React.createElement(Link_1["default"], { color: "inherit", href: "https://mui.com/" }, "Your Website"),
        ' ',
        new Date().getFullYear(),
        '.'));
}
var theme = styles_1.createTheme();
function Register() {
    var handleSubmit = function (event) {
        event.preventDefault();
        var data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password')
        });
    };
    return (React.createElement(styles_1.ThemeProvider, { theme: theme },
        React.createElement(Grid_1["default"], { container: true, component: "main" },
            React.createElement(CssBaseline_1["default"], null),
            React.createElement(Grid_1["default"], { item: true, xs: false, sm: 4, md: 7, sx: {
                    backgroundImage: 'url(https://i.pinimg.com/originals/c4/6b/51/c46b517f8d507ecf74b007fbac1e2bd7.gif)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: function (t) {
                        return t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900];
                    },
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                } }),
            React.createElement(Grid_1["default"], { item: true, xs: 12, sm: 8, md: 5, component: Paper_1["default"], elevation: 6, square: true },
                React.createElement(Box_1["default"], { sx: {
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    } },
                    React.createElement(Avatar_1["default"], { sx: { m: 1, bgcolor: 'secondary.main' } },
                        React.createElement(LockOutlined_1["default"], null)),
                    React.createElement(Typography_1["default"], { component: "h1", variant: "h5" }, "Sign in"),
                    React.createElement(Box_1["default"], { component: "form", noValidate: true, onSubmit: handleSubmit, sx: { mt: 1 } },
                        React.createElement(TextField_1["default"], { margin: "normal", required: true, fullWidth: true, id: "email", label: "Email Address", name: "email", autoComplete: "email", autoFocus: true }),
                        React.createElement(TextField_1["default"], { margin: "normal", required: true, fullWidth: true, name: "password", label: "Password", type: "password", id: "password", autoComplete: "current-password" }),
                        React.createElement(FormControlLabel_1["default"], { control: React.createElement(Checkbox_1["default"], { value: "remember", color: "primary" }), label: "Remember me" }),
                        React.createElement(Button_1["default"], { type: "submit", fullWidth: true, variant: "contained", sx: { mt: 3, mb: 2 } }, "Sign In"),
                        React.createElement(Grid_1["default"], { container: true },
                            React.createElement(Grid_1["default"], { item: true, xs: true },
                                React.createElement(Link_1["default"], { href: "#", variant: "body2" }, "Forgot password?")),
                            React.createElement(Grid_1["default"], { item: true },
                                React.createElement(Link_1["default"], { href: "#", variant: "body2" }, "Don't have an account? Sign Up"))),
                        React.createElement(Copyright, { sx: { mt: 5 } })))))));
}
exports["default"] = Register;
