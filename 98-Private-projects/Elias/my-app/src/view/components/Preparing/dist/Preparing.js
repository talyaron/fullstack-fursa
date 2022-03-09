"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Preparing.scss");
var globe_croped_gif_1 = require("../../../icons/globe_croped.gif");
var react_router_dom_1 = require("react-router-dom");
var Preparing = function () {
    var nav = react_router_dom_1.useNavigate();
    var state = react_router_dom_1.useLocation().state;
    nav('/TravelInfo1', {
        state: state
    });
    return (react_1["default"].createElement("div", { className: 'wrapper' },
        react_1["default"].createElement("div", { className: 'imgeh' },
            react_1["default"].createElement("img", { src: globe_croped_gif_1["default"], alt: "" })),
        react_1["default"].createElement("div", { className: 'Sitmsg' },
            react_1["default"].createElement("h1", null, "Sit back & relax "),
            react_1["default"].createElement("h3", null, "We prepare your list"))));
};
exports["default"] = Preparing;
