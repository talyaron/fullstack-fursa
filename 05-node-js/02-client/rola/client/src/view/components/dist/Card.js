"use strict";
exports.__esModule = true;
require("../components/Card.scss");
// function Card(prob:Cardprob) {
//   return <div className="card"> 
//       <img src={prob.img}  />
//       <p> {prob.title} </p>
//   </div>;
// }
// export default Card;
var react_1 = require("react");
function Card(prop) {
    var _a = prop.info, name = _a.name, place = _a.place, img = _a.img;
    //state
    var _b = react_1.useState('yellow'), color = _b[0], setcolor = _b[1]; // useState(initial value);
    // let counter2 = 0;
    function handlcolor() {
        var letters = '0123456789ABCDEF';
        var newColor = '#';
        for (var i = 0; i < 6; i++) {
            newColor += letters[Math.floor(Math.random() * 16)];
        }
        setcolor(newColor);
    }
    // function handleAddCounter2(){
    //   counter2++;
    //   console.log(counter2)
    // }
    console.log(color);
    return (React.createElement("div", { className: "card" },
        React.createElement("h3", { style: { backgroundColor: 'red' } }),
        React.createElement("button", { onClick: handlcolor, style: { backgroundColor: color } }, " hello")));
}
exports["default"] = Card;
