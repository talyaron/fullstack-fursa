"use strict";
exports.__esModule = true;
require("./TravelInfo1.scss");
var ej2_react_calendars_1 = require("@syncfusion/ej2-react-calendars");
var react_router_dom_1 = require("react-router-dom");
var Vector_png_1 = require("../../../icons/Vector.png");
var Vector_2_png_1 = require("../../../icons/Vector-2.png");
var Vector_4_png_1 = require("../../../icons/Vector-4.png");
var Vector_1_png_1 = require("../../../icons/Vector-1.png");
var Vector_5_png_1 = require("../../../icons/Vector-5.png");
var Vector_6_png_1 = require("../../../icons/Vector-6.png");
var Stroke_png_1 = require("../../../icons/Stroke.png");
var Vector_7_png_1 = require("../../../icons/Vector-7.png");
var Vector_3_png_1 = require("../../../icons/Vector-3.png");
var Vector_8_png_1 = require("../../../icons/Vector-8.png");
var Vector_9_png_1 = require("../../../icons/Vector-9.png");
var Vector_10_png_1 = require("../../../icons/Vector-10.png");
var TravelInfo1 = function () {
    var nav = react_router_dom_1.useNavigate();
    var state = react_router_dom_1.useLocation().state;
    function clickProceed(e) {
        nav('/Signup', {
            state: state
        });
    }
    var dateValue = new Date(new Date().getFullYear(), new Date().getMonth(), 20);
    return (React.createElement("div", { className: "wrapper" },
        React.createElement("div", { className: "header" }, " Fill travel info"),
        React.createElement("form", { action: "", className: "TarvelInfo1Form" },
            React.createElement("div", { className: " text whereHeader" }, "Where"),
            React.createElement("input", { type: "text", placeholder: 'Type here', className: 'whereInput' }),
            React.createElement("div", { className: "text whenHeader" }, "When"),
            React.createElement(ej2_react_calendars_1.CalendarComponent, { id: "calendar", isMultiSelection: true }),
            React.createElement("div", { className: " text HowMany" }, "Whow many People"),
            React.createElement("input", { type: "text", placeholder: 'Type here', className: 'HowManyInput' }),
            React.createElement("div", { className: " text TravelP" }, "Travel Purpose"),
            React.createElement("div", { className: "grid-container" },
                React.createElement("div", { className: "grid-item" },
                    React.createElement("img", { src: Vector_png_1["default"], alt: "" })),
                React.createElement("div", { className: "grid-item" },
                    React.createElement("img", { src: Vector_2_png_1["default"], alt: "" })),
                React.createElement("div", { className: "grid-item" },
                    React.createElement("img", { src: Vector_4_png_1["default"], alt: "" })),
                React.createElement("div", { className: "grid-item" },
                    React.createElement("img", { src: Vector_1_png_1["default"], alt: "" })),
                React.createElement("div", { className: "grid-item" },
                    React.createElement("img", { src: Vector_5_png_1["default"], alt: "" })),
                React.createElement("div", { className: "grid-item" },
                    React.createElement("img", { src: Vector_6_png_1["default"], alt: "" }))),
            React.createElement("div", { className: "text ChooseL" }, "Choose Luggage"),
            React.createElement("div", { className: "grid-container" },
                React.createElement("div", { className: "grid-item" },
                    React.createElement("img", { src: Stroke_png_1["default"], alt: "" })),
                React.createElement("div", { className: "grid-item" },
                    React.createElement("img", { src: Vector_7_png_1["default"], alt: "" })),
                React.createElement("div", { className: "grid-item" },
                    React.createElement("img", { src: Vector_3_png_1["default"], alt: "" })),
                React.createElement("div", { className: "grid-item" },
                    React.createElement("img", { src: Vector_8_png_1["default"], alt: "" })),
                React.createElement("div", { className: "grid-item" },
                    React.createElement("img", { src: Vector_9_png_1["default"], alt: "" })),
                React.createElement("div", { className: "grid-item" },
                    React.createElement("img", { src: Vector_10_png_1["default"], alt: "" }))),
            React.createElement("button", { className: 'Proceedbtn', onClick: clickProceed }, "Proceed"))));
};
exports["default"] = TravelInfo1;
