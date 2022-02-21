"use strict";
exports.__esModule = true;
require("./MainScreen.scss");
var menu_1 = require("../../components/menuBar/menu");
var background_jpg_1 = require("../../images/background.jpg");
var _1_jpg_1 = require("../../images/1.jpg");
var _2_jpg_1 = require("../../images/2.jpg");
var _3_jpg_1 = require("../../images/3.jpg");
var _4_jpg_1 = require("../../images/4.jpg");
var _5_jpg_1 = require("../../images/5.jpg");
var react_1 = require("react");
// Import Swiper React components
var react_2 = require("swiper/react");
// Import Swiper styles
require("swiper/css");
require("swiper/css/pagination");
require("swiper/css/navigation");
// import required modules
var swiper_1 = require("swiper");
var react_router_dom_1 = require("react-router-dom");
function handleRecipe() {
    react_1["default"].createElement(react_router_dom_1.Link, { to: '/RecipeInfo' });
}
function MainScreen() {
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
                        }, navigation: true, modules: [swiper_1.Pagination, swiper_1.Navigation], className: "mySwiper" },
                        react_1["default"].createElement(react_2.SwiperSlide, null,
                            react_1["default"].createElement(react_router_dom_1.Link, { to: '/RecipeInfo' },
                                react_1["default"].createElement("img", { src: _1_jpg_1["default"], alt: '' })),
                            react_1["default"].createElement("p", null, "Recipes 1")),
                        react_1["default"].createElement(react_2.SwiperSlide, null,
                            react_1["default"].createElement("img", { src: _2_jpg_1["default"], alt: '' }),
                            react_1["default"].createElement("p", null, "Recipes 2")),
                        react_1["default"].createElement(react_2.SwiperSlide, null,
                            react_1["default"].createElement("img", { src: _3_jpg_1["default"], alt: '' }),
                            react_1["default"].createElement("p", null, "Recipes 3")),
                        react_1["default"].createElement(react_2.SwiperSlide, null,
                            react_1["default"].createElement("img", { src: _4_jpg_1["default"], alt: '' }),
                            react_1["default"].createElement("p", null, "Recipes 4")),
                        react_1["default"].createElement(react_2.SwiperSlide, null,
                            react_1["default"].createElement("img", { src: _5_jpg_1["default"], alt: '' }),
                            react_1["default"].createElement("p", null, "Recipes 5")),
                        react_1["default"].createElement(react_2.SwiperSlide, null, "Slide 6"),
                        react_1["default"].createElement(react_2.SwiperSlide, null, "Slide 7"),
                        react_1["default"].createElement(react_2.SwiperSlide, null, "Slide 8"),
                        react_1["default"].createElement(react_2.SwiperSlide, null, "Slide 9"),
                        react_1["default"].createElement(react_2.SwiperSlide, null, "Slide 10"))),
                react_1["default"].createElement("h1", { className: 'title1' }, "The Newest Recipes"),
                react_1["default"].createElement("div", { className: 'content1' },
                    react_1["default"].createElement(react_2.Swiper, { slidesPerView: 3, spaceBetween: 30, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true, pagination: {
                            clickable: true
                        }, navigation: true, modules: [swiper_1.Pagination, swiper_1.Navigation], className: "mySwiper" },
                        react_1["default"].createElement(react_2.SwiperSlide, null,
                            react_1["default"].createElement("img", { src: _1_jpg_1["default"], alt: '' }),
                            react_1["default"].createElement("p", null, "Recipes 1")),
                        react_1["default"].createElement(react_2.SwiperSlide, null,
                            react_1["default"].createElement("img", { src: _2_jpg_1["default"], alt: '' }),
                            react_1["default"].createElement("p", null, "Recipes 2")),
                        react_1["default"].createElement(react_2.SwiperSlide, null,
                            react_1["default"].createElement("img", { src: _3_jpg_1["default"], alt: '' }),
                            react_1["default"].createElement("p", null, "Recipes 3")),
                        react_1["default"].createElement(react_2.SwiperSlide, null,
                            react_1["default"].createElement("img", { src: _4_jpg_1["default"], alt: '' }),
                            react_1["default"].createElement("p", null, "Recipes 4")),
                        react_1["default"].createElement(react_2.SwiperSlide, null,
                            react_1["default"].createElement("img", { src: _5_jpg_1["default"], alt: '' }),
                            react_1["default"].createElement("p", null, "Recipes 5")),
                        react_1["default"].createElement(react_2.SwiperSlide, null, "Slide 6"),
                        react_1["default"].createElement(react_2.SwiperSlide, null, "Slide 7"),
                        react_1["default"].createElement(react_2.SwiperSlide, null, "Slide 8"),
                        react_1["default"].createElement(react_2.SwiperSlide, null, "Slide 9"),
                        react_1["default"].createElement(react_2.SwiperSlide, null, "Slide 10"))),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("br", null)))));
}
exports["default"] = MainScreen;
