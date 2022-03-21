"use strict";
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
var shortid = require("shortid");
require("dotenv");
function isEmpty(obj) {
    //returns whether object is empty
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
var App = function () {
    var _a = react_1.useState([]), countries = _a[0], setCountries = _a[1];
    var _b = react_1.useState(""), searchQuery = _b[0], setSearchQuery = _b[1];
    var hook = function () {
        axios_1["default"]
            .get("https://restcountries.eu/rest/v2/all")
            .then(function (res) {
            setCountries(res.data);
        });
    };
    react_1.useEffect(hook, []); //empty array in second arg means execute effect only on first rendering
    var handleSearchInput = function (event) {
        console.log("we are inside handleSearchInput");
        setSearchQuery(event.target.value); //now 'searchQuery' contains what is currently written in input
    };
    var searchResult = function (query, countries) {
        //returns array of countries that correspond to query
        return countries.filter(function (x) {
            return x.name.toLowerCase().includes(query.toLowerCase());
        });
    };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("p", null, "Find Countries"),
            react_1["default"].createElement("input", { value: searchQuery, onChange: handleSearchInput })),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(CountriesToShow, { countries: countries, searchQuery: searchQuery, searchResult: searchResult, setSearchQuery: setSearchQuery }))));
};
exports["default"] = App;
