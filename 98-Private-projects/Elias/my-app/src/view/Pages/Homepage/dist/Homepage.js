"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var hooks_1 = require("../../../app/hooks");
var NavTextReducer_1 = require("../../../app/reducer/NavTextReducer");
require("./Homepage.scss");
var Homepage = function () {
    var nav = react_router_dom_1.useNavigate();
    var state = react_router_dom_1.useLocation().state;
    var dispatch = hooks_1.useAppDispatch();
    react_1.useEffect(function () {
        dispatch(NavTextReducer_1.changeNavText(""));
    }, [dispatch]);
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
