"use strict";
exports.__esModule = true;
require("./App.scss");
var Card_1 = require("./view/components/Card/Card");
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./view/pages/Home/Home");
var About_1 = require("./view/pages/About/About");
var HerbMed = [{ name: 'Skin-rash', HrbMed: 'Rash-Aid', Price: 150, img: 'https://beleafpharma.co.il/wp-content/uploads/2020/02/Artboard-13.jpg' }, { name: 'muscle-soreness', HrbMed: 'Awjaa', Price: 90, img: 'https://beleafpharma.co.il/wp-content/uploads/2021/05/WhatsApp-Image-2021-04-21-at-18.08.53-1.jpeg' }];
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement(react_router_dom_1.Routes, null,
                React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Home_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "about", element: React.createElement(About_1["default"], null) })),
            HerbMed.map(function (HerbMed, index) {
                return React.createElement(Card_1["default"], { key: index, name: HerbMed.name, HrbMed: HerbMed.HrbMed, img: HerbMed.img, Price: HerbMed.Price });
            }))));
}
exports["default"] = App;
