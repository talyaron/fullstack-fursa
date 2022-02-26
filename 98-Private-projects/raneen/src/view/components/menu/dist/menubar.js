"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Button_1 = require("@material-ui/core/Button");
var Menu_1 = require("@material-ui/core/Menu");
var MenuItem_1 = require("@material-ui/core/MenuItem");
var Fade_1 = require("@material-ui/core/Fade");
function FadeMenu() {
    var _a = react_1["default"].useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var open = Boolean(anchorEl);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Button_1["default"], { "aria-controls": "fade-menu", "aria-haspopup": "true", onClick: handleClick }, "Open with fade transition"),
        react_1["default"].createElement(Menu_1["default"], { id: "fade-menu", anchorEl: anchorEl, keepMounted: true, open: open, onClose: handleClose, TransitionComponent: Fade_1["default"] },
            react_1["default"].createElement(MenuItem_1["default"], { onClick: handleClose }, "Profile"),
            react_1["default"].createElement(MenuItem_1["default"], { onClick: handleClose }, "My account"),
            react_1["default"].createElement(MenuItem_1["default"], { onClick: handleClose }, "Logout"))));
}
exports["default"] = FadeMenu;
