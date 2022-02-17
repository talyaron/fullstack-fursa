"use strict";
exports.__esModule = true;
function Bar(prop) {
    return (React.createElement("div", { className: "bar" },
        React.createElement("button", null,
            React.createElement("p", null, prop.title),
            React.createElement("p", null, prop.subtitle))));
}
exports["default"] = Bar;
