"use strict";
exports.__esModule = true;
require("./User.scss");
var menu_1 = require("../../components/menuBar/menu");
var Profile_1 = require("../../components/profile/Profile");
var Recipes_1 = require("../../components/recipes/Recipes");
var background_jpg_1 = require("../../images/background.jpg");
var userInfo = [{ name: "Dima Abbas", phone: "0525041028", email: "dimaabbas25@gmail.com" }];
function User() {
    return (React.createElement("div", { className: "User" },
        React.createElement("div", { className: "wrapper1" },
            React.createElement(menu_1["default"], null)),
        React.createElement("div", { className: "wrapper2" },
            React.createElement("img", { className: "image", src: background_jpg_1["default"], alt: "" }),
            React.createElement("div", { className: 'content' },
                React.createElement("div", { className: "profile" }, userInfo.map(function (user, index) {
                    var name = user.name, phone = user.phone, email = user.email;
                    return React.createElement(Profile_1["default"], { key: index, info: { name: name, phone: phone, email: email } });
                })),
                React.createElement("div", { className: "recipes" },
                    React.createElement(Recipes_1["default"], null))),
            React.createElement("br", null),
            React.createElement("br", null))));
}
exports["default"] = User;
