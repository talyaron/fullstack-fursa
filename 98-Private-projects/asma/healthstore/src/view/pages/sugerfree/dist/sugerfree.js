"use strict";
exports.__esModule = true;
require("./sugerfree.scss");
var PicShow_1 = require("./PicShow");
var productCard_1 = require("./productCard");
function SugerFree() {
    return (React.createElement("div", { className: "freesuger" },
        React.createElement("h1", null, "Suger Free"),
        React.createElement("div", { className: 'freesuger__product' },
            React.createElement(productCard_1["default"], { name: "", img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F02%2Fsugarfreeproducts.jpg" }),
            React.createElement(productCard_1["default"], { name: "", img: "https://world.openfoodfacts.org/images/products/380/006/571/8592/front_en.3.400.jpg" }),
            React.createElement(productCard_1["default"], { name: "", img: "https://sibuchocolate.com/wp-content/uploads/2019/12/Sugar-Free-Chocolate.jpg" })),
        React.createElement(PicShow_1["default"], null)));
}
exports["default"] = SugerFree;
