"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var react_1 = require("react");
//import logo from "./logo.svg";
var Counter_1 = require("./features/counter/Counter");
require("./App.css");
function App() {
    var _a = react_1.useState([]), usersState = _a[0], setUsers = _a[1];
    react_1.useEffect(function () {
        axios_1["default"]
            .get("/get-users")
            .then(function (res) {
            console.log(res);
            var data = res.data;
            console.log(data);
            var users = data.users;
            if (users) {
                setUsers(users);
            }
        })["catch"](function (err) {
            console.error(err);
        });
    }, []);
    function handleAddUser(ev) {
        ev.preventDefault();
        try {
            var user = ev.target.elements.name.value;
            if (!user)
                throw new Error("No use in input");
            axios_1["default"].post('/add-user', { user: user }).then(function (res) { return console.log(res); })["catch"](function (err) { return console.error(err); });
        }
        catch (error) {
            console.error(error);
        }
        axios_1["default"]
            .get("/get-users")
            .then(function (res) {
            console.log(res);
            var data = res.data;
            console.log(data);
            var users = data.users;
            if (users) {
                setUsers(users);
            }
        })["catch"](function (err) {
            console.error(err);
        });
    }
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement(Counter_1.Counter, null),
            React.createElement("div", { className: "users" }, usersState.map(function (user, index) {
                return (React.createElement("p", { key: index },
                    user.name,
                    " with id ",
                    user.id));
            })),
            React.createElement("form", { onSubmit: handleAddUser },
                React.createElement("input", { required: true, type: "text", name: "name", placeholder: "enter user name" }),
                React.createElement("button", { type: "submit" }, "ADD")),
            React.createElement("span", null,
                React.createElement("span", null, "Learn "),
                React.createElement("a", { className: "App-link", href: "https://reactjs.org/", target: "_blank", rel: "noopener noreferrer" }, "React"),
                React.createElement("span", null, ", "),
                React.createElement("a", { className: "App-link", href: "https://redux.js.org/", target: "_blank", rel: "noopener noreferrer" }, "Redux"),
                React.createElement("span", null, ", "),
                React.createElement("a", { className: "App-link", href: "https://redux-toolkit.js.org/", target: "_blank", rel: "noopener noreferrer" }, "Redux Toolkit"),
                ",",
                React.createElement("span", null, " and "),
                React.createElement("a", { className: "App-link", href: "https://react-redux.js.org/", target: "_blank", rel: "noopener noreferrer" }, "React Redux")))));
}
exports["default"] = App;
