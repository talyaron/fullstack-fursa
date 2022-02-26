"use strict";
exports.__esModule = true;
require("./adminHeader.scss");
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Button_1 = require("@mui/material/Button");
var Menu_1 = require("@mui/material/Menu");
var MenuItem_1 = require("@mui/material/MenuItem");
function AdminHeader() {
    var _a = React.useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var open = Boolean(anchorEl);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
        React.createElement(react_router_dom_1.Link, { to: '/' });
    };
    var handleClose1 = function () {
        setAnchorEl(null);
    };
    return (React.createElement("div", { className: "mainheader" },
        React.createElement("div", { className: "mainheader__left" },
            React.createElement(react_router_dom_1.Link, { to: "/data" }, "participants"),
            React.createElement(react_router_dom_1.Link, { to: "/admincourses" }, "courses")),
        React.createElement("div", { className: "mainheader__right" },
            React.createElement(Button_1["default"], { id: "basic-button", "aria-controls": open ? 'basic-menu' : undefined, "aria-haspopup": "true", "aria-expanded": open ? 'true' : undefined, onClick: handleClick },
                React.createElement("img", { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyK_uZ7ZiiOIKc2i9NOiwn3fzsWWzc96ojA&usqp=CAU" })),
            React.createElement(Menu_1["default"], { id: "basic-menu", anchorEl: anchorEl, open: open, onClose: handleClose, MenuListProps: {
                    'aria-labelledby': 'basic-button'
                } },
                React.createElement(MenuItem_1["default"], null,
                    React.createElement(react_router_dom_1.Link, { to: "/SignIn" }, " SignIn"),
                    "  "),
                React.createElement(MenuItem_1["default"], null,
                    "   ",
                    React.createElement(react_router_dom_1.Link, { to: "/SignUp" }, " SignUp"),
                    "   "),
                React.createElement(MenuItem_1["default"], null,
                    "  ",
                    React.createElement(react_router_dom_1.Link, { to: "/SignIn" }, " Logout")),
                React.createElement(MenuItem_1["default"], { onClick: handleClose1 }, "Close"))))
    // </div>
    );
}
exports["default"] = AdminHeader;
