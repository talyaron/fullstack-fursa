"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Card(prop) {
    var _a = prop.info, name = _a.name, place = _a.place, img = _a.img;
    //state
    var _b = react_1.useState(0), counter = _b[0], setCounter = _b[1]; // useState(initial value);
    var counter2 = 0;
    function handleAddCounter() {
        var tempCounter = counter;
        console.log('before:', tempCounter);
        tempCounter++;
        setCounter(tempCounter);
        console.log('after:', tempCounter);
    }
    function handleAddCounter2() {
        counter2++;
        console.log(counter2);
    }
    return (react_1["default"].createElement("div", { className: "card" },
        react_1["default"].createElement("img", { src: img, alt: place }),
        react_1["default"].createElement("h3", { style: { backgroundColor: 'red' } }, name),
        react_1["default"].createElement("p", null,
            "Lives in: ",
            place),
        react_1["default"].createElement("button", { onClick: handleAddCounter }, counter),
        react_1["default"].createElement("button", { onClick: handleAddCounter2 },
            "Counter2: ",
            counter2)));
}
exports["default"] = Card;
