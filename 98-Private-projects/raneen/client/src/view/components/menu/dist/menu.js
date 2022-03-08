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
function Mainbar() {
    var coatsId = "COATS";
    var jacketsId = "JACKETS";
    var pantsId = "PANTS";
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
                react_1["default"].createElement("div", { className: "categories" },
                    react_1["default"].createElement(Button_1["default"], { id: "basic-button", "aria-controls": open ? "basic-menu" : undefined, "aria-haspopup": "true", "aria-expanded": open ? "true" : undefined, onClick: handleClick },
                        react_1["default"].createElement("img", { src: "https://static.thenounproject.com/png/478829-200.png", alt: "Logo" })),
                    react_1["default"].createElement(Menu_1["default"], { className: "menuItem", id: "basic-menu", anchorEl: anchorEl, open: open, onClose: handleClose, MenuListProps: {
                            "aria-labelledby": "basic-button"
                        } },
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/Store/" + coatsId },
                            react_1["default"].createElement(MenuItem_1["default"], { className: "menuItem", onClick: handleClose },
                                react_1["default"].createElement("p", null, "COATS"))),
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/Store/" + jacketsId },
                            react_1["default"].createElement(MenuItem_1["default"], { className: "menuItem", onClick: handleClose },
                                react_1["default"].createElement("p", null, "JACKETS"))),
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/Store/" + pantsId },
                            react_1["default"].createElement(MenuItem_1["default"], { className: "menuItem", onClick: handleClose },
                                react_1["default"].createElement("p", null, "PANTS"))))),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/homePage" },
                    react_1["default"].createElement("img", { height: "100px", src: "https://download.logo.wine/logo/Zara_(retailer)/Zara_(retailer)-Logo.wine.png", alt: "Logo" })),
                react_1["default"].createElement("span", null)),
            react_1["default"].createElement("a", { href: "https://www.instagram.com/zara/" },
                react_1["default"].createElement("img", { src: "https://www.pngitem.com/pimgs/m/49-497596_download-instagram-icon-black-circle-clipart-computer-shopping.png", alt: "Estudar" })),
            react_1["default"].createElement("a", { href: "https://www.facebook.com/Zara/" },
                react_1["default"].createElement("img", { src: "https://www.kindpng.com/picc/m/133-1339537_facebook-full-free-facebook-icon-png-transparent-png.png" })),
            react_1["default"].createElement("a", { href: "hhttps://www.tiktok.com/@zara" },
                react_1["default"].createElement("img", { src: "https://toppng.com/public/uploads/preview/tik-tok-icon-circle-11609379404aavrbp7kqt.png" })),
            react_1["default"].createElement("div", { className: "navbar__right" },
                react_1["default"].createElement("button", { className: "navbar__right__signup", type: "button" },
                    react_1["default"].createElement("span", null, "Shopping bag")),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/Help" },
                    react_1["default"].createElement("a", null,
                        react_1["default"].createElement("img", { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlILy_KpcLwoxuFx7gMJVkrIZRI06AtQ3MMQ&usqp=CAU", alt: "Estudar" }))),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/Help" },
                    react_1["default"].createElement("a", null,
                        react_1["default"].createElement("img", { src: "https://cdn5.vectorstock.com/i/1000x1000/45/84/help-icon-vector-22894584.jpg", alt: "Estudar" }))),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/SignIn" },
                    react_1["default"].createElement("a", null,
                        react_1["default"].createElement("img", { src: "https://www.pngitem.com/pimgs/m/111-1114675_user-login-person-man-enter-person-login-icon.png", alt: "Estudar" }))),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/Favourites" },
                    react_1["default"].createElement("a", null,
                        react_1["default"].createElement("img", { src: "http://cdn.onlinewebfonts.com/svg/img_550735.png", alt: "Estudar" })))))));
}
exports["default"] = Mainbar;
// export {};
