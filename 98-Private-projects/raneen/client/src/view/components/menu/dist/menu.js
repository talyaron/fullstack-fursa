"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Menu_1 = require("@material-ui/core/Menu");
var Button_1 = require("@material-ui/core/Button");
var MenuItem_1 = require("@material-ui/core/MenuItem");
var hooks_1 = require("../../../app/hooks");
var react_router_dom_1 = require("react-router-dom");
//import {update, getJokeAsync} from '../../../app/reducers/textSlice'; 
var bagSlice_1 = require("../../../app/reducers/bagSlice");
function Menu1() {
    var bag = hooks_1.useAppSelector(bagSlice_1.selectBag);
    var dispatch = hooks_1.useAppDispatch();
    var _a = react_1["default"].useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var open = Boolean(anchorEl);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
        console.log("hi");
    };
    return (react_1["default"].createElement("div", { className: "navbar" },
        react_1["default"].createElement("div", { className: "navbar__box" },
            react_1["default"].createElement("div", { className: "navbar__left" },
                react_1["default"].createElement("nav", { role: "navigation" }),
                react_1["default"].createElement("div", { className: "categories" },
                    react_1["default"].createElement(Button_1["default"], { id: "basic-button", "aria-controls": open ? "basic-menu" : undefined, "aria-haspopup": "true", "aria-expanded": open ? "true" : undefined, onClick: handleClick },
                        react_1["default"].createElement("img", { src: "https://cdn.icon-icons.com/icons2/2751/PNG/512/menu_burger_icon_176150.png", alt: "Logo" })),
                    react_1["default"].createElement(Menu_1["default"], { id: "basic-menu", anchorEl: anchorEl, open: open, onClose: handleClose, MenuListProps: {
                            "aria-labelledby": "basic-button"
                        } },
                        react_1["default"].createElement(MenuItem_1["default"], { onClick: handleClose }, "Clothes"),
                        react_1["default"].createElement(MenuItem_1["default"], { onClick: handleClose }, "Shoes"),
                        react_1["default"].createElement(MenuItem_1["default"], { onClick: handleClose }, "Accessories"))),
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("img", { src: "https://i.pinimg.com/originals/6f/dd/03/6fdd0381fb24566c13af151a9c5a9ddc.jpg", alt: "Logo" }))),
            react_1["default"].createElement("div", { className: "navbar__right" },
                react_1["default"].createElement("button", { className: "navbar__right__signup", type: "button" },
                    react_1["default"].createElement("span", null, "Shopping bag")),
                react_1["default"].createElement("a", { href: "#home" }, "help"),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/SignUp" },
                    react_1["default"].createElement("button", { className: "navbar__right__signin", type: "button" }, "Sign in")),
                react_1["default"].createElement("button", { className: "navbar__right__signin", type: "button" }, bag)))));
}
exports["default"] = Menu1;
// export{}
