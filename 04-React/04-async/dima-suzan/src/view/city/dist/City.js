"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Nav_1 = require("../nav/Nav");
var ajv_1 = require("ajv");
var ajv = ajv_1["default"]();
var cityWeather = {
    type: "object",
    properties: {
        current: { type: "object", temperature: { type: "number" } },
        location: { type: "object", name: { type: "string" } }
    },
    required: ["current"],
    additionalProperties: false
};
var validate = ajv.compile(cityWeather);
function City(prop) {
    var city = prop.city, setCity = prop.setCity;
    var _a = react_1.useState({}), weatherInfo = _a[0], setWeatherInfo = _a[1];
    react_1.useEffect(function () {
        console.log("use effect");
        getWeather().then(function (weatherDB) {
            setWeatherInfo(weatherDB);
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
                var valid = validate(weatherDB);
                console.log(valid);
                if (valid)
                    resolve(weatherDB);
                else
                    reject(validate.errors);
            })["catch"](function (err) {
                reject(err);
            });
        });
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", null, weatherInfo.location.name),
        react_1["default"].createElement("p", null, "weatherInfo.current.temperature"),
        react_1["default"].createElement(Nav_1["default"], { city: city, setCity: setCity })));
}
exports["default"] = City;
