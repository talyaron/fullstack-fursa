"use strict";
exports.__esModule = true;
require("../components/Mainpage.scss");
var Rola_jpeg_1 = require("../Images/Rola.jpeg");
var search_logo_png_1 = require("../Images/search_logo.png");
var Card_1 = require("./Card");
var Bottombar_1 = require("../components/Bottombar");
var Travelers_1 = require("./Travelers");
var react_1 = require("react");
var axios_1 = require("axios");
var hooks_1 = require("../hooks/hooks");
var userSlice_1 = require("../reducers/userSlice");
var travelers = [
    {
        src: "https://qtxasset.com/quartz/qcloud1/media/image/2016-12/ethical%20traveler.jpg?VersionId=mIycdotTCoKNtVnW0d2g4wvfA.y.bqOw",
        name: "Jon Doe",
        country: "England"
    },
    {
        src: "https://qtxasset.com/quartz/qcloud1/media/image/2016-12/ethical%20traveler.jpg?VersionId=mIycdotTCoKNtVnW0d2g4wvfA.y.bqOw",
        name: "John Smith",
        country: "Italy"
    },
    {
        src: "https://qtxasset.com/quartz/qcloud1/media/image/2016-12/ethical%20traveler.jpg?VersionId=mIycdotTCoKNtVnW0d2g4wvfA.y.bqOw",
        name: "Moshe Doe",
        country: "Thailand"
    },
    {
        src: "https://qtxasset.com/quartz/qcloud1/media/image/2016-12/ethical%20traveler.jpg?VersionId=mIycdotTCoKNtVnW0d2g4wvfA.y.bqOw",
        name: "Moshe Doe",
        country: "Thailand"
    },
    {
        src: "https://qtxasset.com/quartz/qcloud1/media/image/2016-12/ethical%20traveler.jpg?VersionId=mIycdotTCoKNtVnW0d2g4wvfA.y.bqOw",
        name: "Moshe Doe",
        country: "Thailand"
    },
];
var arr = [
    {
        id: "1",
        src: "https://www.melares.com/uploads/antalya-turkey749395439.jpg",
        title: "Antalya Lake"
    },
    {
        id: "2",
        src: "https://media.shichor.co.il/a87daa5f0aeb03962dbac774498bdc87.jpg",
        title: "Sirmione"
    },
    {
        id: "2",
        src: "https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
        title: "Paris Tower"
    },
    {
        id: "3",
        src: "https://cf.bstatic.com/xdata/images/hotel/max500/263858373.jpg?k=1818a9f40dbf631c2870111510af6d1eee39fd366d246da6a0b0875f1c87066a&o=&hp=1",
        title: "Las Vegas"
    },
    {
        id: "3",
        src: "https://cf.bstatic.com/xdata/images/hotel/max500/263858373.jpg?k=1818a9f40dbf631c2870111510af6d1eee39fd366d246da6a0b0875f1c87066a&o=&hp=1",
        title: "Las Vegas"
    },
];
function Mainpage() {
    var user_email = hooks_1.useAppSelector(userSlice_1.userEmail);
    console.log(user_email);
    react_1.useEffect(function () {
        axios_1["default"]
            .get("http://localhost:3004/posts")
            .then(function (_a) {
            var data = _a.data;
            return console.log(data);
        });
    }, []);
    var name = { name: "Home" };
    return (React.createElement("div", { className: "wrapper" },
        React.createElement("div", { className: "mainpage" },
            React.createElement("div", { className: "header" },
                React.createElement("div", { className: "menu-icon" },
                    React.createElement("span", { className: "line" }),
                    React.createElement("span", { className: "line" }),
                    React.createElement("span", { className: "line" })),
                React.createElement("img", { src: Rola_jpeg_1["default"] })),
            React.createElement("div", { className: "down" },
                React.createElement("h1", null,
                    " Welcome to Travelers ",
                    user_email),
                React.createElement("p", null, "App connect with travel community."),
                React.createElement("div", { className: "search-bar" },
                    React.createElement("div", { className: "right-div" },
                        React.createElement("img", { src: search_logo_png_1["default"], style: { color: "#ff4500" } })),
                    React.createElement("div", { className: "left-div" },
                        React.createElement("p", null, "Search for your destination"),
                        React.createElement("div", { className: "input__div" },
                            React.createElement("p", null, "From"),
                            React.createElement("input", { type: "text" }),
                            React.createElement("p", null, "To"),
                            React.createElement("input", { type: "text" })))))),
        React.createElement("div", { className: "grid" },
            React.createElement("div", { className: "grid__items" },
                React.createElement("div", { className: "div_h" },
                    React.createElement("h1", null, "Right now at "),
                    React.createElement("a", { href: "" }, "See all")),
                React.createElement("div", { className: "list" }, arr.map(function (hotel, index) {
                    return (React.createElement(Card_1["default"], { key: index, src: hotel.src, id: hotel.id, title: hotel.title }));
                }))),
            React.createElement("div", { className: "grid__items" },
                React.createElement("div", { className: "div_h" },
                    React.createElement("h1", null, "Popular travelers"),
                    React.createElement("a", { href: "" }, "See all")),
                React.createElement("div", { className: "list" }, travelers.map(function (traveler, index) {
                    return (React.createElement(Travelers_1["default"], { key: index, src: traveler.src, name: traveler.name, country: traveler.country }));
                })))),
        React.createElement(Bottombar_1["default"], { name: name.name })));
}
exports["default"] = Mainpage;
