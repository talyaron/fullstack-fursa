"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CountriesToShow = function (props) {
    var countries = props.countries, searchQuery = props.searchQuery, searchResult = props.searchResult, setSearchQuery = props.setSearchQuery;
    if (searchQuery === "")
        return countries.map(function (x) { return react_1["default"].createElement("div", { key: shortid.generate() }, x.name); });
    //render all countries names
    else {
        var result = searchResult(searchQuery, countries); //get countries matching query
        if (result.length > 10)
            //if > 10 countries found
            return (react_1["default"].createElement("div", null,
                react_1["default"].createElement("p", null, "More than 10 matches, please be less greedy with your searching!")));
        else if (result.length > 1 && result.length < 10) {
            //if (1,10) countries found
            return result.map(function (x) { return (react_1["default"].createElement("div", { key: shortid.generate() },
                x.name,
                " ",
                react_1["default"].createElement("button", { onClick: function () { return setSearchQuery(x.name); } }, "Show Info"))); }); //render them
        }
        else if (result.length === 1) {
            //if search result is 1 country
            var x = result[0];
            return (react_1["default"].createElement("div", null,
                react_1["default"].createElement("h1", null, x.name),
                react_1["default"].createElement("p", null,
                    "Capital: ",
                    x.capital),
                react_1["default"].createElement("p", null,
                    "Population: ",
                    x.population),
                react_1["default"].createElement("h2", null, "Languages:"),
                react_1["default"].createElement("ul", null, x.languages.map(function (lang) { return (react_1["default"].createElement("li", { key: shortid.generate() }, lang.name)); })),
                react_1["default"].createElement("img", { src: x.flag, alt: x.name + " flag", width: "35%" }),
                react_1["default"].createElement(WeatherData, { country: x })));
        }
        else
            return (react_1["default"].createElement("div", null,
                react_1["default"].createElement("p", null, "No matches ;_;")));
    } //this block rendered search results
};
