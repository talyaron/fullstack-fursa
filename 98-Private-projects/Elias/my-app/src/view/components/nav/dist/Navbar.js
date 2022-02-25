"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Navbar.scss");
var Burger_1 = require("./Burger");
var react_router_dom_1 = require("react-router-dom");
var hooks_1 = require("../../../app/hooks");
var NavTextReducer_1 = require("../../../app/reducer/NavTextReducer");
var Navbar = function () {
    var navigate = react_router_dom_1.useNavigate();
    var _a = react_1.useState(""), NavHeader = _a[0], setNavHeader = _a[1];
    var NavText = hooks_1.useAppSelector(NavTextReducer_1.ChangeNav);
    console.log(NavText);
    react_1.useEffect(function () {
        setNavHeader(NavText.Header);
    }, [NavText]);
    return (react_1["default"].createElement("div", { className: 'nav' },
        react_1["default"].createElement("div", { className: "backb", onClick: function () { return navigate(-1); } },
            react_1["default"].createElement("p", null,
                react_1["default"].createElement("i", { className: "arrow-left" }))),
        react_1["default"].createElement("div", { className: 'PageName' }, NavHeader),
        react_1["default"].createElement(Burger_1["default"], null)));
};
exports["default"] = Navbar;
