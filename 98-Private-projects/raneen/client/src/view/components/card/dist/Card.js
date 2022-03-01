"use strict";
exports.__esModule = true;
var react_1 = require("react");
var hooks_1 = require("../../../app/hooks");
//import {update, getJokeAsync} from '../../../app/reducers/textSlice'; 
var bagSlice_1 = require("../../../app/reducers/bagSlice");
function Card(prop) {
    var count = hooks_1.useAppSelector(bagSlice_1.selectBag);
    var dispatch = hooks_1.useAppDispatch();
    var _a = prop.info, name = _a.name, price = _a.price, img = _a.img;
    var _b = react_1.useState('red'), color = _b[0], setColor = _b[1]; // useState(initial value);
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function handleAddCounter() {
        setColor(getRandomColor());
    }
    function handleAdd() {
        // alert("added to favourites")
    }
    return (React.createElement("div", { style: { backgroundColor: color }, className: "card", onClick: handleAddCounter },
        React.createElement("img", { src: img, alt: name }),
        React.createElement("h3", null, name),
        React.createElement("p", null,
            "Price: ",
            price),
        React.createElement("button", { className: "card_add", type: "button", onClick: function () { return dispatch(bagSlice_1.increment()); } }, "add to favourites")));
}
exports["default"] = Card;
