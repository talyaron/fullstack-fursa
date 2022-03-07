"use strict";
exports.__esModule = true;
require("./Store.scss");
var react_router_dom_1 = require("react-router-dom");
function Store() {
    var coatsId = react_router_dom_1.useParams().coatsId;
    console.log(coatsId);
    return (React.createElement("div", null,
        "name:",
        coatsId));
}
exports["default"] = Store;
