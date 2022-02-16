"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
function App() {
    var _a = react_1.useState({}), albums = _a[0], setalbums = _a[1];
    function getAlbums() {
        return new Promise(function (resolve, reject) {
            fetch("https://jsonplaceholder.typicode.com/Albums/")
                .then(function (response) { return response.json(); })
                .then(function (json) {
                resolve(json);
            })["catch"](function (err) {
                reject(err);
            });
        });
    }
    getAlbums()
        .then(function (json) {
        setalbums(json);
    })["catch"](function (err) {
        console.error(err);
    });
    return (react_1["default"].createElement("div", { className: "App" }));
}
exports["default"] = App;
