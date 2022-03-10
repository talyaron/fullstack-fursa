"use strict";
exports.__esModule = true;
var hooks_1 = require("../../app/hooks");
var hooks_2 = require("../../app/hooks");
var picSlice_1 = require("./picSlice");
//import {update, getJokeAsync} from './textSlice'; 
//import {update} from './picSlice'; 
require("./PicturesShow.css");
//import {updateText,selectText} from './picSlice'; 
var picSlice_2 = require("./picSlice");
function PicturesShow() {
    var dispatch = hooks_1.useAppDispatch();
    //const text = useAppSelector(selectText);
    var products = hooks_2.useAppSelector(picSlice_2.selectProducts);
    function handleClick(ev) {
        /* const pic = ev.target.src;
         dispatch(update(pic));*/
        dispatch(picSlice_1.getProductsAsync());
        console.log(products);
    }
    return (React.createElement("div", { className: "pictures" },
        React.createElement("div", null,
            React.createElement("button", { onClick: handleClick }, "Click to get products!!")),
        products.map(function (product, index) {
            return React.createElement("div", { key: index },
                product.price,
                React.createElement("img", { src: product.image }));
        })));
}
exports["default"] = PicturesShow;
