"use strict";
exports.__esModule = true;
require("./App.scss");
var react_1 = require("react");
var menu_1 = require("./view/menuBar/menu");
var Profile_1 = require("./view/profile/Profile");
var Recipes_1 = require("./view/recipes/Recipes");
function App() {
    react_1.useEffect(function () {
        fetch('/get-info').then(function (res) { return res.json(); }).then(function (data) {
            setInfo(data);
        });
    }, []);
    var _a = react_1.useState([]), userInfo = _a[0], setInfo = _a[1];
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("div", { className: "wrapper1" },
            react_1["default"].createElement(menu_1["default"], null)),
        react_1["default"].createElement("div", { className: "wrapper2" },
            react_1["default"].createElement("div", { className: "profile" }, userInfo.map(function (user, index) {
                var name = user.name, phone = user.phone, email = user.email;
                return react_1["default"].createElement(Profile_1["default"], { key: index, info: { name: name, phone: phone, email: email } });
            })),
            react_1["default"].createElement("div", { className: "recipes" },
                react_1["default"].createElement(Recipes_1["default"], null)))));
}
exports["default"] = App;
