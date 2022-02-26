"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Button_1 = require("@material-ui/core/Button");
var Menu_1 = require("@material-ui/core/Menu");
var MenuItem_1 = require("@material-ui/core/MenuItem");
function Menu1() {
    var _a = react_1["default"].useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    return (react_1["default"].createElement("div", { className: "navbar" },
        react_1["default"].createElement("div", { className: "navbar__box" },
            react_1["default"].createElement("div", { className: "navbar__left" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(Button_1["default"], { "aria-controls": "simple-menu", "aria-haspopup": "true", onClick: handleClick }, "Categories"),
                    react_1["default"].createElement(Menu_1["default"], { id: "simple-menu", anchorEl: anchorEl, keepMounted: true, open: Boolean(anchorEl), onClose: handleClose },
                        react_1["default"].createElement(MenuItem_1["default"], { onClick: handleClose }, "Profile"),
                        react_1["default"].createElement(MenuItem_1["default"], { onClick: handleClose }, "My account"),
                        react_1["default"].createElement(MenuItem_1["default"], { onClick: handleClose }, "Logout"))),
                react_1["default"].createElement("nav", { role: "navigation" }),
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("img", { src: "https://i.pinimg.com/originals/6f/dd/03/6fdd0381fb24566c13af151a9c5a9ddc.jpg", alt: "Logo" }))),
            react_1["default"].createElement("div", { className: "navbar__right" },
                react_1["default"].createElement("button", { className: "navbar__right__signup", type: "button" },
                    react_1["default"].createElement("span", null, "Shopping bag")),
                react_1["default"].createElement("a", { href: "#home" }, "help"),
                react_1["default"].createElement("button", { className: "navbar__right__signin", type: "button" }, "Sign in")))));
}
exports["default"] = Menu1;
