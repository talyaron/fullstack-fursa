"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
require("./NewRecipe.scss");
var menu_1 = require("../../components/menuBar/menu");
var BookmarkAdd_1 = require("@mui/icons-material/BookmarkAdd");
var background_jpg_1 = require("../../images/background.jpg");
var InsertPhoto_1 = require("@mui/icons-material/InsertPhoto");
var FavoriteBorder_1 = require("@mui/icons-material/FavoriteBorder");
var AccessTime_1 = require("@mui/icons-material/AccessTime");
var People_1 = require("@mui/icons-material/People");
var LocalFireDepartment_1 = require("@mui/icons-material/LocalFireDepartment");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var RecipeInfo_1 = require("../../pages/recipeInfo/RecipeInfo");
var Standard = styles_1.styled(material_1.TextField)({
    '& label.Mui-focused': {
        color: '#b5739d'
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#b5739d'
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#b5739d'
        },
        '&:hover fieldset': {
            borderColor: '#b5739d'
        },
        '&.Mui-focused fieldset': {
            borderColor: '#b5739d'
        }
    },
    input: {
        color: 'grey',
        fontSize: 15
    }
});
function NewRecipe() {
    var _a = react_1.useState({}), recipe = _a[0], setRecipe = _a[1];
    function handleUpdate(ev) {
        //console.dir(ev.target);
        switch (ev.target.name) {
            case 'recipeName':
                setRecipe(__assign(__assign({}, recipe), { name: ev.target.value }));
                break;
            case 'time':
                setRecipe(__assign(__assign({}, recipe), { time: ev.target.value }));
                break;
            case 'people':
                setRecipe(__assign(__assign({}, recipe), { people: ev.target.value }));
                break;
            case 'cal':
                setRecipe(__assign(__assign({}, recipe), { cal: ev.target.value }));
                break;
            case 'ingredients':
                setRecipe(__assign(__assign({}, recipe), { ingredients: ev.target.value }));
                break;
            case 'method':
                setRecipe(__assign(__assign({}, recipe), { method: ev.target.value }));
                break;
        }
    }
    function handleSave() {
        setRecipe(recipe);
        console.dir(recipe);
        console.dir(recipe.ingredients);
        React.createElement(RecipeInfo_1["default"], null);
    }
    return (React.createElement("div", { className: 'new' },
        React.createElement("div", { className: 'menu' },
            React.createElement(menu_1["default"], null)),
        React.createElement("div", { className: "content" },
            React.createElement("img", { className: 'image', src: background_jpg_1["default"] }),
            React.createElement("div", { className: 'boxInfo' },
                React.createElement(BookmarkAdd_1["default"], { sx: {
                        color: '#b5739d', fontSize: 35, float: 'right',
                        paddingRight: '15px', paddingTop: '15px'
                    }, onClick: handleSave }),
                React.createElement(material_1.Box, { className: 'box', component: "form", sx: { '& .MuiTextField-root': { m: 1 } }, autoComplete: "off" },
                    React.createElement(Standard, { id: "standard-basic", variant: "standard", focused: true, placeholder: "Insert your recipe's name", size: "small", sx: { width: '30ch' }, onKeyUp: handleUpdate, name: 'recipeName' }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("div", { className: 'info1' },
                        React.createElement("div", { className: 'insertPhotos' },
                            React.createElement(InsertPhoto_1["default"], { sx: { fontSize: 250, color: '#b5739d' } })),
                        React.createElement("h2", { className: 'by' }, "By : Dima Abbas"),
                        React.createElement("div", { className: 'item' },
                            React.createElement(FavoriteBorder_1["default"], { sx: { fontSize: 30, color: '#b5739d', paddingTop: '12px' } }),
                            React.createElement("p", null, "0")),
                        React.createElement("div", { className: 'item' },
                            React.createElement(AccessTime_1["default"], { sx: { fontSize: 30, color: '#b5739d', paddingTop: '12px' } }),
                            React.createElement(Standard, { id: "standard-basic", variant: "standard", focused: true, placeholder: "", size: "small", sx: { width: '20ch' }, name: 'time', onKeyUp: handleUpdate })),
                        React.createElement("div", { className: 'item' },
                            React.createElement(People_1["default"], { sx: { fontSize: 30, color: '#b5739d', paddingTop: '10px' } }),
                            React.createElement(Standard, { id: "standard-basic", variant: "standard", focused: true, placeholder: "", size: "small", sx: { width: '20ch' }, name: 'people', onKeyUp: handleUpdate })),
                        React.createElement("div", { className: 'item' },
                            React.createElement(LocalFireDepartment_1["default"], { sx: { fontSize: 30, color: '#b5739d', paddingTop: '12px' } }),
                            React.createElement(Standard, { id: "standard-basic", variant: "standard", focused: true, placeholder: "", size: "small", sx: { width: '20ch' }, name: 'cal', onKeyUp: handleUpdate }))),
                    React.createElement("div", { className: 'info2' },
                        React.createElement(Standard, { className: 'ingredients', id: "outlined-multiline-static", label: "Recipe's ingredients", placeholder: "Write your recipe ingredients here", multiline: true, rows: 10, name: 'ingredients', onKeyUp: handleUpdate }),
                        React.createElement(Standard, { className: 'steps', id: "outlined-multiline-static", label: "The Method", placeholder: "Write here the steps for preparing the recipe", multiline: true, rows: 10, name: 'method', onKeyUp: handleUpdate })))))));
}
exports["default"] = NewRecipe;
