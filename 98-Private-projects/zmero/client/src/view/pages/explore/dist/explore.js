"use strict";
exports.__esModule = true;
var react_1 = require("react");
var restaurantCard_1 = require("../../components/restaurantCard/restaurantCard");
var search_1 = require("../../components/search/search");
var menu_1 = require("../../components/menu/menu");
var footer_1 = require("../../components/footer/footer");
var location_svg_1 = require("./location.svg");
var Button_1 = require("@mui/material/Button");
var Menu_1 = require("@mui/material/Menu");
var MenuItem_1 = require("@mui/material/MenuItem");
require("./explore.scss");
function Explore() {
    var _a = react_1.useState([{ id: 0, name: "", image: "", booking: 0 }]), famousRestaurants = _a[0], setFamousRestaurant = _a[1];
    var _b = react_1.useState([{ id: 0, name: "", image: "", booking: 0 }]), trendingRestaurants = _b[0], setTrendingRestaurant = _b[1];
    var _c = react_1.useState([{ id: 0, name: "", image: "", booking: 0 }]), seaRestaurants = _c[0], setSeaRestaurant = _c[1];
    var _d = react_1.useState('Israel'), userRegion = _d[0], setUserRegion = _d[1];
    var _e = react_1.useState(null), anchorEl = _e[0], setAnchorEl = _e[1];
    var open = Boolean(anchorEl);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function (e) {
        setAnchorEl(null);
        console.log(e.target);
        setUserRegion(e.target.dataset.myValue);
    };
    react_1.useEffect(function () {
    }, []);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(menu_1["default"], null),
        react_1["default"].createElement(search_1["default"], null),
        react_1["default"].createElement("div", { className: "exploremain" },
            react_1["default"].createElement("div", { className: "exploremain__location" },
                react_1["default"].createElement("h5", null,
                    "It looks like you're in ",
                    userRegion,
                    ". Not Correct?"),
                react_1["default"].createElement("div", { className: "exploremain__location__get" },
                    react_1["default"].createElement("img", { src: location_svg_1["default"] }),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(Button_1["default"], { id: "basic-button", style: { color: "#2a945b" }, "aria-controls": open ? 'basic-menu' : undefined, "aria-haspopup": "true", "aria-expanded": open ? 'true' : undefined, onClick: handleClick }, "Get Current Location"),
                        react_1["default"].createElement(Menu_1["default"], { id: "basic-menu", PaperProps: {
                                style: { width: "12rem" }
                            }, anchorEl: anchorEl, open: open, onClose: handleClose, MenuListProps: {
                                'aria-labelledby': 'basic-button'
                            } },
                            react_1["default"].createElement(MenuItem_1["default"], { "data-my-value": 'Israel', onClick: handleClose }, "Israel"),
                            react_1["default"].createElement(MenuItem_1["default"], { "data-my-value": 'UK', onClick: handleClose }, "UK"),
                            react_1["default"].createElement(MenuItem_1["default"], { "data-my-value": 'USA', onClick: handleClose }, "USA"))))),
            react_1["default"].createElement("div", { className: "exploremain__popular" },
                react_1["default"].createElement("header", null,
                    react_1["default"].createElement("h2", null,
                        "Popular Restaurants in ",
                        userRegion),
                    react_1["default"].createElement("div", { className: "exploremain__popular__view" }, "View All")),
                react_1["default"].createElement("div", { className: "exploremain__popular__grid" }, famousRestaurants.map(function (rest, index) {
                    return react_1["default"].createElement(restaurantCard_1["default"], { key: index, id: rest.id, name: rest.name, image: rest.image, booking: rest.booking });
                }))),
            react_1["default"].createElement("div", { className: "exploremain__popular" },
                react_1["default"].createElement("header", null,
                    react_1["default"].createElement("h2", null,
                        "Trending Restaurants in ",
                        userRegion),
                    react_1["default"].createElement("div", { className: "exploremain__popular__view" }, "View All")),
                react_1["default"].createElement("div", { className: "exploremain__popular__grid" }, trendingRestaurants.map(function (rest, index) {
                    return react_1["default"].createElement(restaurantCard_1["default"], { key: index, id: rest.id, name: rest.name, image: rest.image, booking: rest.booking });
                }))),
            react_1["default"].createElement("div", { className: "exploremain__popular" },
                react_1["default"].createElement("header", null,
                    react_1["default"].createElement("h2", null,
                        "SeaFood Restaurants in ",
                        userRegion),
                    react_1["default"].createElement("div", { className: "exploremain__popular__view" }, "View All")),
                react_1["default"].createElement("div", { className: "exploremain__popular__grid" }, seaRestaurants.map(function (rest, index) {
                    return react_1["default"].createElement(restaurantCard_1["default"], { key: index, id: rest.id, name: rest.name, image: rest.image, booking: rest.booking });
                }))),
            react_1["default"].createElement("div", { className: "exploremain__restaurateurs" },
                react_1["default"].createElement("div", { className: "exploremain__restaurateurs__background" },
                    react_1["default"].createElement("div", { className: "exploremain__restaurateurs__background__color" }),
                    react_1["default"].createElement("h2", null, "Restaurateurs Join Us"),
                    react_1["default"].createElement("h3", null, " Join More Than X Restaurants which fill seats and manage reservations"),
                    react_1["default"].createElement("button", { className: "exploremain__restaurateurs__background__btn" }, "Learn More")))),
        react_1["default"].createElement(footer_1["default"], null)));
}
exports["default"] = Explore;
