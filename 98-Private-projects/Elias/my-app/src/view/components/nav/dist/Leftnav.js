"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var hooks_1 = require("../../../app/hooks");
var UserReducer_1 = require("../../../app/reducer/UserReducer");
var travel_app_person_purple1_png_1 = require("../../../icons/travel_app_person_purple1.png");
require("./Leftnav.scss");
var Leftnav = function (props) {
    var _a = react_1.useState(travel_app_person_purple1_png_1["default"]), userimgUrl = _a[0], setuserimgUrl = _a[1];
    var _b = react_1.useState("Edit Profile"), Name = _b[0], setName = _b[1];
    var state = react_router_dom_1.useLocation().state;
    var user = hooks_1.useAppSelector(UserReducer_1.GetUser);
    var dispatch = hooks_1.useAppDispatch();
    var Open = props.Open;
    console.log(user);
    react_1.useEffect(function () {
        setName(user.userInfo.Fname + ' ' + user.userInfo.Lname);
        console.log(Name);
    }, []);
    function signoutfunc(e) {
        dispatch(UserReducer_1.logout({}));
        setName("Edit Profile");
        console.log(user);
    }
    console.log(Name);
    if (Open)
        return (react_1["default"].createElement("ul", { className: 'Open' },
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("img", { src: userimgUrl, alt: "Profile Pic" })),
            react_1["default"].createElement("li", null, Name),
            react_1["default"].createElement("li", null, "Settings"),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("div", { className: 'signoutb', onClick: signoutfunc }, "Sign Out")),
            react_1["default"].createElement("li", null, "Contact us"),
            react_1["default"].createElement("li", null, "About"),
            react_1["default"].createElement("li", null, "Rate the app")));
    else
        return (react_1["default"].createElement("ul", { className: 'Closed' },
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("img", { src: userimgUrl, alt: "Profile Pic" })),
            react_1["default"].createElement("li", null, Name),
            react_1["default"].createElement("li", null, "Settings"),
            react_1["default"].createElement("li", null, "Sign Out"),
            react_1["default"].createElement("li", null, "Contact us"),
            react_1["default"].createElement("li", null, "About"),
            react_1["default"].createElement("li", null, "Rate the app")));
};
exports["default"] = Leftnav;
