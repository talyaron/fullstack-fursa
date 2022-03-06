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
var FavoriteBorder_1 = require("@mui/icons-material/FavoriteBorder");
var AccessTime_1 = require("@mui/icons-material/AccessTime");
var People_1 = require("@mui/icons-material/People");
var LocalFireDepartment_1 = require("@mui/icons-material/LocalFireDepartment");
var ArrowBackSharp_1 = require("@mui/icons-material/ArrowBackSharp");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Tooltip_1 = require("@mui/material/Tooltip");
var axios_1 = require("axios");
var hooks_1 = require("../../../app/hooks");
var itemSlice_1 = require("../../features/item/itemSlice");
var MyRecipes_1 = require("../../features/myRecipes/MyRecipes");
var NamePage_1 = require("../../features/pgaeName/NamePage");
var TopRecipes_1 = require("../../features/topRecipes/TopRecipes");
var RecentRecipes_1 = require("../../features/recentRecipes/RecentRecipes");
var MyRecipes_2 = require("../../features/myRecipes/MyRecipes");
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
    //Redux
    var dispatch = hooks_1.useAppDispatch();
    var recipe_ = hooks_1.useAppSelector(itemSlice_1.selectedRecipe);
    var from = hooks_1.useAppSelector(itemSlice_1.selectedFrom);
    var isNew = hooks_1.useAppSelector(itemSlice_1.selectedIsNew);
    var pageName = hooks_1.useAppSelector(NamePage_1.selectPage);
    var _a = react_1.useState(recipe_), recipe = _a[0], setRecipe = _a[1];
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var to = '';
    react_1.useEffect(function () {
        axios_1["default"].get('http://localhost:3004/select/1').then(function (data) {
            var recipe1 = data.data.recipe;
            var from_ = data.data.from;
            var isNew_ = data.data.isNew;
            if (!isNew_) {
                dispatch(itemSlice_1.getSelectAsync());
            }
        });
    }, []);
    if (from === 'myRecipe' && isNew)
        to = '/User';
    else
        to = '/RecipeInfo';
    function handleChange(ev) {
        //console.dir(recipe);
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
            case 'image':
                setRecipe(__assign(__assign({}, recipe), { image: ev.target.value }));
        }
        dispatch(itemSlice_1.updateRecipe(recipe));
    }
    function handleSave() {
        dispatch(itemSlice_1.updateRecipe(recipe));
        if (to === '/User') {
            axios_1["default"].post('http://localhost:3004/' + ("" + from), recipe_);
            dispatch(MyRecipes_1.addToMyRecipe(recipe_));
        }
        else {
            //add a action to udpate a recipe in the array
            axios_1["default"].put('http://localhost:3004/' + ("" + from) + '/' + ("" + recipe_.id), recipe);
            axios_1["default"].patch('http://localhost:3004/select/1', { recipe: recipe });
            dispatch(itemSlice_1.updateRecipe(recipe));
            if (from === 'top10')
                dispatch(TopRecipes_1.updateTopRecipes([recipe, recipe.id]));
            else if (from === 'recent')
                dispatch(RecentRecipes_1.updateRecent([recipe, recipe.id]));
            else
                dispatch(MyRecipes_2.updateMyRecipe([recipe, recipe.id]));
        }
    }
    function handleTo() {
        dispatch(NamePage_1.updateName('/NewRecipe'));
    }
    return (React.createElement("div", { className: 'new' },
        React.createElement("div", { className: 'menu' },
            React.createElement(menu_1["default"], null)),
        React.createElement("div", { className: "content" },
            React.createElement("img", { className: 'image', src: background_jpg_1["default"] }),
            React.createElement("div", { className: 'boxInfo' },
                React.createElement(react_router_dom_1.Link, { className: 'backTo', to: pageName },
                    React.createElement(ArrowBackSharp_1["default"], { sx: { color: '#b5739d', fontSize: 30 }, onClick: handleTo })),
                React.createElement(material_1.Box, { className: 'box', component: "form", sx: { '& .MuiTextField-root': { m: 1 } }, autoComplete: "off" },
                    React.createElement("div", { className: "save" },
                        React.createElement(Tooltip_1["default"], { title: 'save' },
                            React.createElement(react_router_dom_1.Link, { to: to },
                                React.createElement(BookmarkAdd_1["default"], { sx: {
                                        color: '#b5739d', fontSize: 35
                                    }, onClick: handleSave, type: "submit" })))),
                    React.createElement(Standard, { id: "standard-basic", variant: "standard", focused: true, placeholder: "Insert your recipe's name", size: "small", sx: { width: '30ch' }, 
                        //onKeyUp={handleUpdate}
                        name: 'recipeName', value: recipe.name, onChange: handleChange }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("div", { className: 'info1' },
                        React.createElement("div", { className: 'insertPhotos' },
                            React.createElement("input", { type: "text", placeholder: 'Upload Image by URL', name: 'image', value: undefined, onChange: handleChange })),
                        React.createElement("h2", { className: 'by' }, "By : Dima Abbas"),
                        React.createElement("div", { className: 'item' },
                            React.createElement(FavoriteBorder_1["default"], { sx: { fontSize: 40, color: '#b5739d', paddingTop: '10px' } }),
                            React.createElement("p", null, "0")),
                        React.createElement("div", { className: 'item' },
                            React.createElement(AccessTime_1["default"], { sx: { fontSize: 40, color: '#b5739d', paddingTop: '10px' } }),
                            React.createElement(Standard, { id: "standard-basic", variant: "standard", focused: true, placeholder: "", size: "small", sx: { width: '20ch' }, name: 'time', 
                                //onKeyUp={handleUpdate} 
                                value: recipe.time, onChange: handleChange })),
                        React.createElement("div", { className: 'item' },
                            React.createElement(People_1["default"], { sx: { fontSize: 40, color: '#b5739d', paddingTop: '10px' } }),
                            React.createElement(Standard, { id: "standard-basic", variant: "standard", focused: true, placeholder: "", size: "small", sx: { width: '20ch' }, name: 'people', 
                                //onKeyUp={handleUpdate} 
                                value: recipe.people, onChange: handleChange })),
                        React.createElement("div", { className: 'item' },
                            React.createElement(LocalFireDepartment_1["default"], { sx: { fontSize: 40, color: '#b5739d', paddingTop: '10px' } }),
                            React.createElement(Standard, { id: "standard-basic", variant: "standard", focused: true, placeholder: "", size: "small", sx: { width: '20ch' }, name: 'cal', 
                                //onKeyUp={handleUpdate}
                                value: recipe.calories, onChange: handleChange }))),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("div", { className: 'info2' },
                        React.createElement(CssTextField, { className: 'ingredients', focused: true, id: "custom-css-outlined-input", label: "Recipe's ingredients", placeholder: "Write your recipe ingredients here", multiline: true, rows: 10, name: 'ingredients', 
                            //onKeyUp={handleUpdate}
                            value: recipe.ingredients, onChange: handleChange }),
                        React.createElement(CssTextField, { className: 'steps', focused: true, id: "custom-css-outlined-input", label: "The Method", placeholder: "Write here the steps for preparing the recipe", multiline: true, rows: 10, name: 'method', 
                            //onKeyUp={handleUpdate}
                            value: recipe.method, onChange: handleChange })))))));
}
exports["default"] = NewRecipe;
