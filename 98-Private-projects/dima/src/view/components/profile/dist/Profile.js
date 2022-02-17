"use strict";
exports.__esModule = true;
var edit_png_1 = require("./edit.png");
var chief_jpg_1 = require("./chief.jpg");
require("./Profile.scss");
function Profile(prop) {
    var _a = prop.info, name = _a.name, phone = _a.phone, email = _a.email;
    return (React.createElement("div", { className: "profile" },
        React.createElement("img", { src: edit_png_1["default"], alt: "" }),
        React.createElement("div", { className: "profileImg" },
            React.createElement("img", { src: chief_jpg_1["default"], alt: "" })),
        React.createElement("p", null,
            React.createElement("span", null, " Name : "),
            " ",
            name),
        React.createElement("p", null,
            " ",
            React.createElement("span", null, "  Phone number : "),
            " ",
            phone),
        React.createElement("p", null,
            " ",
            React.createElement("span", null, "  E-mail : "),
            " ",
            email)));
}
exports["default"] = Profile;
