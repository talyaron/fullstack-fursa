"use strict";
exports.__esModule = true;
var react_1 = require("react");
var restaurantCard_1 = require("../../components/restaurantCard/restaurantCard");
var search_1 = require("../../components/search/search");
var menu_1 = require("../../components/menu/menu");
var footer_1 = require("../../components/footer/footer");
var location_svg_1 = require("./location.svg");
require("./explore.scss");
function Explore() {
    var _a = react_1.useState([{ id: 0, name: "", image: "", booking: 0 }]), famousRestaurants = _a[0], setFamousRestaurant = _a[1];
    react_1.useEffect(function () {
        fetch('/get-famous-restaurants')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            setFamousRestaurant(data);
        })["catch"](function (err) {
            console.log(err);
        });
    }, []);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(menu_1["default"], null),
        react_1["default"].createElement(search_1["default"], null),
        react_1["default"].createElement("div", { className: "exploremain" },
            react_1["default"].createElement("div", { className: "exploremain__location" },
                react_1["default"].createElement("h5", null, "It looks like you're in Israel. Not Correct?"),
                react_1["default"].createElement("div", { className: "exploremain__location__get" },
                    react_1["default"].createElement("img", { src: location_svg_1["default"] }),
                    react_1["default"].createElement("h5", null, "Get current location"))),
            react_1["default"].createElement("div", { className: "exploremain__popular" },
                react_1["default"].createElement("header", null,
                    react_1["default"].createElement("h2", null, "Popular Restaurants in Israel"),
                    react_1["default"].createElement("div", { className: "exploremain__popular__view" }, "View All")),
                react_1["default"].createElement("div", { className: "exploremain__popular__grid" }, famousRestaurants.map(function (rest, index) {
                    return react_1["default"].createElement(restaurantCard_1["default"], { key: index, id: rest.id, name: rest.name, image: rest.image, booking: rest.booking });
                }))),
            react_1["default"].createElement("div", { className: "exploremain__restaurateurs" },
                react_1["default"].createElement("div", { className: "exploremain__restaurateurs__background" },
                    react_1["default"].createElement("div", { className: "exploremain__restaurateurs__background__color" }),
                    react_1["default"].createElement("h2", null, "Restaurateurs Join Us"),
                    react_1["default"].createElement("h3", null, " Join More Than XXX Restaurants which fill seats and manage reservations"),
                    react_1["default"].createElement("button", { className: "exploremain__restaurateurs__background__btn" }, "Learn More")))),
        react_1["default"].createElement(footer_1["default"], null)));
}
exports["default"] = Explore;
