"use strict";
exports.__esModule = true;
require("./RecipeInfo.scss");
var AutoAwesome_1 = require("@mui/icons-material/AutoAwesome");
var menu_1 = require("../../components/menuBar/menu");
var background_jpg_1 = require("../../images/background.jpg");
var _1_jpg_1 = require("../../images/1.jpg");
var FavoriteBorder_1 = require("@mui/icons-material/FavoriteBorder");
var AccessTime_1 = require("@mui/icons-material/AccessTime");
var People_1 = require("@mui/icons-material/People");
var LocalFireDepartment_1 = require("@mui/icons-material/LocalFireDepartment");
var react_1 = require("react");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var Tooltip_1 = require("@mui/material/Tooltip");
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
function RecipeInfo(props) {
    var name = props.name, img = props.img, time = props.time, people = props.people, cal = props.cal, ingredients = props.ingredients, method = props.method;
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
                React.createElement(Tooltip_1["default"], { title: 'edit recipe' },
                    React.createElement(AutoAwesome_1["default"], { sx: {
                            color: '#b5739d', fontSize: 35, float: 'right',
                            paddingRight: '15px', paddingTop: '15px'
                        } })),
                React.createElement("form", { className: 'box' },
                    React.createElement("h1", null, "Recipe's Name"),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("div", { className: 'info1' },
                        React.createElement("div", { className: 'insertPhotos' },
                            React.createElement("img", { src: _1_jpg_1["default"], alt: "" })),
                        React.createElement("h2", { className: 'by' }, "By : Dima Abbas"),
                        React.createElement("div", { className: 'item' },
                            React.createElement(FavoriteBorder_1["default"], { onClick: handleLike, sx: { fontSize: 30, color: '#b5739d', paddingTop: '10px' } }),
                            React.createElement("p", null, like)),
                        React.createElement("div", { className: 'item' },
                            React.createElement(AccessTime_1["default"], { sx: { fontSize: 30, color: '#b5739d', paddingTop: '10px' } }),
                            React.createElement("p", null, "1 hour")),
                        React.createElement("div", { className: 'item' },
                            React.createElement(People_1["default"], { sx: { fontSize: 30, color: '#b5739d', paddingTop: '10px' } }),
                            React.createElement("p", null, "10 peoples")),
                        React.createElement("div", { className: 'item' },
                            React.createElement(LocalFireDepartment_1["default"], { sx: { fontSize: 30, color: '#b5739d', paddingTop: '10px' } }),
                            React.createElement("p", null, "1000 calories"))),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("div", { className: 'info2' },
                        React.createElement(Standard, { className: 'ingredients', id: "outlined-multiline-static", label: "Recipe's ingredients", placeholder: "Write your recipe ingredients here", multiline: true, rows: 20, maxRows: 50 }),
                        React.createElement(Standard, { className: 'steps', id: "outlined-multiline-static", label: "The Method", placeholder: "Write here the steps for preparing the recipe", multiline: true, rows: 20, maxRows: 50 })))))));
}
exports["default"] = RecipeInfo;
