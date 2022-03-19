"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.css");
var store_1 = require("./app/store");
var react_redux_1 = require("react-redux");
var serviceWorker = require("./serviceWorker");
var react_router_dom_1 = require("react-router-dom");
var Header_1 = require("./view/components/Header");
var SignUp_1 = require("./view/components/SignUp");
var Gmail_1 = require("./view/components/Gmail");
var Facebook_1 = require("./view/components/Facebook");
var NewAccount_1 = require("./view/components/NewAccount");
var Gender_1 = require("./view/components/Gender");
var MainGoal_1 = require("./view/components/MainGoal");
var Activities_1 = require("./view/components/Activities");
var Name_1 = require("./view/components/Name");
var Age_1 = require("./view/components/Age");
var Height_1 = require("./view/components/Height");
var Weight_1 = require("./view/components/Weight");
var PersonalPlan_1 = require("./view/components/PersonalPlan");
var SingleWorkout_1 = require("./view/components/SingleWorkout");
var EmptyPlan_1 = require("./view/components/EmptyPlan");
var Food_1 = require("./view/components/Food");
var Profile_1 = require("./view/components/Profile");
var Plandecider_1 = require("./view/components/Plandecider");
var Music_1 = require("./view/components/Music");
var Exercises_1 = require("./view/components/Exercises");
var Duration_1 = require("./view/components/Duration");
var Store_tsx_1 = require("./view/Store/Store.tsx");
var cart_tsx_1 = require("./view/cart/cart.tsx");
var MyPlans_1 = require("./view/components/MyPlans");
react_dom_1["default"].render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_redux_1.Provider, { store: store_1.store },
        react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
            react_1["default"].createElement(react_router_dom_1.Routes, null,
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/cart", element: react_1["default"].createElement(cart_tsx_1["default"], { cartItems: cartItems, setcartItems: setcartItems }) }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/store", element: react_1["default"].createElement(Store_tsx_1["default"], { cartItems: cartItems, setcartItems: setcartItems }) }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/music", element: react_1["default"].createElement(Music_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/exercises", element: react_1["default"].createElement(Exercises_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/duration", element: react_1["default"].createElement(Duration_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/plandecider", element: react_1["default"].createElement(Plandecider_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/food", element: react_1["default"].createElement(Food_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/profile", element: react_1["default"].createElement(Profile_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/plangenerator", element: react_1["default"].createElement(MyPlans_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/emptyPlan", element: react_1["default"].createElement(EmptyPlan_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/singleworkout", element: react_1["default"].createElement(SingleWorkout_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/personalplan", element: react_1["default"].createElement(PersonalPlan_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/weight", element: react_1["default"].createElement(Weight_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/height", element: react_1["default"].createElement(Height_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/age", element: react_1["default"].createElement(Age_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/name", element: react_1["default"].createElement(Name_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/activity", element: react_1["default"].createElement(Activities_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/goal", element: react_1["default"].createElement(MainGoal_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/gender", element: react_1["default"].createElement(Gender_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/newAccount", element: react_1["default"].createElement(NewAccount_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/facebook", element: react_1["default"].createElement(Facebook_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/gmail", element: react_1["default"].createElement(Gmail_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/", element: react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(Header_1["default"], null),
                        react_1["default"].createElement(SignUp_1["default"], null)) }))))), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
