"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./TravelInfo2.scss");
var TravelInfo2 = function () {
    var nav = react_router_dom_1.useNavigate();
    var state = react_router_dom_1.useLocation().state;
    function onSubmit(e) {
        nav('/ViewList', {
            state: state
        });
    }
    return (react_1["default"].createElement("div", { className: "wrapper" },
        react_1["default"].createElement("div", { className: "header" }, " Fill travel info"),
        react_1["default"].createElement("form", { action: "", className: "TarvelInfo1Form" },
            react_1["default"].createElement("div", { className: "catg box1" },
                react_1["default"].createElement("div", { className: " text Transport" }, "Transport"),
                react_1["default"].createElement("div", { className: "grid-container" },
                    react_1["default"].createElement("input", { id: "Plane", type: "checkbox", name: "apple" }),
                    react_1["default"].createElement("label", { className: "Plane", htmlFor: "Plane" }),
                    react_1["default"].createElement("input", { id: "Bus", type: "checkbox" }),
                    react_1["default"].createElement("label", { className: 'Bus', htmlFor: "Bus" }),
                    react_1["default"].createElement("input", { id: "Car", type: "checkbox", name: "apple" }),
                    react_1["default"].createElement("label", { className: "Car", htmlFor: "Car" }),
                    react_1["default"].createElement("input", { id: "Ship", type: "checkbox" }),
                    react_1["default"].createElement("label", { className: 'Ship', htmlFor: "Ship" }),
                    react_1["default"].createElement("input", { id: "Metro", type: "checkbox", name: "apple" }),
                    react_1["default"].createElement("label", { className: "Metro", htmlFor: "Metro" }),
                    react_1["default"].createElement("input", { id: "Taxi", type: "checkbox" }),
                    react_1["default"].createElement("label", { className: 'Taxi', htmlFor: "Taxi" }))),
            react_1["default"].createElement("div", { className: "catg box2" },
                react_1["default"].createElement("div", { className: " text Activity" }, "Activity"),
                react_1["default"].createElement("div", { className: "grid-container" },
                    react_1["default"].createElement("input", { id: "Glof", type: "checkbox", name: "apple" }),
                    react_1["default"].createElement("label", { className: "Glof", htmlFor: "Glof" }),
                    react_1["default"].createElement("input", { id: "Club", type: "checkbox" }),
                    react_1["default"].createElement("label", { className: 'Club', htmlFor: "Club" }),
                    react_1["default"].createElement("input", { id: "Photography", type: "checkbox", name: "apple" }),
                    react_1["default"].createElement("label", { className: "Photography", htmlFor: "Photography" }),
                    react_1["default"].createElement("input", { id: "Swimming", type: "checkbox" }),
                    react_1["default"].createElement("label", { className: 'Swimming', htmlFor: "Swimming" }),
                    react_1["default"].createElement("input", { id: "Hiking", type: "checkbox", name: "apple" }),
                    react_1["default"].createElement("label", { className: "Hiking", htmlFor: "Hiking" }),
                    react_1["default"].createElement("input", { id: "Biking", type: "checkbox" }),
                    react_1["default"].createElement("label", { className: 'Biking', htmlFor: "Biking" }))),
            react_1["default"].createElement("div", { className: "catg box3" },
                react_1["default"].createElement("div", { className: " text Accommodation" }, "Accommodation"),
                react_1["default"].createElement("div", { className: "grid-container" },
                    react_1["default"].createElement("input", { id: "Hotel", type: "checkbox", name: "apple" }),
                    react_1["default"].createElement("label", { className: "Hotel", htmlFor: "Hotel" }),
                    react_1["default"].createElement("input", { id: "BNB", type: "checkbox" }),
                    react_1["default"].createElement("label", { className: 'BNB', htmlFor: "BNB" }),
                    react_1["default"].createElement("input", { id: "ShortTerm", type: "checkbox", name: "apple" }),
                    react_1["default"].createElement("label", { className: "ShortTerm", htmlFor: "ShortTerm" }),
                    react_1["default"].createElement("input", { id: "Van", type: "checkbox" }),
                    react_1["default"].createElement("label", { className: 'Van', htmlFor: "Van" }),
                    react_1["default"].createElement("input", { id: "Tent", type: "checkbox", name: "apple" }),
                    react_1["default"].createElement("label", { className: "Tent", htmlFor: "Tent" }),
                    react_1["default"].createElement("input", { id: "Sofa", type: "checkbox" }),
                    react_1["default"].createElement("label", { className: 'Sofa', htmlFor: "Sofa" }))),
            react_1["default"].createElement("div", { className: "catg box4" },
                react_1["default"].createElement("div", { className: " text Special" }, "Special Care"),
                react_1["default"].createElement("div", { className: "grid-container" },
                    react_1["default"].createElement("input", { id: "Baby", type: "checkbox", name: "apple" }),
                    react_1["default"].createElement("label", { className: "Baby", htmlFor: "Baby" }),
                    react_1["default"].createElement("input", { id: "Toddlers", type: "checkbox" }),
                    react_1["default"].createElement("label", { className: 'Toddlers', htmlFor: "Toddlers" }),
                    react_1["default"].createElement("input", { id: "Pets", type: "checkbox", name: "apple" }),
                    react_1["default"].createElement("label", { className: "Pets", htmlFor: "Pets" }),
                    react_1["default"].createElement("input", { id: "Med", type: "checkbox" }),
                    react_1["default"].createElement("label", { className: 'Med', htmlFor: "Med" }),
                    react_1["default"].createElement("input", { id: "Merchandise", type: "checkbox", name: "apple" }),
                    react_1["default"].createElement("label", { className: "Merchandise", htmlFor: "Merchandise" }),
                    react_1["default"].createElement("input", { id: "Valuable", type: "checkbox" }),
                    react_1["default"].createElement("label", { className: 'Valuable', htmlFor: "Valuable" }))),
            react_1["default"].createElement("button", { className: 'Proceedbtn', onClick: onSubmit }, "Submit"))));
};
exports["default"] = TravelInfo2;
