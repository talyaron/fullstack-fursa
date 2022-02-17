"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var menu_png_1 = require("./menu.png");
var search_jpg_1 = require("./search.jpg");
var user_png_1 = require("./user.png");
var logo_png_1 = require("./logo.png");
var Button_1 = require("@mui/material/Button");
var Menu_1 = require("@mui/material/Menu");
var MenuItem_1 = require("@mui/material/MenuItem");
require("./menu.scss");
function Bagemenu() {
    var _a = react_1["default"].useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var open = Boolean(anchorEl);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
        react_1["default"].createElement(react_router_dom_1.Link, { to: '/invoices' }, "Invoices");
    };
    var handleClose1 = function () {
        setAnchorEl(null);
    };
    return (react_1["default"].createElement("div", { className: "menu" },
        react_1["default"].createElement("div", { className: "menu__left" },
            react_1["default"].createElement("img", { src: menu_png_1["default"], alt: "logo" }),
            react_1["default"].createElement("div", { className: "logo" },
                react_1["default"].createElement("img", { src: logo_png_1["default"], alt: "Logo" })),
            react_1["default"].createElement("div", { className: "searchbox" },
                react_1["default"].createElement("img", { src: search_jpg_1["default"] }),
                react_1["default"].createElement("input", { type: "text", placeholder: "search for a recipe" }))),
        react_1["default"].createElement("div", { className: "menu__right" },
            react_1["default"].createElement(Button_1["default"], { id: "basic-button", "aria-controls": open ? 'basic-menu' : undefined, "aria-haspopup": "true", "aria-expanded": open ? 'true' : undefined, onClick: handleClick },
                react_1["default"].createElement("img", { src: user_png_1["default"] })),
            react_1["default"].createElement(Menu_1["default"], { id: "basic-menu", anchorEl: anchorEl, open: open, onClose: handleClose, MenuListProps: {
                    'aria-labelledby': 'basic-button'
                } },
                react_1["default"].createElement(MenuItem_1["default"], { onClick: handleClose1 }, "Profile"),
                react_1["default"].createElement(MenuItem_1["default"], null,
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, " Logout"))))));
}
exports["default"] = Bagemenu;
