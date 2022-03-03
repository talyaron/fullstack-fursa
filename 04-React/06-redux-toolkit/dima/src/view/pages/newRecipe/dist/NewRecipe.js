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
var react_router_dom_1 = require("react-router-dom");
var Tooltip_1 = require("@mui/material/Tooltip");
var axios_1 = require("axios");
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
        fontSize: 15
    }
});
function NewRecipe() {
    var _a = react_1.useState({}), recipe = _a[0], setRecipe = _a[1];
    var _b = react_1.useState('/RecipeInfo'), linkTo = _b[0], setLink = _b[1];
    var _c = react_1.useState(''), from_ = _c[0], setFrom = _c[1];
    react_1.useEffect(function () {
        axios_1["default"].get('http://localhost:3004/edit/1').then(function (res) {
            console.log(res.data);
            var data = res.data.recipe;
            var new_ = res.data["new"];
            var f = res.data.from;
            console.log(new_);
            setRecipe(data);
            setFrom(f);
            if (!new_)
                setLink('/RecipeInfo');
            else {
                console.log("yes");
                setLink('/User');
            }
        });
        axios_1["default"]["delete"]('http://localhost:3004/edit/1');
    }, []);
    function handleChange(ev) {
        console.dir(recipe);
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
                setRecipe(__assign(__assign({}, recipe), { calories: ev.target.value }));
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
        var newRecipe = recipe;
        setRecipe(newRecipe);
        if (linkTo === '/User')
            axios_1["default"].post('http://localhost:3004/' + ("" + from_), recipe);
        else {
            console.log(recipe);
            console.log(from_);
            axios_1["default"].post('http://localhost:3004/selected', { recipe: recipe, from: from_ });
            axios_1["default"].put('http://localhost:3004/' + ("" + from_) + '/' + ("" + recipe.id), recipe);
            //axios.post('http://localhost:3004/selected', {recipe, from: from_});
        }
    }
    return (React.createElement("div", { className: 'new' },
        React.createElement("div", { className: 'menu' },
            React.createElement(menu_1["default"], null)),
        React.createElement("div", { className: "content" },
            React.createElement("img", { className: 'image', src: background_jpg_1["default"] }),
            React.createElement("div", { className: 'boxInfo' },
                React.createElement("div", { className: "save" },
                    React.createElement(Tooltip_1["default"], { title: 'save' },
                        React.createElement(react_router_dom_1.Link, { to: linkTo },
                            React.createElement(BookmarkAdd_1["default"], { sx: {
                                    color: '#b5739d', fontSize: 35
                                }, onClick: handleSave })))),
                React.createElement(material_1.Box, { className: 'box', component: "form", sx: { '& .MuiTextField-root': { m: 1 } }, autoComplete: "off" },
                    React.createElement(Standard, { id: "standard-basic", variant: "standard", focused: true, placeholder: "Insert your recipe's name", size: "small", sx: { width: '30ch' }, 
                        //onKeyUp={handleUpdate}
                        name: 'recipeName', value: recipe.name, onChange: handleChange }),
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
                            React.createElement(Standard, { id: "standard-basic", variant: "standard", focused: true, placeholder: "", size: "small", sx: { width: '20ch' }, name: 'time', 
                                //onKeyUp={handleUpdate} 
                                value: recipe.time, onChange: handleChange })),
                        React.createElement("div", { className: 'item' },
                            React.createElement(People_1["default"], { sx: { fontSize: 30, color: '#b5739d', paddingTop: '10px' } }),
                            React.createElement(Standard, { id: "standard-basic", variant: "standard", focused: true, placeholder: "", size: "small", sx: { width: '20ch' }, name: 'people', 
                                //onKeyUp={handleUpdate} 
                                value: recipe.people, onChange: handleChange })),
                        React.createElement("div", { className: 'item' },
                            React.createElement(LocalFireDepartment_1["default"], { sx: { fontSize: 30, color: '#b5739d', paddingTop: '12px' } }),
                            React.createElement(Standard, { id: "standard-basic", variant: "standard", focused: true, placeholder: "", size: "small", sx: { width: '20ch' }, name: 'cal', 
                                //onKeyUp={handleUpdate}
                                value: recipe.calories, onChange: handleChange }))),
                    React.createElement("div", { className: 'info2' },
                        React.createElement(CssTextField, { className: 'ingredients', focused: true, id: "custom-css-outlined-input", label: "Recipe's ingredients", placeholder: "Write your recipe ingredients here", multiline: true, rows: 10, name: 'ingredients', 
                            //onKeyUp={handleUpdate}
                            value: recipe.ingredients, onChange: handleChange }),
                        React.createElement(CssTextField, { className: 'steps', focused: true, id: "custom-css-outlined-input", label: "The Method", placeholder: "Write here the steps for preparing the recipe", multiline: true, rows: 10, name: 'method', 
                            //onKeyUp={handleUpdate}
                            value: recipe.method, onChange: handleChange })))))));
}
exports["default"] = NewRecipe;
