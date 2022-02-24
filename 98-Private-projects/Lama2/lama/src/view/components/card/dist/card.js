"use strict";
// interface CardProp{
//     img:imag
//     title:string;
// }
exports.__esModule = true;
// interface CardProp {
//     title: string;
//     place:string;
//   }
require("./Card.scss");
function Card(prop) {
    var _a = prop.info, name = _a.name, age = _a.age, img = _a.img;
    return (React.createElement("div", { className: "card" },
        React.createElement("img", { src: img, alt: "" }),
        React.createElement("p", null,
            "name is :",
            name,
            " "),
        React.createElement("p", null,
            "age is: ",
            age))
    /* <div className="card">
    <h3>{prop.title}</h3>
    <p>Lives in: {prop.place}</p>
    </div> */
    );
}
exports["default"] = Card;
