"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.scss");
var Api_1 = require("./components/Api");
var ajv_1 = require("ajv");
var react_router_dom_1 = require("react-router-dom");
var react_router_dom_2 = require("react-router-dom");
var ajv = new ajv_1["default"]();
var api3 = {
    key: "07532edf67c74158bf3194746221502",
    base: "http://api.weatherapi.com/v1/current.json?key=07532edf67c74158bf3194746221502"
};
var arr = [
    {
        city: "Tel aviv",
        src: "https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2020/06/Best-areas-to-stay-in-Tel-Aviv-scaled-e1593008399620.jpg?fit=1506%2C1000&ssl=1"
    },
    {
        city: "London",
        src: "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/thames_copyright_visitlondon_antoinebuchet640x360.jpg?mw=640&hash=27AEBE2D1B7279A196CC1B4548638A9679BE107A"
    },
    {
        city: "Las vegas",
        src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/01/00/2b/the-strip.jpg?w=600&h=400&s=1"
    },
];
function App() {
    var cityid = react_router_dom_1.useParams().cityid;
    console.log(cityid);
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("nav", null,
            react_1["default"].createElement(react_router_dom_2.Link, { to: "/Tel aviv" }, "Tel Aviv"),
            react_1["default"].createElement(react_router_dom_2.Link, { to: "/London" }, "London "),
            react_1["default"].createElement(react_router_dom_2.Link, { to: "/Las vegas" }, "Las Vegas")),
        react_1["default"].createElement(Api_1["default"], { arr: arr })));
}
exports["default"] = App;
