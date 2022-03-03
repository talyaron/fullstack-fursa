"use strict";
exports.__esModule = true;
var react_1 = require("react");
//import newCard '../../components/newCard/productCard';
//import "./style.css";
function Data() {
    var _a = react_1.useState([]), albums = _a[0], setAlbums = _a[1];
    react_1.useEffect(function () {
        getAlbums().then(function (albumsDB) {
            setAlbums(albumsDB);
            console.log(albumsDB);
        });
    }, []);
    function getAlbums() {
        return new Promise(function (resolve, reject) {
            fetch("https://jsonplaceholder.typicode.com/albums")
                .then(function (response) { return response.json(); })
                .then(function (json) {
                resolve(json);
            })["catch"](function (err) {
                reject(err);
            });
        });
    }
    console.log("used the function");
    return (react_1["default"].createElement("div", { id: "page-landing" },
        react_1["default"].createElement("h1", null, "Albums"),
        react_1["default"].createElement("div", { className: "albums" }, albums.map(function (album, i) {
            return react_1["default"].createElement("div", { key: album.id, className: "album" },
                react_1["default"].createElement("h3", null, album.title));
        }))));
}
exports["default"] = Data;
