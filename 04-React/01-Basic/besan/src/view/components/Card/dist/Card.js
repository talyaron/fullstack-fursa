"use strict";
/*function card(){
    return (
        <div className="card">
            <h3> Card Title</h3>
            <p>This is a Card</p>
        </div>
    );
}*/
exports.__esModule = true;
var react_1 = require("react");
;
function Card(prop) {
    var _a = react_1.useState(0), counter = _a[0], setCounter = _a[1];
    var _b = react_1.useState('blue'), color = _b[0], setColor = _b[1];
    function handleCounter(event) {
        setCounter(counter + 1);
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        var newColor = "#" + randomColor;
        setColor(newColor);
    }
    return (React.createElement("div", { className: "card" },
        React.createElement("img", { src: prop.img, alt: prop.HrbMed }),
        React.createElement("h3", null,
            " ",
            prop.HrbMed),
        React.createElement("p", null,
            " Treats ",
            prop.name,
            ", Price is ",
            prop.Price,
            "$"),
        React.createElement("button", { style: { backgroundColor: color }, onClick: handleCounter }, " add to Cart "),
        React.createElement("div", { style: { backgroundColor: color } }, counter)));
}
exports["default"] = Card;
