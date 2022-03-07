"use strict";
exports.__esModule = true;
require("./InputComp.scss");
var InputComp = function (props) {
    var propsname = props.propsname;
    return (React.createElement("div", null,
        React.createElement("input", { id: propsname, type: "checkbox" }),
        React.createElement("label", { className: propsname, htmlFor: propsname })));
};
exports["default"] = InputComp;
