"use strict";
exports.__esModule = true;
var react_1 = require("react");
// import ReactDOM from 'react-dom';
require("./index.scss");
// import App from './App';
var reportWebVitals_1 = require("./reportWebVitals");
var react_dom_1 = require("react-dom");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("./App");
var Expenses_1 = require("./view/pages/expenses/Expenses");
var Invoices_1 = require("./view/pages/Invoices/Invoices");
var homepage_1 = require("./view/pages/homepage/homepage");
var signin_1 = require("./view/pages/signIn/signin");
var signup_1 = require("./view/pages/signUp/signup");
var trainers_1 = require("./view/pages/trainers/trainers");
var horses_1 = require("./view/pages/horses/horses");
var courses_1 = require("./view/pages/courses/courses");
var course_1 = require("./view/pages/course/course");
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1["default"]();
var rootElement = document.getElementById("root");
react_dom_1.render(react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
    react_1["default"].createElement(react_router_dom_1.Routes, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(App_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "expenses", element: react_1["default"].createElement(Expenses_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "invoices", element: react_1["default"].createElement(Invoices_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "courses", element: react_1["default"].createElement(courses_1["default"], null) },
            react_1["default"].createElement(react_router_dom_1.Route, { path: ":courseId", element: react_1["default"].createElement(course_1["default"], null) })),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "homepage", element: react_1["default"].createElement(homepage_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "signIn", element: react_1["default"].createElement(signin_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "signUp", element: react_1["default"].createElement(signup_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "trainers", element: react_1["default"].createElement(trainers_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "horses", element: react_1["default"].createElement(horses_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "courses", element: react_1["default"].createElement(courses_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "course/:courseId", element: react_1["default"].createElement(course_1["default"], null) }))), 
// document.getElementById("root")
rootElement);
