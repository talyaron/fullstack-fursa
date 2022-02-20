"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var ajv_1 = require("ajv");
var ajv = ajv_1["default"]();
function App() {
    var _a = react_1.useState(""), city = _a[0], setcity = _a[1];
    var _b = react_1.useState(""), temp = _b[0], settemp = _b[1];
    var _c = react_1.useState(""), temp_max = _c[0], settemp_max = _c[1];
    var _d = react_1.useState(""), temp_min = _d[0], settemp_min = _d[1];
    var _e = react_1.useState(""), search = _e[0], setSearch = _e[1];
    var CitySchema = {
        type: "array",
        properties: {
            temp: { type: "number" },
            temp_min: { type: "number" },
            temp_max: { type: "number" }
        },
        required: ["temp", "temp_min", "temp_max"],
        additionalProperties: false
    };
    var dataSchema = {
        type: "object",
        items: CitySchema
    };
    var validate = ajv.compile(dataSchema);
    function findCity() {
        return new Promise(function (resolve, reject) {
            fetch("http://api.openweathermap.org/data/2.5/weather?q=" + search + "&units=metric&appid=4ebb9418ca605fa1931880e565ec065c")
                .then(function (response) { return response.json(); })
                .then(function (dataDB) {
                var valid = validate(dataDB);
                console.log(valid);
                if (valid)
                    resolve(dataDB);
                else
                    reject(validate.errors);
            })["catch"](function (err) {
                reject(err);
            });
        });
    }
    function setData() {
        findCity()
            .then(function (whetherDB) {
            settemp(whetherDB.main.temp);
            settemp_max(whetherDB.main.temp_max);
            settemp_min(whetherDB.main.temp_min);
            setcity(search);
            console.log(temp_max);
            console.log(whetherDB);
        })["catch"](function (err) {
            console.log(err);
        });
    }
    return (react_1["default"].createElement("div", { className: "box" },
        react_1["default"].createElement("div", { className: "InputData" },
            react_1["default"].createElement("h2", null, "insert your city"),
            react_1["default"].createElement("input", { value: search, type: "search", className: "InputField", onChange: function (event) {
                    setSearch(event.target.value);
                } }),
            react_1["default"].createElement("input", { value: "Submit", type: "button", className: "btn", onClick: setData }),
            !city ? (react_1["default"].createElement("div", null,
                react_1["default"].createElement("h3", null,
                    react_1["default"].createElement("b", null, "No Data Found")))) : (react_1["default"].createElement("div", null,
                react_1["default"].createElement("h1", { className: "temp" },
                    "curernt temp ",
                    temp),
                react_1["default"].createElement("h3", { className: "tempmin_max" },
                    "min temp:",
                    temp_min,
                    " Cel"),
                react_1["default"].createElement("h3", { className: "tempmin_max" },
                    "max temp:",
                    temp_max,
                    "Cel"))))));
}
exports["default"] = App;
