"use strict";
exports.__esModule = true;
var _1_jpg_1 = require("../../images/1.jpg");
var _2_jpg_1 = require("../../images/2.jpg");
var _3_jpg_1 = require("../../images/3.jpg");
var _4_jpg_1 = require("../../images/4.jpg");
var _5_jpg_1 = require("../../images/5.jpg");
var Tooltip_1 = require("@mui/material/Tooltip");
require("./Recipes.scss");
var AddCircleOutline_1 = require("@mui/icons-material/AddCircleOutline");
var react_router_dom_1 = require("react-router-dom");
function Recipes() {
    return (React.createElement("div", { className: "recipes" },
        React.createElement("h2", { className: 'title1' }, "Recipes"),
        React.createElement("div", { className: 'add' },
            React.createElement(Tooltip_1["default"], { title: 'add new recipe' },
                React.createElement(react_router_dom_1.Link, { to: '/NewRecipe' },
                    React.createElement(AddCircleOutline_1["default"], { sx: { fontSize: 40, color: '#b5739d' } })))),
        React.createElement("div", { className: "item" },
            React.createElement("div", { className: 'itemImg' },
                React.createElement("img", { src: _1_jpg_1["default"], alt: "" })),
            React.createElement("div", { className: 'title' },
                React.createElement("p", null, "recipe 1"))),
        React.createElement("div", { className: "item" },
            React.createElement("div", { className: 'itemImg' },
                React.createElement("img", { src: _2_jpg_1["default"], alt: "" })),
            React.createElement("div", { className: 'title' },
                React.createElement("p", null, "recipe 2"))),
        React.createElement("div", { className: "item" },
            React.createElement("div", { className: 'itemImg' },
                React.createElement("img", { src: _3_jpg_1["default"], alt: "" })),
            React.createElement("div", { className: 'title' },
                React.createElement("p", null, "recipe 3"))),
        React.createElement("div", { className: "item" },
            React.createElement("div", { className: 'itemImg' },
                React.createElement("img", { src: _4_jpg_1["default"], alt: "" })),
            React.createElement("div", { className: 'title' },
                React.createElement("p", null, "recipe 4"))),
        React.createElement("div", { className: "item" },
            React.createElement("div", { className: 'itemImg' },
                React.createElement("img", { src: _5_jpg_1["default"], alt: "" })),
            React.createElement("div", { className: 'title' },
                React.createElement("p", null, "recipe 5")))));
}
exports["default"] = Recipes;
