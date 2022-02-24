"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var __1 = require("..");
function UsersContainer(_a) {
    var userData = _a.userData, fetchUsers = _a.fetchUsers;
    react_1.useEffect(function () {
        fetchUsers();
    }, []);
    return userData.loading ? (react_1["default"].createElement("h2", null, "Loading")) : userData.error ? (react_1["default"].createElement("h2", null, userData.error)) : (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h2", null, "User List"),
        react_1["default"].createElement("div", null, userData && userData.users && userData.users.map(function (user, index) { return react_1["default"].createElement("p", { key: index }, user.name); }))));
}
function mapStateToProps(state) {
    return {
        userData: state.user
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchUsers: function () { return dispatch(__1.fetchUsers()); }
    };
}
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
