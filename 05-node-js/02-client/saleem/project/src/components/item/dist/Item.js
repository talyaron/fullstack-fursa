"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Item(prop) {
    return (react_1["default"].createElement("div", { key: prop.id, className: "col-12 col-sm-12 col-md-4 col-lg-4 pb-2 pt-2" },
        react_1["default"].createElement("div", { className: "card", style: { width: "18rem" } },
            react_1["default"].createElement("img", { src: "https://picsum.photos/seed/450/300", className: "card-img-top", alt: "cartItem" }),
            react_1["default"].createElement("div", { className: "card-body" },
                react_1["default"].createElement("h5", { className: "card-title" }, prop.title),
                react_1["default"].createElement("p", { className: "card-text" },
                    prop.price,
                    "$"),
                prop.incart === false ?
                    react_1["default"].createElement("button", { className: "btn btn-dark", "data-id": prop.index, onClick: function (event) { return prop.add(event); } }, "Add to Cart")
                    :
                        react_1["default"].createElement("button", { className: "btn btn-danger", "data-id": prop.index, onClick: function (event) { return prop.remove(event); } }, "Remove from cart")))));
}
exports["default"] = Item;
