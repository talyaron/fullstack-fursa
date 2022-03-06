"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Card(prop) {
    return (React.createElement("div", { className: "card" },
        React.createElement("h3", null, prop.title),
        React.createElement("p", null,
            "Lives in: ",
            prop.place)));
}
function MyCard(prop) {
    var _a = react_1.useState('Suzan'), randomName = _a[0], setRandomName = _a[1];
    var _b = react_1.useState('white'), randomColor = _b[0], setRandomColor = _b[1];
    var names = ['Suzan1', 'Mona1', 'Tal1', 'Suzan2', 'Mona2', 'Tal2'];
    var _c = react_1.useState(''), text = _c[0], setText = _c[1];
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function handleClick() {
        setRandomName(names[Math.floor(Math.random() * names.length)]);
        setRandomColor(getRandomColor());
    }
    function handleText(ev) {
        setText(ev.target.value);
    }
    var _d = prop.info, image = _d.image, title = _d.title;
    return (React.createElement("div", { className: "myCard", style: { backgroundColor: randomColor } },
        React.createElement("img", { src: image, alt: "" }),
        React.createElement("h5", null, title),
        React.createElement("button", { onClick: handleClick }, randomName),
        React.createElement("p", { className: "input" }, text),
        React.createElement("input", { type: "text", onKeyUp: handleText })));
}
exports["default"] = MyCard;
