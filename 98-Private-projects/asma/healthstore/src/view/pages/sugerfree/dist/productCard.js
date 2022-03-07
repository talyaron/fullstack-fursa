"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./productCard.scss");
var treatmentSlice_1 = require("../../../features/treatment/treatmentSlice");
var hooks_1 = require("../../../app/hooks");
function ProductCard(props) {
    var name = props.name, img = props.img;
    var dispatch = hooks_1.useAppDispatch();
    function handleClick(ev) {
        var pic = ev.target.src;
        dispatch(treatmentSlice_1.select(pic));
    }
    return (react_1["default"].createElement("div", { className: "card" },
        react_1["default"].createElement("div", { className: "card__item" },
            react_1["default"].createElement("img", { src: img, onClick: handleClick }),
            react_1["default"].createElement("span", { className: "card__item__title" }, name))));
}
exports["default"] = ProductCard;
