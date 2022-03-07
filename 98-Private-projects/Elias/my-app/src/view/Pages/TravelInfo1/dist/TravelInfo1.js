"use strict";
exports.__esModule = true;
require("./TravelInfo1.scss");
var ej2_react_calendars_1 = require("@syncfusion/ej2-react-calendars");
var react_router_dom_1 = require("react-router-dom");
var NavTextReducer_1 = require("../../../app/reducer/NavTextReducer");
var hooks_1 = require("../../../app/hooks");
var react_1 = require("react");
var InputComp_1 = require("../../components/InputComp/InputComp");
var SingupF_1 = require("../../components/SignupF/SingupF");
var TravelInfo1 = function () {
    var TravelPList = [{ propsname: "leisure" }, { propsname: "business" }, { propsname: "roadTrip" }, { propsname: "family" }, { propsname: "study" }, { propsname: "grieving" }];
    var LuggagePList = [{ propsname: "trolly" }, { propsname: "suitcase" }, { propsname: "briefcase" }, { propsname: "backpack" }, { propsname: "handbag" }, { propsname: "multy" }];
    var nav = react_router_dom_1.useNavigate();
    var state = react_router_dom_1.useLocation().state;
    var dispatch = hooks_1.useAppDispatch();
    react_1.useEffect(function () {
        dispatch(NavTextReducer_1.changeNavText("Fill travel info"));
    }, [dispatch]);
    function clickProceed(e) {
        nav('/TravelInfo2', {
            state: state
        });
    }
    //const dateValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 20);
    return (React.createElement("div", { className: "wrapper" },
        React.createElement("div", { className: "header" }, " Fill travel info"),
        React.createElement("form", { action: "", className: "TarvelInfo1Form" },
            React.createElement(SingupF_1["default"], null),
            React.createElement("div", { className: " text whereHeader" }, "Where"),
            React.createElement("input", { type: "text", placeholder: 'Type here', className: 'whereInput' }),
            React.createElement("div", { className: "text whenHeader" }, "When"),
            React.createElement(ej2_react_calendars_1.CalendarComponent, { id: "calendar", isMultiSelection: true }),
            React.createElement("div", { className: " text HowMany" }, "Whow many People"),
            React.createElement("input", { type: "text", placeholder: 'Type here', className: 'HowManyInput' }),
            React.createElement("div", { className: " text TravelP" }, "Travel Purpose"),
            React.createElement("div", { className: "grid-container" }, TravelPList.map(function (element, index) {
                return (React.createElement(InputComp_1["default"], { key: index, propsname: element.propsname }));
            })),
            React.createElement("div", { className: "text ChooseL" }, "Choose Luggage"),
            React.createElement("div", { className: "grid-container" }, LuggagePList.map(function (element, index) {
                return (React.createElement(InputComp_1["default"], { key: index, propsname: element.propsname }));
            })),
            React.createElement("button", { className: 'Proceedbtn', onClick: clickProceed }, "Proceed"))));
};
exports["default"] = TravelInfo1;
