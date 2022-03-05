"use strict";
exports.__esModule = true;
var react_1 = require("react");
var __1 = require("..");
var react_redux_1 = require("react-redux");
function IceCreamContainer(props) {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h2", null,
            "number of icecream - ",
            props.numOfIceCream),
        react_1["default"].createElement("button", { onClick: props.buyIceCream }, "buy icecream")));
}
function mapStateToProps(state) {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    };
}
function mapDispatchToProps(dispatch) {
    return {
        buyIceCream: function () { return dispatch(__1.buyIceCream()); }
    };
}
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
