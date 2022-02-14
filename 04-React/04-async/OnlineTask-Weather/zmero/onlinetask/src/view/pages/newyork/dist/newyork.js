"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
require("./newyork.scss");
var ajv_1 = require("ajv");
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
    var _a = react_2.useState([]), newyork = _a[0], setNewyork = _a[1];
    react_2.useEffect(function () {
        console.log("use effect");
        getData().then(function (e) {
            setNewyork(e);
            console.log(e);
            console.log(newyork);
        })["catch"](function (err) {
            console.log(err);
        });
    }, []);
    function getData() {
        return new Promise(function (resolve, reject) {
            fetch("http://api.weatherstack.com/current?access_key=c5b7804e5d20cb19bd8239fc79235b93&query=New20%York")
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
    return (react_1["default"].createElement("div", null));
}
exports["default"] = NewYork;
