"use strict";
// interface CardProp{
//     img:imag
//     title:string;
// }
exports.__esModule = true;
function Card(prop) {
    var _a = prop.info, name = _a.name, age = _a.age, img = _a.img;
    return (React.createElement("div", { className: "card" },
        React.createElement("img", { src: img, alt: "" }),
        React.createElement("div", null,
            React.createElement("h5", null,
                "name is :",
                name,
                " ")),
        React.createElement("div", null,
            React.createElement("h5", null,
                "age is: ",
                age)))
    /* <div className="card">
    <h3>{prop.title}</h3>
    <p>Lives in: {prop.place}</p>
    </div> */
    );
}
exports["default"] = Card;
