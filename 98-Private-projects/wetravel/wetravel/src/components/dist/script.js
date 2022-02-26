"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../components/Script.scss");
var myvideo_mp4_1 = require("/video/myvideo.mp4");
// let searchBtn = document.querySelector("#search-btn");
// let searchBar = document.querySelector(".search-bar-container");
// let formBtn = document.querySelector("#login-btn");
// let loginForm = document.querySelector(".login-form-container");
// let formClose = document.querySelector("#form-close");
// let menu = document.querySelector("#menu-bar");
// let navbar = document.querySelector(".navbar");
// let videoBtn = document.querySelectorAll(".vid-btn");
function script() {
    //   window.onscroll = () => {
    //     searchBtn.classList.remove("fa-times");
    //     searchBar.classList.remove("active");
    //     menu.classList.remove("fa-times");
    //     navbar.classList.remove("active");
    //     loginForm.classList.remove("active");
    //   };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("header", null,
            react_1["default"].createElement("div", { id: "menu-bar", className: "fas fa-bars" }),
            react_1["default"].createElement("a", { href: "#", className: "logo" },
                react_1["default"].createElement("span", null, "T"),
                "ravel"),
            react_1["default"].createElement("nav", { className: "navbar" },
                react_1["default"].createElement("a", { href: "#home" }, "home"),
                react_1["default"].createElement("a", { href: "#book" }, "book"),
                react_1["default"].createElement("a", { href: "#packages" }, "packages"),
                react_1["default"].createElement("a", { href: "#services" }, "services"),
                react_1["default"].createElement("a", { href: "#gallery" }, "gallery"),
                react_1["default"].createElement("a", { href: "#review" }, "review"),
                react_1["default"].createElement("a", { href: "#contact" }, "contact")),
            react_1["default"].createElement("div", { className: "icons" },
                react_1["default"].createElement("i", { className: "fas fa-search", id: "search-btn" }),
                react_1["default"].createElement("i", { className: "fas fa-user", id: "login-btn" })),
            react_1["default"].createElement("form", { action: "", className: "search-bar-container" },
                react_1["default"].createElement("input", { type: "search", id: "search-bar", placeholder: "search here..." }))),
        react_1["default"].createElement("div", { className: "login-form-container" },
            react_1["default"].createElement("i", { className: "fas fa-times", id: "form-close" }, " "),
            react_1["default"].createElement("form", { action: "" },
                react_1["default"].createElement("h3", null, "login"),
                react_1["default"].createElement("input", { type: "email", className: "box", placeholder: "enter your email" }),
                react_1["default"].createElement("input", { type: "password", className: "box", placeholder: "enter your password" }),
                react_1["default"].createElement("input", { type: "submit", value: "login now", className: "btn" }),
                react_1["default"].createElement("input", { type: "checkbox", id: "remember" }),
                react_1["default"].createElement("p", null,
                    "forget password? ",
                    react_1["default"].createElement("a", { href: "#" }, "click here")),
                react_1["default"].createElement("p", null,
                    "don't have and account? ",
                    react_1["default"].createElement("a", { href: "#" }, "register now")))),
        react_1["default"].createElement("section", { className: "home", id: "home" },
            react_1["default"].createElement("div", { className: "content" },
                react_1["default"].createElement("h3", null, "adventure is worthwhile"),
                react_1["default"].createElement("p", null, "dicover new places with us, adventure awaits"),
                react_1["default"].createElement("a", { href: "#", className: "btn" }, "discover more")),
            react_1["default"].createElement("div", { className: "controls" },
                react_1["default"].createElement("span", { className: "vid-btn active", "data-src": myvideo_mp4_1["default"] }),
                react_1["default"].createElement("span", { className: "vid-btn", "data-src": myvideo_mp4_1["default"] }),
                react_1["default"].createElement("span", { className: "vid-btn", "data-src": myvideo_mp4_1["default"] }),
                react_1["default"].createElement("span", { className: "vid-btn", "data-src": myvideo_mp4_1["default"] }),
                react_1["default"].createElement("span", { className: "vid-btn", "data-src": myvideo_mp4_1["default"] })),
            react_1["default"].createElement("div", { className: "video-container" },
                react_1["default"].createElement("video", { width: "100%", height: "100%", controls: true, loop: true },
                    react_1["default"].createElement("source", { src: myvideo_mp4_1["default"], type: "video/mp4" }),
                    "Your browser does not support HTML5 video.")))));
}
exports["default"] = script;
