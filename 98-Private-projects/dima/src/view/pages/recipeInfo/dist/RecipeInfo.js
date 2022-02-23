"use strict";
exports.__esModule = true;
require("./RecipeInfo.scss");
var AutoAwesome_1 = require("@mui/icons-material/AutoAwesome");
var menu_1 = require("../../components/menuBar/menu");
var background_jpg_1 = require("../../images/background.jpg");
var FavoriteBorder_1 = require("@mui/icons-material/FavoriteBorder");
var AccessTime_1 = require("@mui/icons-material/AccessTime");
var People_1 = require("@mui/icons-material/People");
var LocalFireDepartment_1 = require("@mui/icons-material/LocalFireDepartment");
var react_1 = require("react");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var Tooltip_1 = require("@mui/material/Tooltip");
var react_router_dom_1 = require("react-router-dom");
var axios_1 = require("axios");
var CssTextField = styles_1.styled(material_1.TextField)({
    '& label.Mui-focused': {
        color: '#b5739d'
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: '#b5739d'
        }
    },
    input: {
        color: "gray",
        fontSize: 15,
        readOnly: true
    }
});
function RecipeInfo() {
    var _a = react_1.useState({}), recipe = _a[0], setRecipe = _a[1];
    var _b = react_1.useState(0), like = _b[0], setLike = _b[1];
    var _c = react_1.useState(''), from_ = _c[0], setFrom = _c[1];
    function handleLike() {
        setLike(like + 1);
    }
    react_1.useEffect(function () {
        axios_1["default"].get('http://localhost:3004/selected/1').then(function (res) {
            console.log(res.data);
            var data = res.data.recipe;
            var f = res.data.from;
            setRecipe(data);
            setFrom(f);
        });
        axios_1["default"]["delete"]('http://localhost:3004/selected/1');
    }, []);
    console.log(from_);
    var editClick = function (recipe) {
        axios_1["default"].post('http://localhost:3004/edit', { recipe: recipe, "new": false, from: from_ });
    };
    return (React.createElement("div", { className: 'info' },
        React.createElement("div", { className: 'menu' },
            React.createElement(menu_1["default"], null)),
        React.createElement("div", { className: "content" },
            React.createElement("img", { className: 'image', src: background_jpg_1["default"] }),
            React.createElement("div", { className: 'boxInfo' },
                React.createElement("div", { className: "edit" },
                    React.createElement(Tooltip_1["default"], { title: 'edit recipe' },
                        React.createElement(react_router_dom_1.Link, { to: '/NewRecipe' },
                            React.createElement(AutoAwesome_1["default"], { sx: {
                                    color: '#b5739d', fontSize: 35
                                }, onClick: function () { return editClick(recipe); } })))),
                React.createElement("form", { className: 'box' },
                    React.createElement("h1", null, recipe.name),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("div", { className: 'info1' },
                        React.createElement("div", { className: 'insertPhotos' },
                            React.createElement("img", { src: recipe.image, alt: "" })),
                        React.createElement("h2", { className: 'by' }, "By : Dima Abbas"),
                        React.createElement("div", { className: 'item' },
                            React.createElement(FavoriteBorder_1["default"], { onClick: handleLike, sx: { fontSize: 30, color: '#b5739d', paddingTop: '10px' } }),
                            React.createElement("p", null, like)),
                        React.createElement("div", { className: 'item' },
                            React.createElement(AccessTime_1["default"], { sx: { fontSize: 30, color: '#b5739d', paddingTop: '10px' } }),
                            React.createElement("p", null, recipe.time)),
                        React.createElement("div", { className: 'item' },
                            React.createElement(People_1["default"], { sx: { fontSize: 30, color: '#b5739d', paddingTop: '10px' } }),
                            React.createElement("p", null, recipe.people)),
                        React.createElement("div", { className: 'item' },
                            React.createElement(LocalFireDepartment_1["default"], { sx: { fontSize: 30, color: '#b5739d', paddingTop: '10px' } }),
                            React.createElement("p", null, recipe.calories))),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("div", { className: 'info2' },
                        React.createElement(CssTextField, { className: 'ingredients', focused: true, id: "custom-css-outlined-input", label: "Recipe's ingredients", placeholder: "Write your recipe ingredients here", multiline: true, rows: 10, value: recipe.ingredients }),
                        React.createElement(CssTextField, { className: 'steps', focused: true, id: "custom-css-outlined-input", label: "The Method", placeholder: "Write here the steps for preparing the recipe", multiline: true, rows: 10, value: recipe.method })))))));
}
exports["default"] = RecipeInfo;
