"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Card(prop) {
    var _a = prop.info, name = _a.name, place = _a.place, img = _a.img;
    var setGeneralCounter = prop.setGeneralCounter, genralCounter = prop.genralCounter;
    //state
    var _b = react_1.useState(0), counter = _b[0], setCounter = _b[1]; // useState(initial value);
    var _c = react_1.useState({ x: 0, y: 0 }), mousePosition = _c[0], setMousePosition = _c[1];
    var counter2 = 0;
    function handleAddCounter() {
        var tempCounter = counter;
        console.log("before:", tempCounter);
        tempCounter++;
        setCounter(tempCounter);
        // if(setGeneralCounter) setGeneralCounter(tempCounter);
        if (setGeneralCounter)
            setGeneralCounter(genralCounter + 1);
        console.log("after:", tempCounter);
    }
    function handleAddCounter2() {
        counter2++;
        console.log(counter2);
    }
    function handleMouseOver(ev) {
        // console.log(ev)
        try {
            // console.log(ev.pageX, ev.pageY);
            if (ev.pageX && ev.pageY) {
                setMousePosition({ x: ev.pageX, y: ev.pageY });
            }
        }
        catch (err) {
            console.error(err);
        }
    }
    function handelRightClick(ev) {
        try {
            console.log(ev.type);
        }
        catch (error) {
            console.error(error);
        }
    }
    function handleInput(ev) {
        try {
            console.log(ev.target.value);
        }
        catch (error) {
            console.error(error);
        }
    }
    return (React.createElement("div", { className: "card", onMouseOver: handleMouseOver, onContextMenu: handelRightClick },
        React.createElement("img", { src: img, alt: place }),
        React.createElement("h3", { style: { backgroundColor: "red" } }, name),
        React.createElement("p", null,
            React.createElement("span", null,
                "X: ",
                mousePosition.x),
            React.createElement("span", null,
                "; Y: ",
                mousePosition.y)),
        React.createElement("p", null,
            "Lives in: ",
            place),
        React.createElement("button", { onClick: handleAddCounter }, counter),
        React.createElement("button", { onClick: handleAddCounter2 },
            "Counter2: ",
            counter2),
        React.createElement("input", { type: "text", id: 'someId', onKeyUp: handleInput })));
}
exports["default"] = Card;
