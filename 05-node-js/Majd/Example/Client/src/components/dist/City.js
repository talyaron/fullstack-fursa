"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ajv_1 = require("ajv");
var bar_1 = require("./bar");
var ajv = ajv_1["default"]();
var cityWeather = {
    type: "object",
    properties: {
        current: { type: "object" },
        location: { type: "object" }
    },
    required: ["current", "location"],
    additionalProperties: false
};
var dataSchema = {
    type: "object",
    items: cityWeather
};
var validate = ajv.compile(dataSchema);
function City(prop) {
    var city = prop.city, setCity = prop.setCity;
    var _a = react_1.useState(), weatherInfo = _a[0], setWeatherInfo = _a[1];
    react_1.useEffect(function () {
        console.log("use effect");
        getWeather().then(function (weatherDB) {
            setWeatherInfo(weatherDB);
            console.log(weatherDB);
        })["catch"](function (err) {
            console.error(err);
        });
    }, [city]);
    function getWeather() {
        return new Promise(function (resolve, reject) {
            fetch("http://api.weatherstack.com/current?access_key=12c0f0c94925db508149569c31ff336b&query=" + city)
                .then(function (response) { return response.json(); })
                .then(function (weatherDB) {
                // resolve(weatherDB)
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
        react_1["default"].createElement("h1", null, weatherInfo === null || weatherInfo === void 0 ? void 0 : weatherInfo.location.name),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("img", { src: weatherInfo === null || weatherInfo === void 0 ? void 0 : weatherInfo.current.weather_icons, alt: "" }),
            react_1["default"].createElement("p", null,
                react_1["default"].createElement("span", null, "temperature: "), weatherInfo === null || weatherInfo === void 0 ? void 0 :
                weatherInfo.current.temperature),
            react_1["default"].createElement("p", null,
                react_1["default"].createElement("span", null, "weather discription: "), weatherInfo === null || weatherInfo === void 0 ? void 0 :
                weatherInfo.current.weather_descriptions)),
        react_1["default"].createElement(bar_1["default"], { city: city, setCity: setCity })));
}
exports["default"] = City;
