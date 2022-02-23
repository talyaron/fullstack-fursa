"use strict";
exports.__esModule = true;
var Tooltip_1 = require("@mui/material/Tooltip");
require("./Recipes.scss");
var AddCircleOutline_1 = require("@mui/icons-material/AddCircleOutline");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var axios_1 = require("axios");
function Recipes() {
    var _a = react_1.useState([]), recipes = _a[0], setRecipes = _a[1];
    react_1.useEffect(function () {
        axios_1["default"].get('http://localhost:3004/recipe').then(function (res) {
            var data = res.data;
            setRecipes(data);
        });
    }, []);
    console.log(recipes);
    var imageClick = function (recipe) {
        axios_1["default"].post('http://localhost:3004/selected', { recipe: recipe, from: 'recipe' });
    };
    var addClick = function () {
        axios_1["default"].post('http://localhost:3004/edit', { recipe: {}, "new": true, from: 'recipe' });
    };
    return (React.createElement("div", { className: "recipes" },
        React.createElement("h2", { className: 'title1' }, "Recipes"),
        React.createElement("div", { className: 'add' },
            React.createElement(Tooltip_1["default"], { title: 'add new recipe' },
                React.createElement(react_router_dom_1.Link, { to: '/NewRecipe' },
                    React.createElement(AddCircleOutline_1["default"], { sx: { fontSize: 40, color: '#b5739d' }, onClick: function () { return addClick(); } })))),
        recipes.map(function (recipe, index) {
            return (React.createElement("div", { key: index, className: "item" },
                React.createElement(react_router_dom_1.Link, { to: '/RecipeInfo' },
                    React.createElement("div", { className: 'itemImg' },
                        React.createElement("img", { src: recipe.image, alt: "", onClick: function () { return imageClick(recipe); } }))),
                React.createElement("div", { className: 'title' },
                    React.createElement("p", null, recipe.name))));
        })));
}
exports["default"] = Recipes;
