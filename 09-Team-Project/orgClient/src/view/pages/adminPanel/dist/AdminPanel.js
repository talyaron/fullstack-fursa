"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AdminPanel = function () {
    var _a = react_1.useState(""), Fname = _a[0], setFname = _a[1];
    var _b = react_1.useState(""), Lname = _b[0], setLname = _b[1];
    var _c = react_1.useState(""), Email = _c[0], setEmail = _c[1];
    var _d = react_1.useState("NormalUser"), IsAdmin = _d[0], setIsAdmin = _d[1];
    var handleSubmit = function () {
        alert("The name you entered was: " + Fname);
        alert("The name you entered was: " + Lname);
        alert("The name you entered was: " + Email);
        alert("The name you entered was: " + IsAdmin);
        // to do --->send to DB 
    };
    return (react_1["default"].createElement("div", { className: 'Wrapper' },
        react_1["default"].createElement("h1", null, "Admon Panel : Add new Users"),
        react_1["default"].createElement("form", { action: "submit", method: "get", id: "UserInfo" },
            react_1["default"].createElement("label", { htmlFor: "fname" }, "First name:"),
            react_1["default"].createElement("input", { type: "text", id: "fname", name: "fname", placeholder: "First Name", value: Fname, onChange: function (e) { return setFname(e.target.value); } }),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("label", { htmlFor: "lname" }, "Last name:"),
            react_1["default"].createElement("input", { type: "text", id: "lname", name: "lname", placeholder: "Last name", value: Lname, onChange: function (e) { return setLname(e.target.value); } }),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("label", { htmlFor: "Email" }, "Email:"),
            react_1["default"].createElement("input", { type: "text", id: "Email", name: "Email", placeholder: "Email", value: Email, onChange: function (e) { return setEmail(e.target.value); } }),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("input", { type: "checkbox", id: "AdminUser", name: "AdminUser", value: "Admin", onChange: function (e) { return setIsAdmin("AdminUser"); } }),
            react_1["default"].createElement("label", { htmlFor: "AdminUser" }, " New Admin User")),
        react_1["default"].createElement("button", { type: "submit", form: "UserInfo", value: "Submit", onSubmit: handleSubmit }, "Creat a new  User")));
};
exports["default"] = AdminPanel;
