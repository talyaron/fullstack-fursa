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
var Store_1 = require("./view/pages/store/Store");
var Product_1 = require("./view/pages/product/Product");
var index_1 = require("./view/pages/homepage/index");
var index_2 = require("./view/pages/signIn/index");
var index_3 = require("./view/pages/signUp/index");
var trainers_1 = require("./view/pages/trainers/trainers");
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
        react_1["default"].createElement(react_router_dom_1.Route, { path: "store", element: react_1["default"].createElement(Store_1["default"], null) },
            react_1["default"].createElement(react_router_dom_1.Route, { path: ":productId", element: react_1["default"].createElement(Product_1["default"], null) })),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "homepage", element: react_1["default"].createElement(index_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "signIn", element: react_1["default"].createElement(index_2["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "signUp", element: react_1["default"].createElement(index_3["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "trainers", element: react_1["default"].createElement(trainers_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "product/:productId", element: react_1["default"].createElement(Product_1["default"], null) }))), 
// document.getElementById("root")
rootElement);
