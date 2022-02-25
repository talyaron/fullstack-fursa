"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var hooks_1 = require("../../../app/hooks");
var NavTextReducer_1 = require("../../../app/reducer/NavTextReducer");
require("./TravelInfo2.scss");
var TravelInfo2 = function () {
    var TransportList = [{ propsname: "Plane" }, { propsname: "Bus" }, { propsname: "Car" }, { propsname: "Ship" }, { propsname: "Metro" }, { propsname: "Taxi" }];
    var ActivityList = [{ propsname: "Glof" }, { propsname: "Club" }, { propsname: "Photography" }, { propsname: "Swimming" }, { propsname: "Hiking" }, { propsname: "Biking" }];
    var AccommodationList = [{ propsname: "Hotel" }, { propsname: "BNB" }, { propsname: "ShortTerm" }, { propsname: "Van" }, { propsname: "Tent" }, { propsname: "Sofa" }];
    var SpecialList = [{ propsname: "Baby" }, { propsname: "Toddlers" }, { propsname: "Pets" }, { propsname: "Med" }, { propsname: "Merchandise" }, { propsname: "Valuable" }];
    var nav = react_router_dom_1.useNavigate();
    var state = react_router_dom_1.useLocation().state;
    var dispatch = hooks_1.useAppDispatch();
    react_1.useEffect(function () {
        dispatch(NavTextReducer_1.changeNavText("Choose Categories"));
    }, [dispatch]);
    function onSubmit(e) {
        nav('/ViewList', {
            state: state
        });
    }
    return (React.createElement("div", { className: "wrapper" },
        React.createElement("div", { className: "header" }, " Fill travel info"),
        React.createElement("form", { action: "", className: "TarvelInfo1Form" },
            React.createElement("div", { className: "catg box1" },
                React.createElement("div", { className: " text Transport" }, "Transport"),
                React.createElement("div", { className: "grid-container" }, TransportList.map(function (element, index) {
                    return (React.createElement(InputComp, { key: index, propsname: element.propsname }));
                }))),
            React.createElement("div", { className: "catg box2" },
                React.createElement("div", { className: " text Activity" }, "Activity"),
                React.createElement("div", { className: "grid-container" }, ActivityList.map(function (element, index) {
                    return (React.createElement(InputComp, { key: index, propsname: element.propsname }));
                }))),
            React.createElement("div", { className: "catg box3" },
                React.createElement("div", { className: " text Accommodation" }, "Accommodation"),
                React.createElement("div", { className: "grid-container" }, AccommodationList.map(function (element, index) {
                    return (React.createElement(InputComp, { key: index, propsname: element.propsname }));
                }))),
            React.createElement("div", { className: "catg box4" },
                React.createElement("div", { className: " text Special" }, "Special Care"),
                React.createElement("div", { className: "grid-container" }, SpecialList.map(function (element, index) {
                    return (React.createElement(InputComp, { key: index, propsname: element.propsname }));
                }))),
            React.createElement("button", { className: 'Proceedbtn', onClick: onSubmit }, "Submit"))));
};
function InputComp(props) {
    var propsname = props.propsname;
    return (React.createElement("div", null,
        React.createElement("input", { id: propsname, type: "checkbox" }),
        React.createElement("label", { className: propsname, htmlFor: propsname })));
}
exports["default"] = TravelInfo2;
