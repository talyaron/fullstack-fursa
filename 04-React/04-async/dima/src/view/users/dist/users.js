"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Users.scss");
function Users() {
    var _a = react_1.useState([]), users = _a[0], setUsers = _a[1];
    react_1.useEffect(function () {
        console.log("use Effect");
        getUsers().then(function (usersDB) {
            setUsers(usersDB);
            console.log(usersDB);
        });
    });
    function getUsers() {
        return new Promise(function (resolve, reject) {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(function (response) { return response.json(); })
                .then(function (json) {
                resolve(json);
            })["catch"](function (err) {
                reject(err);
            });
        });
    }
    return (React.createElement("div", { className: "Users" }, users.map(function (user, index) {
        return React.createElement("div", { className: "user" },
            React.createElement("p", null, user.name),
            React.createElement("p", null, user.username));
    })));
}
exports["default"] = Users;
