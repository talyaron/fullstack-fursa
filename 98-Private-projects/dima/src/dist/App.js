"use strict";
exports.__esModule = true;
exports.CssTextField = void 0;
var react_router_dom_1 = require("react-router-dom");
var LogIn_1 = require("./view/pages/logIn/LogIn");
var User_1 = require("./view/pages/user/User");
var SignUp_1 = require("./view/pages/signUp/SignUp");
var ResetPassword_1 = require("./view/pages/resetPassword/ResetPassword");
var MainScreen_1 = require("./view/pages/mainScreen/MainScreen");
var NewRecipe_1 = require("./view/pages/newRecipe/NewRecipe");
var RecipeInfo_1 = require("./view/pages/recipeInfo/RecipeInfo");
var styles_1 = require("@mui/material/styles");
var material_1 = require("@mui/material");
var react_1 = require("react");
exports.CssTextField = styles_1.styled(material_1.TextField)({
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
function App() {
    var _a = react_1.useState({}), recipe = _a[0], setRecipe = _a[1];
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(LogIn_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "User", element: React.createElement(User_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "SignUp", element: React.createElement(SignUp_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "ResetPassword", element: React.createElement(ResetPassword_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "MainScreen", element: React.createElement(MainScreen_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "NewRecipe", element: React.createElement(NewRecipe_1["default"], { recipe: recipe, setRecipe: setRecipe }) }),
            React.createElement(react_router_dom_1.Route, { path: "RecipeInfo", element: React.createElement(RecipeInfo_1["default"], { recipe: recipe, setRecipe: setRecipe }) }))));
}
exports["default"] = App;
