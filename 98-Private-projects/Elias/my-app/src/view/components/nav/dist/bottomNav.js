"use strict";
exports.__esModule = true;
var react_1 = require("react");
var BottomNavigation_1 = require("@mui/material/BottomNavigation");
var BottomNavigationAction_1 = require("@mui/material/BottomNavigationAction");
var Folder_1 = require("@mui/icons-material/Folder");
var Restore_1 = require("@mui/icons-material/Restore");
var Favorite_1 = require("@mui/icons-material/Favorite");
var LocationOn_1 = require("@mui/icons-material/LocationOn");
require("./BottomNav.scss");
var BottomNav = function () {
    var _a = react_1.useState('recents'), value = _a[0], setValue = _a[1];
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    return (React.createElement(BottomNavigation_1["default"], { sx: { width: 500 }, value: value, onChange: handleChange },
        React.createElement(BottomNavigationAction_1["default"], { label: "Recents", value: "recents", icon: React.createElement(Restore_1["default"], null) }),
        React.createElement(BottomNavigationAction_1["default"], { label: "Favorites", value: "favorites", icon: React.createElement(Favorite_1["default"], null) }),
        React.createElement(BottomNavigationAction_1["default"], { label: "Nearby", value: "nearby", icon: React.createElement(LocationOn_1["default"], null) }),
        React.createElement(BottomNavigationAction_1["default"], { label: "Folder", value: "folder", icon: React.createElement(Folder_1["default"], null) })));
};
exports["default"] = BottomNav;
