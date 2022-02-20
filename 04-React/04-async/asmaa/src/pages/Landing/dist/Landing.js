"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./style.css");
function Landing(props) {
    var _a = react_1.useState(0), counter = _a[0], setCounter = _a[1];
    var _b = react_1.useState([]), albums = _b[0], setAlbums = _b[1];
    react_1.useEffect(function () {
        console.log("use effect");
        getAlbums().then(function (albumsDB) {
            setAlbums(albumsDB);
            console.log(albumsDB);
        });
    }, []);
    function handleCounter() {
        setCounter(counter + 1);
    }
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
        react_1["default"].createElement("button", { onClick: handleCounter }, counter),
        react_1["default"].createElement("div", { className: "albums" }, albums.map(function (album, i) {
            return react_1["default"].createElement("div", { key: album.id, className: "album" },
                react_1["default"].createElement("h3", null, album.title));
        }))));
}
exports["default"] = Landing;
