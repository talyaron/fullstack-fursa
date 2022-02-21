"use strict";
exports.__esModule = true;
require("./RecipeInfo.scss");
var AutoAwesome_1 = require("@mui/icons-material/AutoAwesome");
var menu_1 = require("../../components/menuBar/menu");
var background_jpg_1 = require("../../images/background.jpg");
var img1_png_1 = require("../../images/img1.png");
var FavoriteBorder_1 = require("@mui/icons-material/FavoriteBorder");
var AccessTime_1 = require("@mui/icons-material/AccessTime");
var People_1 = require("@mui/icons-material/People");
var LocalFireDepartment_1 = require("@mui/icons-material/LocalFireDepartment");
var react_1 = require("react");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var Tooltip_1 = require("@mui/material/Tooltip");
var react_router_dom_1 = require("react-router-dom");
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
        fontSize: 15,
        readonly: true
    }
});
// interface recipeInfo{
//     name? : any|undefined;
//     img? : string;
//     time? : string;
//     people? : string;
//     cal? : string;
//     ingredients? : string;
//     method? : string;
// }
function RecipeInfo(props) {
    var recipe = props.recipe, setRecipe = props.setRecipe;
    var _a = react_1.useState(0), like = _a[0], setLike = _a[1];
    function handleLike() {
        setLike(like + 1);
    }
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
                                } })))),
                React.createElement("form", { className: 'box' },
                    React.createElement("h1", null, recipe.name),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("div", { className: 'info1' },
                        React.createElement("div", { className: 'insertPhotos' },
                            React.createElement("img", { src: img1_png_1["default"], alt: "" })),
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
                            React.createElement("p", null, recipe.cal))),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("div", { className: 'info2' },
                        React.createElement(Standard, { className: 'ingredients', id: "outlined-multiline-static", label: "Recipe's ingredients", placeholder: "Write your recipe ingredients here", multiline: true, rows: 20, value: recipe.ingredients }),
                        React.createElement(Standard, { className: 'steps', id: "outlined-multiline-static", label: "The Method", placeholder: "Write here the steps for preparing the recipe", multiline: true, rows: 20, value: recipe.method })))))));
}
exports["default"] = RecipeInfo;
