"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.scss");
var Index_1 = require("./view/components/Index");
function App() {
    var _a = react_1.useState([]), api = _a[0], setAPI = _a[1];
    function getAPI() {
        return new Promise(function (resolve, reject) {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(function (response) { return response.json(); })
                .then(function (json) {
                resolve(json);
            })["catch"](function (err) {
                reject(err);
            });
        });
    }
    react_1.useEffect(function () {
        console.log("use effect");
        getAPI().then(function (e) {
            setAPI(e);
            console.log(e);
        });
    }, []);
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("div", { className: "App__photos" }, api.map(function (e) {
            return react_1["default"].createElement(Index_1["default"], { key: e.id, title: e.title, body: e.body });
        }))));
}
exports["default"] = App;
