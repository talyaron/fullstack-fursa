"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var react_2 = require("react");
var Navbar_1 = require("./view/components/navbar/Navbar");
var react_router_dom_1 = require("react-router-dom");
var London_1 = require("./view/pages/london/London");
var NewYork_1 = require("./view/pages/newYork/NewYork");
var TelAviv_1 = require("./view/pages/telAviv/TelAviv");
var ajv_1 = require("ajv");
var ajv = new ajv_1["default"]();
// const weatherSchema = {
//   type: "object",
//   properties: {
//     current: { type: "object",
//     temperature:{type:"number"}},
//   },
//   required: ["current"],
//   additionalProperties: false,
// };
// const validate = ajv.compile(weatherSchema);
function App() {
    var _a = react_2.useState({}), weather = _a[0], setWeather = _a[1];
    react_2.useEffect(function () {
        getWeather().then(function (weatherDB) {
            setWeather(weatherDB);
            console.log(weatherDB);
        })["catch"](function (err) {
            console.log(err);
        });
    }, []);
    function getWeather() {
        return new Promise(function (resolve, reject) {
            fetch("http://api.weatherstack.com/current?access_key=c5b7804e5d20cb19bd8239fc79235b93&query=New%20York")
                .then(function (response) { return response.json(); })
                .then(function (weatherDB) {
                //const valid = validate(albumsDB);
                //console.log(valid);
                //if (valid) resolve(albumsDB)
                // reject(validate.errors);
            })["catch"](function (err) {
                reject(err);
            });
        });
    }
    react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(App, null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "london", element: react_1["default"].createElement(London_1["default"], { weather: weather, setWeather: setWeather }) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "newYork", element: react_1["default"].createElement(NewYork_1["default"], { weather: weather, setWeather: setWeather }) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "telAviv", element: react_1["default"].createElement(TelAviv_1["default"], { weather: weather, setWeather: setWeather }) })));
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement(Navbar_1["default"], null))));
}
exports["default"] = App;
