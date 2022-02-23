"use strict";
exports.__esModule = true;
var chief_jpg_1 = require("./chief.jpg");
require("./Profile.scss");
var AutoAwesome_1 = require("@mui/icons-material/AutoAwesome");
var react_1 = require("react");
var Tooltip_1 = require("@mui/material/Tooltip");
function Profile(prop) {
    var _a = react_1.useState(false), edit = _a[0], setEdit = _a[1];
    var _b = prop.info, name = _b.name, phone = _b.phone, email = _b.email;
    return (React.createElement("div", { className: "profile" },
        React.createElement(Tooltip_1["default"], { title: 'edit profile' },
            React.createElement("div", { className: 'Edit' },
                React.createElement(AutoAwesome_1["default"], { sx: { fontSize: 40 } }))),
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
