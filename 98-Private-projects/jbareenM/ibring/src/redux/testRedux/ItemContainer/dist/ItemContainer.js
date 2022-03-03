"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var __1 = require("..");
function ItemContainer(props) {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h2", null,
            "Item - ",
            props.item),
        react_1["default"].createElement("button", { onClick: props.buyItem }, "buy Item")));
}
function mapStateToProps(state, ownProps) {
    var itemState = ownProps.cake
        ? state.cake.numOfCakes
        : state.iceCream.numOfIceCream;
    return {
        item: itemState
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    var dispatchFunction = ownProps.cake
        ? function () { return dispatch(__1.buyCake()); }
        : function () { return dispatch(__1.buyIceCream()); };
    return {
        buyItem: dispatchFunction
    };
}
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
