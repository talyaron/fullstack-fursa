"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Button_1 = require("@mui/material/Button");
var Menu_1 = require("@mui/material/Menu");
var MenuItem_1 = require("@mui/material/MenuItem");
var Search_1 = require("@mui/icons-material/Search");
var Person_1 = require("@mui/icons-material/Person");
var logo_jpg_1 = require("../../images/logo.jpg");
var SideBar_1 = require("../sidebar/SideBar");
require("./menu.scss");
function Bagemenu() {
    var _a = react_1["default"].useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var open = Boolean(anchorEl);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var handleClose1 = function () {
        setAnchorEl(null);
    };
    return (react_1["default"].createElement("div", { className: "menu", id: "outer-container" },
        react_1["default"].createElement("div", { className: "menu__left" },
            react_1["default"].createElement(SideBar_1["default"], null),
            react_1["default"].createElement("div", { className: 'logo' },
                react_1["default"].createElement(react_router_dom_1.Link, { to: '/MainScreen' },
                    react_1["default"].createElement("img", { src: logo_jpg_1["default"], alt: "" }))),
            react_1["default"].createElement("div", { className: "searchbox" },
                react_1["default"].createElement("input", { type: "text", placeholder: "search for a recipe" }),
                react_1["default"].createElement(Search_1["default"], { sx: { fontSize: 30, color: '#b5739d' } }))),
        react_1["default"].createElement("div", { className: "menu__right" },
            react_1["default"].createElement(Button_1["default"], { id: "basic-button", "aria-controls": open ? 'basic-menu' : undefined, "aria-haspopup": "true", "aria-expanded": open ? 'true' : undefined, onClick: handleClick },
                react_1["default"].createElement(Person_1["default"], { sx: { fontSize: 40, color: '#b5739d' } })),
            react_1["default"].createElement(Menu_1["default"], { id: "basic-menu", anchorEl: anchorEl, open: open, onClose: handleClose, MenuListProps: {
                    'aria-labelledby': 'basic-button'
                } },
                react_1["default"].createElement(MenuItem_1["default"], { onClick: handleClose1 },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/User" }, " Profile")),
                react_1["default"].createElement(MenuItem_1["default"], null,
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, " Logout"))))));
}
exports["default"] = Bagemenu;
