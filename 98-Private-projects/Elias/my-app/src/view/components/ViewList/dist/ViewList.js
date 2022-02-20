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
require("./ViewList.scss");
var react_1 = require("react");
var react_collapsed_1 = require("react-collapsed");
var react_router_dom_1 = require("react-router-dom");
function ViewList() {
    var listContent = [{ catInlList: "Essentials" }, { catInlList: "Clothes" }, { catInlList: "Care" }, { catInlList: "Accessories" }];
    var _a = react_1.useState(false), showResults = _a[0], setShowResults = _a[1];
    var nav = react_router_dom_1.useNavigate();
    var state = react_router_dom_1.useLocation().state;
    function clickSignup(e) {
        setShowResults(true);
        nav('/Signup', {
            state: state
        });
    }
    var Results = function () { return (React.createElement("div", { id: "results", className: "search-results" },
        React.createElement("h2", null, "Travel is the only thing you buy that makes you richer"))); };
    return (React.createElement("div", { className: "wrapper " },
        React.createElement("div", { className: "date" }, "NYC,oct 6th 2021,Trolly"),
        React.createElement("div", { className: "listheader" }, listContent.map(function (element, index) {
            return (React.createElement(Collapsible, { key: index, catInlList: element.catInlList }));
        })),
        React.createElement("div", { className: 'congratMsgt' },
            React.createElement("h1", null, "Congrats!"),
            React.createElement("p", null, "to save/edit, plase sign up ")),
        React.createElement("button", { className: 'signUpbtn', onClick: clickSignup }, " Free Sign up to save & edit"),
        React.createElement("div", null, showResults ? React.createElement(Results, null) : null)));
}
function Collapsible(props) {
    var catInlList = props.catInlList;
    var _a = react_1.useState(false), isExpanded = _a[0], setExpanded = _a[1];
    var _b = react_1.useState('▲' + catInlList), catTitle = _b[0], setEcatTitle = _b[1];
    var _c = react_collapsed_1["default"]({ isExpanded: isExpanded }), getCollapseProps = _c.getCollapseProps, getToggleProps = _c.getToggleProps;
    function handleOnClick() {
        setExpanded(!isExpanded);
        if (isExpanded) {
            setEcatTitle('▲' + catInlList);
        }
        else {
            setEcatTitle('▼' + catInlList);
        }
    }
    return (React.createElement("div", { className: "collapsible" },
        React.createElement("div", __assign({ className: "header" }, getToggleProps({ onClick: handleOnClick })), catTitle),
        React.createElement("div", __assign({}, getCollapseProps()),
            React.createElement("div", { className: "content" },
                "Now you can see the hidden content. ",
                React.createElement("br", null),
                React.createElement("br", null),
                "Click again to hide..."))));
}
exports["default"] = ViewList;
