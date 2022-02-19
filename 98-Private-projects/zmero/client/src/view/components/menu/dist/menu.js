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
var logo_svg_1 = require("./logo.svg");
var lock_svg_1 = require("./lock.svg");
var react_modal_1 = require("react-modal");
var react_2 = require("react");
var search_1 = require("../search/search");
require("./menu.scss");
var react_router_dom_1 = require("react-router-dom");
var TextField_1 = require("@mui/material/TextField");
var Button_1 = require("@mui/material/Button");
var InputLabel_1 = require("@mui/material/InputLabel");
var MenuItem_1 = require("@mui/material/MenuItem");
var FormControl_1 = require("@mui/material/FormControl");
var Select_1 = require("@mui/material/Select");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
react_modal_1["default"].setAppElement('#root');
function Menu() {
    var _a = react_2.useState(false), modalSearchIsOpen = _a[0], setSearchModal = _a[1];
    var _b = react_2.useState(false), modalSignInsOpen = _b[0], setSignINModal = _b[1];
    var _c = react_2.useState(false), modalSignUpModal = _c[0], setSignUpModal = _c[1];
    var _d = react_2.useState(1), navbarindex = _d[0], setNavbarindex = _d[1];
    var _e = react_2.useState({}), loginState = _e[0], setLoginState = _e[1];
    var _f = react_2.useState({}), sigupState = _f[0], setSigupnState = _f[1];
    function openSearchModal(bool) {
        if (bool === false)
            setNavbarindex(1);
        else
            setNavbarindex(0);
        setSearchModal(bool);
    }
    function openSignInModal(bool) {
        if (bool === false)
            setNavbarindex(1);
        else
            setNavbarindex(0);
        setSignINModal(bool);
    }
    function openSignUpModal(bool) {
        if (bool === false)
            setNavbarindex(1);
        else
            setNavbarindex(0);
        setSignUpModal(bool);
    }
    function onChangeLogIn(e) {
        var _a;
        setLoginState(__assign(__assign({}, loginState), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    }
    function handleLogin(e) {
        e.preventDefault();
        console.log(loginState);
    }
    function onChangeSignup(e) {
        var _a;
        setSigupnState(__assign(__assign({}, sigupState), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    }
    function handleSignup(e) {
        e.preventDefault();
        console.log(sigupState);
    }
    return (react_1["default"].createElement("div", { className: "navbar", style: { zIndex: navbarindex } },
        react_1["default"].createElement("div", { className: "navbar__box" },
            react_1["default"].createElement("div", { className: "navbar__left" },
                react_1["default"].createElement("div", { className: "navbar__bar" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faBars })),
                react_1["default"].createElement("div", { className: "navbar__left__logo" },
                    react_1["default"].createElement("img", { src: logo_svg_1["default"], alt: "Logo" })),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "Explore"),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/Reservations" }, "Reservation"),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/Favorite" }, "Favorite"),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/Maps" }, "Maps")),
            react_1["default"].createElement("div", { className: "navbar__right" },
                react_1["default"].createElement("button", { className: "navbar__right__signup", type: "button", onClick: function () { return openSignUpModal(true); } },
                    react_1["default"].createElement("span", null, "Not Registered Yet?")),
                react_1["default"].createElement("button", { className: "navbar__right__signin", type: "button", onClick: function () { return openSignInModal(true); } }, "Sign in"),
                react_1["default"].createElement("img", { onClick: function () { return openSearchModal(true); }, className: "navbar__right__search", src: "https://img.icons8.com/material-outlined/48/000000/search--v1.png", alt: "search_icon" }))),
        react_1["default"].createElement(react_modal_1["default"], { className: "Modal", isOpen: modalSearchIsOpen, onRequestClose: function () { return openSearchModal(false); } },
            react_1["default"].createElement("div", { className: "Modal__header" },
                react_1["default"].createElement("button", { className: "Modal__header__closebtn", onClick: function () { return openSearchModal(false); } })),
            react_1["default"].createElement("div", { className: "Modal__content" },
                react_1["default"].createElement(search_1["default"], null))),
        react_1["default"].createElement(react_modal_1["default"], { className: "signModal", isOpen: modalSignInsOpen, onRequestClose: function () { return openSignInModal(false); } },
            react_1["default"].createElement("div", { className: "signModal__content" },
                react_1["default"].createElement("div", { className: "signModal__content__left" }),
                react_1["default"].createElement("div", { className: "signModal__content__right" },
                    react_1["default"].createElement("div", { className: "signModal__content__right__title" },
                        react_1["default"].createElement("img", { src: lock_svg_1["default"], alt: "lock" }),
                        react_1["default"].createElement("h3", null, "Sign In")),
                    react_1["default"].createElement("div", { className: "signModal__content__right__middle" },
                        react_1["default"].createElement("form", { onSubmit: handleLogin },
                            react_1["default"].createElement(TextField_1["default"], { required: true, style: { width: '50%' }, id: "login__account", label: "Account", name: "user", variant: "standard", onChange: onChangeLogIn }),
                            react_1["default"].createElement(TextField_1["default"], { required: true, id: "login__password", style: { width: '50%' }, label: "Password", name: "password", type: "password", variant: "standard", onChange: onChangeLogIn }),
                            react_1["default"].createElement(Button_1["default"], { variant: "contained", type: "submit", style: { width: '50%', margin: '1rem' } }, "Sign in"))),
                    react_1["default"].createElement("div", { className: "signModal__content__right__bottom" })))),
        react_1["default"].createElement(react_modal_1["default"], { className: "signModal", isOpen: modalSignUpModal, onRequestClose: function () { return openSignUpModal(false); } },
            react_1["default"].createElement("div", { className: "signModal__content" },
                react_1["default"].createElement("div", { className: "signModal__content__leftUp" }),
                react_1["default"].createElement("div", { className: "signModal__content__right" },
                    react_1["default"].createElement("div", { className: "signModal__content__right__title" },
                        react_1["default"].createElement("h3", null, "Sign up")),
                    react_1["default"].createElement("div", { className: "signModal__content__right__middle" },
                        react_1["default"].createElement("form", { onSubmit: handleSignup },
                            react_1["default"].createElement(TextField_1["default"], { required: true, name: "fName", style: { width: '50%' }, label: "First Name", variant: "standard", onChange: onChangeSignup }),
                            react_1["default"].createElement(TextField_1["default"], { required: true, name: "lName", style: { width: '50%' }, label: "Last Name", variant: "standard", onChange: onChangeSignup }),
                            react_1["default"].createElement(TextField_1["default"], { required: true, name: "email", style: { width: '50%' }, label: "Email", variant: "standard", onChange: onChangeSignup }),
                            react_1["default"].createElement(TextField_1["default"], { required: true, name: "password", style: { width: '50%' }, label: "Password", type: "password", variant: "standard", onChange: onChangeSignup }),
                            react_1["default"].createElement(TextField_1["default"], { required: true, name: "phone", style: { width: '50%' }, label: "Phone", variant: "standard", onChange: onChangeSignup }),
                            react_1["default"].createElement(FormControl_1["default"], { style: { width: '50%', marginTop: '1rem' }, size: "small" },
                                react_1["default"].createElement(InputLabel_1["default"], { id: "region" }, "Region"),
                                react_1["default"].createElement(Select_1["default"], { MenuProps: {
                                        disableScrollLock: true
                                    }, required: true, name: "region", defaultValue: '', labelId: "region", id: "demo-simple-select", label: "Region", onChange: onChangeSignup },
                                    react_1["default"].createElement(MenuItem_1["default"], { value: 'Israel' }, "Israel"),
                                    react_1["default"].createElement(MenuItem_1["default"], { value: 'USA' }, "USA"),
                                    react_1["default"].createElement(MenuItem_1["default"], { value: 'UK' }, "UK"))),
                            react_1["default"].createElement(Button_1["default"], { variant: "contained", style: { width: '50%', margin: '1rem' }, type: "submit" }, "Register"))))))));
}
exports["default"] = Menu;
