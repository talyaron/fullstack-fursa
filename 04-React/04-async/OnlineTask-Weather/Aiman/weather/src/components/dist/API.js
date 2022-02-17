"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var ajv_1 = require("ajv");
var City_1 = require("./City");
var ajv = new ajv_1["default"]();
function Api(prop) {
    var arr = __spreadArrays(prop.arr);
    console.log(arr);
    return (React.createElement("div", null, arr.map(function (item, index) {
        return React.createElement(City_1["default"], { key: index, city: item.city, src: item.src });
    })));
}
exports["default"] = Api;
