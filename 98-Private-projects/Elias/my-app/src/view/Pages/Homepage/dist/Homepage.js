"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./Homepage.scss");
var Homepage = function () {
    var nav = react_router_dom_1.useNavigate();
    var state = react_router_dom_1.useLocation().state;
    function clickNewTravel(e) {
        nav('/TravelInfo1', {
            state: state
        });
    }
    return (react_1["default"].createElement("div", { className: 'wrapper' },
        react_1["default"].createElement("div", { className: 'GloabGIF' },
            react_1["default"].createElement("div", { className: 'imge' })),
        react_1["default"].createElement("div", { className: 'NewTravelbtn_Wrapper' },
            react_1["default"].createElement("button", { className: 'NewTravelbtn', onClick: clickNewTravel }, "New Travel"))));
};
exports["default"] = Homepage;
