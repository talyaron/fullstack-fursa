"use strict";
exports.__esModule = true;
require("../card/Card.scss");
var react_1 = require("react");
function Card(prop) {
    var _a = react_1.useState(0), counter = _a[0], setCounter = _a[1]; // useState(initial value);
    function handleAddCounter() {
        var tempCounter = counter;
        tempCounter++;
        if (tempCounter == 1)
            prop.setproductsCart.push(prop);
        if (tempCounter >= 7)
            tempCounter = 7;
        setCounter(tempCounter);
    }
    function handleRemveCounter() {
        var tempCounter = counter;
        tempCounter--;
        if (tempCounter < 0) {
            tempCounter = 0;
        }
        setCounter(tempCounter);
    }
    var id = prop.id, name = prop.name, price = prop.price, quantity = prop.quantity, description = prop.description, Url = prop.Url, productsCart = prop.productsCart, setproductsCart = prop.setproductsCart;
    var _b = react_1.useState('red'), color = _b[0], setColor = _b[1];
    var _c = react_1.useState('hi , alaa wants to write me'), mytext = _c[0], setmytext = _c[1];
    function moveInput(e) {
        try {
            setmytext(e.target.value);
        }
        catch (error) {
            console.error(error);
        }
    }
    return (React.createElement("div", { className: "card", style: { backgroundColor: color } },
        React.createElement("img", { src: Url, alt: "" }),
        React.createElement("h3", null, name),
        React.createElement("p", null,
            "Price : ",
            price),
        React.createElement("p", null,
            React.createElement("button", { onClick: handleRemveCounter }, "-"),
            "  ",
            counter,
            " ",
            React.createElement("button", { onClick: handleAddCounter }, "+"),
            " ")));
}
exports["default"] = Card;
