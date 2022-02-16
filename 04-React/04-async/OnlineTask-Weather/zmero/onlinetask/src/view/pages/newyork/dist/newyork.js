"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
require("./newyork.scss");
var ajv_1 = require("ajv");
var menu_1 = require("../../components/menu/menu");
var ajv = new ajv_1["default"]();
var weatherschema = {
    type: "object",
    properties: {
        current: {
            type: "object",
            properties: {
                temp_c: { type: 'number' }
            }
        }
    },
    required: ['current']
};
var validate = ajv.compile(weatherschema);
function NewYork() {
    var _a = react_2.useState(0), newyork = _a[0], setNewYork = _a[1];
    var newDate = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = days[newDate.getDay()];
    var strDate = 'o Y m d'
        .replace('Y', "" + newDate.getFullYear())
        .replace('m', "" + newDate.getMonth() + 1)
        .replace('d', "" + newDate.getDate())
        .replace('o', day);
    react_2.useEffect(function () {
        console.log("use effect");
        getData().then(function (e) {
            setNewYork(e.current.temp_c);
            console.log(e.current.temp_c);
            console.log(newyork);
        })["catch"](function (err) {
            console.log(err);
        });
    }, []);
    function getData() {
        return new Promise(function (resolve, reject) {
            fetch("http://api.weatherapi.com/v1/current.json?key=91901e4c18864d49872135614221502&q=new york&aqi=no")
                .then(function (response) { return response.json(); })
                .then(function (e) {
                var valid = validate(e);
                console.log(e);
                if (valid)
                    resolve(e);
                else
                    reject(validate.errors);
            })["catch"](function (err) {
                reject(err);
            });
        });
    }
    return (react_1["default"].createElement("div", { className: "main" },
        react_1["default"].createElement(menu_1["default"], null),
        react_1["default"].createElement("div", { className: "background" },
            react_1["default"].createElement("div", { className: "badget" },
                react_1["default"].createElement("div", { className: "date" }, strDate),
                react_1["default"].createElement("div", { className: "name" },
                    "New York",
                    react_1["default"].createElement("sup", null, "US")),
                react_1["default"].createElement("div", { className: "temp" },
                    newyork,
                    react_1["default"].createElement("sup", null, "\u00B0C"))))));
}
exports["default"] = NewYork;
