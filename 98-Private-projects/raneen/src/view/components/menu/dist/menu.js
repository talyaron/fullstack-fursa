"use strict";
exports.__esModule = true;
var react_1 = require("react");
function menu() {
    return (react_1["default"].createElement("div", { className: "navbar" },
        react_1["default"].createElement("div", { className: "navbar__box" },
            react_1["default"].createElement("div", { className: "navbar__left" },
                react_1["default"].createElement("nav", { role: "navigation" },
                    react_1["default"].createElement("div", { id: "menuToggle" },
                        react_1["default"].createElement("input", { type: "checkbox" }),
                        react_1["default"].createElement("span", null),
                        react_1["default"].createElement("span", null),
                        react_1["default"].createElement("span", null),
                        react_1["default"].createElement("ul", { id: "menu" },
                            react_1["default"].createElement("a", { href: "#" },
                                react_1["default"].createElement("li", null, "Home")),
                            react_1["default"].createElement("a", { href: "#" },
                                react_1["default"].createElement("li", null, "About")),
                            react_1["default"].createElement("a", { href: "#" },
                                react_1["default"].createElement("li", null, "Info")),
                            react_1["default"].createElement("a", { href: "#" },
                                react_1["default"].createElement("li", null, "Contact")),
                            react_1["default"].createElement("a", { href: "/", target: "_blank" },
                                react_1["default"].createElement("li", null, "Show me more"))))),
                react_1["default"].createElement("img", { src: 'https://static.dezeen.com/uploads/2019/02/new-zara-logo-hero-1.jpg', alt: "Logo" }),
                react_1["default"].createElement("a", { href: "#home" }, "Explore")),
            react_1["default"].createElement("div", { className: "navbar__right" },
                react_1["default"].createElement("button", { className: "navbar__right__signup", type: "button" },
                    react_1["default"].createElement("span", null, "Shopping bag")),
                react_1["default"].createElement("a", { href: "#home" }, "help"),
                react_1["default"].createElement("button", { className: "navbar__right__signin", type: "button" }, "Sign in")))));
}
exports["default"] = menu;
