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
                temperature: { type: 'number' }
            }
        }
    },
    required: ['current']
};
var validate = ajv.compile(weatherschema);
function NewYork() {
    var _a = react_2.useState(0), newyork = _a[0], setNewyork = _a[1];
    react_2.useEffect(function () {
        console.log("use effect");
        getData().then(function (e) {
            setNewyork(e.current.temperature);
            console.log(e);
            console.log(newyork);
        })["catch"](function (err) {
            console.log(err);
        });
    }, []);
    function getData() {
        return new Promise(function (resolve, reject) {
            fetch("http://api.weatherstack.com/current?access_key=a86268b9fec2fec325d4ac76b371f28b&query=New20%York")
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
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(menu_1["default"], null),
        react_1["default"].createElement("div", { className: 'newYork' },
            react_1["default"].createElement("h1", null, "the current weather in NewYork"),
            newyork)));
}
exports["default"] = NewYork;
