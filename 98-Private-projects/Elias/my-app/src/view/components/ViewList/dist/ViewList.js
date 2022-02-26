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
var hooks_1 = require("../../../app/hooks");
var NavTextReducer_1 = require("../../../app/reducer/NavTextReducer");
function ViewList() {
    var listContent = [
        {
            catInlListName: "Essentials",
            incatList: [{ name: "Passport", quantity: 1 }, { name: "Mobile", quantity: 1 }, { name: "Wallet", quantity: 1 }, { name: "Coins", quantity: 1 }]
        },
        {
            catInlListName: "Clothes",
            incatList: [{ name: "Shirt", quantity: 6 }, { name: "Pants", quantity: 3 }, { name: "Underwear", quantity: 6 }]
        },
        {
            catInlListName: "Care",
            incatList: [{ name: "Conditioner", quantity: 1 }, { name: "Shampoo", quantity: 1 }, { name: "soap", quantity: 1 }, { name: "Tooth paser & brush", quantity: 1 }]
        },
        {
            catInlListName: "Accessories",
            incatList: [{ name: "Shoes", quantity: 1 }, { name: "Phone charger", quantity: 1 }, { name: "Earphones", quantity: 1 }, { name: "Cat cage", quantity: 1 }]
        }
    ];
    var _a = react_1.useState(false), showResults = _a[0], setShowResults = _a[1];
    var nav = react_router_dom_1.useNavigate();
    var state = react_router_dom_1.useLocation().state;
    var dispatch = hooks_1.useAppDispatch();
    react_1.useEffect(function () {
        dispatch(NavTextReducer_1.changeNavText("NYC,oct 6th 2021,Trolly"));
    }, [dispatch]);
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
            return (React.createElement(Collapsible, { key: index, catInlListName: element.catInlListName, incatList: element.incatList }));
        })),
        React.createElement("div", { className: 'congratMsgt' },
            React.createElement("h1", null, "Congrats!"),
            React.createElement("p", null, "to save/edit, plase sign up ")),
        React.createElement("button", { className: 'signUpbtn', onClick: clickSignup }, " Free Sign up to save & edit"),
        React.createElement("div", null, showResults ? React.createElement(Results, null) : null)));
}
function Collapsible(props) {
    var catInlListName = props.catInlListName, incatList = props.incatList;
    var _a = react_1.useState(false), isExpanded = _a[0], setExpanded = _a[1];
    var _b = react_1.useState('▲' + catInlListName), catTitle = _b[0], setEcatTitle = _b[1];
    var _c = react_collapsed_1["default"]({ isExpanded: isExpanded }), getCollapseProps = _c.getCollapseProps, getToggleProps = _c.getToggleProps;
    function handleOnClick() {
        setExpanded(!isExpanded);
        if (isExpanded) {
            setEcatTitle('▲' + catInlListName);
        }
        else {
            setEcatTitle('▼' + catInlListName);
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
