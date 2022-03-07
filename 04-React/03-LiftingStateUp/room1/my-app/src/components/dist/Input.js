"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
require("../components/Input.scss");
function Input(prop) {
    var _a = react_2.useState(""), Sentance = _a[0], setSentance = _a[1];
    var arr = prop.arr, setArr = prop.setArr;
    function handleChange(e) {
        setSentance(e.target.value);
    }
    function handelClick() {
        if (Sentance) {
            setArr(__spreadArrays(arr, [{ value: Sentance }]));
            console.log(Sentance);
        }
        setSentance("");
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("input", { value: Sentance, onChange: handleChange, type: "text" }),
        react_1["default"].createElement("button", { onClick: handelClick }, "Send")));
}
exports["default"] = Input;
