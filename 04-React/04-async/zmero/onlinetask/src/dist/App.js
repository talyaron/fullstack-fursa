"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.scss");
var card_1 = require("./view/components/card/card");
function App() {
    var _a = react_1.useState([]), photos = _a[0], setPhotos = _a[1];
    function getPhotos() {
        return new Promise(function (resolve, reject) {
            fetch("https://jsonplaceholder.typicode.com/photos")
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
        getPhotos().then(function (e) {
            setPhotos(e.slice(0, 100));
            console.log(e.slice(0, 100));
        });
    }, []);
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("div", { className: "App__photos" }, photos.map(function (e) {
            return react_1["default"].createElement(card_1["default"], { key: e.id, img: e.url, title: e.title });
        }))));
}
exports["default"] = App;
