"use strict";
exports.__esModule = true;
require("./MainScreen.scss");
var menu_1 = require("../../components/menuBar/menu");
var background_jpg_1 = require("../../images/background.jpg");
var react_1 = require("react");
var axios_1 = require("axios");
// Import Swiper React components
var react_2 = require("swiper/react");
// Import Swiper styles
require("swiper/css");
require("swiper/css/pagination");
require("swiper/css/navigation");
// import required modules
var swiper_1 = require("swiper");
var react_router_dom_1 = require("react-router-dom");
function MainScreen() {
    var _a = react_1.useState([]), top10 = _a[0], setTop = _a[1];
    var _b = react_1.useState([]), recent = _b[0], setRecent = _b[1];
    react_1.useEffect(function () {
        axios_1["default"].get('http://localhost:3004/Top10').then(function (res) {
            var data = res.data;
            setTop(data);
        });
    }, []);
    //console.log(top10);
    react_1.useEffect(function () {
        axios_1["default"].get('http://localhost:3004/recent').then(function (res) {
            var data = res.data;
            setRecent(data);
        });
    }, []);
    //console.log(recent);
    var imageClick1 = function (recipe) {
        axios_1["default"].post('http://localhost:3004/selected', { recipe: recipe, from: 'top10' });
    };
    var imageClick2 = function (recipe) {
        axios_1["default"].post('http://localhost:3004/selected', { recipe: recipe, from: 'recent' });
    };
    return (react_1["default"].createElement("div", { className: "wrapper" },
        react_1["default"].createElement("div", { className: 'menuBar', id: "outer-container" },
            react_1["default"].createElement(menu_1["default"], null)),
        react_1["default"].createElement("div", { className: 'contentBox', id: "page-wrap" },
            react_1["default"].createElement("img", { className: 'image', src: background_jpg_1["default"], alt: "" }),
            react_1["default"].createElement("div", { className: 'content' },
                react_1["default"].createElement("h1", { className: 'title1' }, "Top 10 Recipes"),
                react_1["default"].createElement("div", { className: 'content1' },
                    react_1["default"].createElement(react_2.Swiper, { slidesPerView: 3, spaceBetween: 20, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, pagination: {
                            clickable: true
                        }, navigation: true, modules: [swiper_1.Pagination, swiper_1.Navigation], className: "mySwiper" }, top10.map(function (recipe, index) {
                        return (react_1["default"].createElement(react_2.SwiperSlide, { key: index },
                            react_1["default"].createElement(react_router_dom_1.Link, { to: '/RecipeInfo' },
                                react_1["default"].createElement("img", { src: recipe.image, alt: '', onClick: function () { return imageClick1(recipe); } })),
                            react_1["default"].createElement("p", null, recipe.name)));
                    }))),
                react_1["default"].createElement("h1", { className: 'title1' }, "Most Recent Recipe"),
                react_1["default"].createElement("div", { className: 'content1' },
                    react_1["default"].createElement(react_2.Swiper, { slidesPerView: 3, spaceBetween: 30, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, pagination: {
                            clickable: true
                        }, navigation: true, modules: [swiper_1.Pagination, swiper_1.Navigation], className: "mySwiper" }, recent.map(function (recipe, index) {
                        return (react_1["default"].createElement(react_2.SwiperSlide, { key: index },
                            react_1["default"].createElement(react_router_dom_1.Link, { to: '/RecipeInfo' },
                                react_1["default"].createElement("img", { src: recipe.image, alt: '', onClick: function () { return imageClick2(recipe); } })),
                            react_1["default"].createElement("p", null, recipe.name)));
                    }))),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("br", null)))));
}
exports["default"] = MainScreen;
