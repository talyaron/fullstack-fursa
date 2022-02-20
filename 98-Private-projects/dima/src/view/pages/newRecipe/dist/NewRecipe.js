"use strict";
exports.__esModule = true;
require("./NewRecipe.scss");
var menu_1 = require("../../components/menuBar/menu");
var BookmarkAdd_1 = require("@mui/icons-material/BookmarkAdd");
var background_jpg_1 = require("../../background.jpg");
var InsertPhoto_1 = require("@mui/icons-material/InsertPhoto");
var FavoriteBorder_1 = require("@mui/icons-material/FavoriteBorder");
var AccessTime_1 = require("@mui/icons-material/AccessTime");
var People_1 = require("@mui/icons-material/People");
var LocalFireDepartment_1 = require("@mui/icons-material/LocalFireDepartment");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
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
    return (React.createElement("div", { className: 'new' },
        React.createElement("div", { className: 'menu' },
            React.createElement(menu_1["default"], null)),
        React.createElement("div", { className: "content" },
            React.createElement("img", { className: 'image', src: background_jpg_1["default"] }),
            React.createElement("div", { className: 'boxInfo' },
                React.createElement(BookmarkAdd_1["default"], { sx: {
                        color: '#b5739d', fontSize: 35, float: 'right',
                        paddingRight: '15px', paddingTop: '15px'
                    } }),
                React.createElement(material_1.Box, { className: 'box', component: "form", sx: { '& .MuiTextField-root': { m: 1 } }, autoComplete: "off" },
                    React.createElement(Standard, { id: "standard-basic", variant: "standard", focused: true, placeholder: "Insert your recipe's name", size: "small", sx: { width: '30ch' } }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("div", { className: 'info1' },
                        React.createElement("div", { className: 'insertPhotos' },
                            React.createElement(InsertPhoto_1["default"], { sx: { fontSize: 250, color: '#b5739d' } })),
                        React.createElement("h1", { className: 'by' }, "By : Dima Abbas"),
                        React.createElement("div", { className: 'item' },
                            React.createElement(FavoriteBorder_1["default"], { sx: { fontSize: 30, color: '#b5739d' } }),
                            React.createElement("p", null, "0")),
                        React.createElement("div", { className: 'item' },
                            React.createElement(AccessTime_1["default"], { sx: { fontSize: 30, color: '#b5739d' } }),
                            React.createElement(Standard, { id: "standard-basic", variant: "standard", focused: true, placeholder: "", size: "small", sx: { width: '20ch' } })),
                        React.createElement("div", { className: 'item' },
                            React.createElement(People_1["default"], { sx: { fontSize: 30, color: '#b5739d' } }),
                            React.createElement(Standard, { id: "standard-basic", variant: "standard", focused: true, placeholder: "", size: "small", sx: { width: '20ch' } })),
                        React.createElement("div", { className: 'item' },
                            React.createElement(LocalFireDepartment_1["default"], { sx: { fontSize: 30, color: '#b5739d' } }),
                            React.createElement(Standard, { id: "standard-basic", variant: "standard", focused: true, placeholder: "", size: "small", sx: { width: '20ch' } }))),
                    React.createElement("div", { className: 'info2' },
                        React.createElement(Standard, { className: 'ingredients', id: "outlined-multiline-static", label: "Recipe's ingredients", placeholder: "Write your recipe ingredients here", multiline: true, rows: 10, maxRows: 30 }),
                        React.createElement(Standard, { className: 'steps', id: "outlined-multiline-static", label: "The Method", placeholder: "Write here the steps for preparing the recipe", multiline: true, rows: 10, maxRows: 30 })))))));
}
exports["default"] = NewRecipe;
