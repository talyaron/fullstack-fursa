"use strict";
exports.__esModule = true;
var chief_jpg_1 = require("./chief.jpg");
require("./Profile.scss");
var AutoAwesome_1 = require("@mui/icons-material/AutoAwesome");
function Profile(prop) {
    var _a = prop.info, name = _a.name, phone = _a.phone, email = _a.email;
    return (React.createElement("div", { className: "profile" },
        React.createElement("div", { className: 'Edit' },
            React.createElement(AutoAwesome_1["default"], null)),
        React.createElement("br", null),
        React.createElement("div", { className: "profileImg" },
            React.createElement("img", { src: chief_jpg_1["default"], alt: "" })),
        React.createElement("p", null,
            React.createElement("span", null, " Name : "),
            " ",
            name),
        React.createElement("p", null,
            React.createElement("span", null, "  Phone number : "),
            " ",
            phone),
        React.createElement("p", null,
            React.createElement("span", null, "  E-mail : "),
            " ",
            email)));
}
exports["default"] = Profile;
