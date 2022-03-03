"use strict";
exports.__esModule = true;
var React = require("react");
var Search_1 = require("@mui/icons-material/Search");
var react_1 = require("react");
var styles_1 = require("@mui/material/styles");
var Input = styles_1.styled('input')({
    display: 'none'
});
function SearchBar() {
    var _a = react_1.useState(false), sortPopup = _a[0], setSortPopup = _a[1];
    var _b = react_1.useState(false), filterPopup = _b[0], setFilterPopup = _b[1];
    function sortPopUpMenu() {
        return (React.createElement("ul", { className: "popup" },
            React.createElement("li", null, "first name"),
            React.createElement("li", null, "last name"),
            React.createElement("li", null, "id")));
    }
    function filterPopUpMenu() {
        return (React.createElement("ul", { className: "popup" },
            React.createElement("li", null, "class"),
            React.createElement("li", null, "status")));
    }
    return (React.createElement("div", { className: "searchBar" },
        React.createElement("input", { type: "text", placeholder: 'search by name, phone, email ...' }),
        React.createElement(Search_1["default"], { className: 'searchIcon' }),
        React.createElement("div", { className: 'sortby' },
            React.createElement("button", { onClick: function () { return setSortPopup(!sortPopup); } }, "sort by"),
            sortPopup && sortPopUpMenu()),
        React.createElement("div", { className: 'filter' },
            React.createElement("button", { onClick: function () { return setFilterPopup(!filterPopup); } }, "filter"),
            filterPopup && filterPopUpMenu())));
}
exports["default"] = SearchBar;
