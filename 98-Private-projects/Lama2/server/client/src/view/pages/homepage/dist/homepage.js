"use strict";
exports.__esModule = true;
require("./homepage.scss");
var React = require("react");
var courses_1 = require("../courses/courses");
var products_1 = require("../../../features/productsReducer/products");
var hooks_1 = require("../../../app/hooks");
var react_1 = require("react");
function Homepage() {
    var _a = react_1.useState("Zoro"), names = _a[0], Setname = _a[1];
    var _b = react_1.useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1yr60poUFJojpky70RI6hrTBtWx5Dm3ifwQ&usqp=CAU"), pics = _b[0], Setphoto = _b[1];
    var names2 = ["Simba", "Ice", "Gucci", "Sun", "Ben"];
    var dispatch = hooks_1.useAppDispatch();
    var _c = react_1.useState([]), kitttens = _c[0], setKittens = _c[1];
    react_1.useEffect(function () {
        // fetch('/get-all-users').then(res=>res.json()).then(data=>{
        //   console.log(data)
        //   setPpls(data);
        // })
        //fetch kittens
        fetch('/get-all-kitens')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            setKittens(data);
        })["catch"](function (err) {
            console.error(err);
        });
    }, []);
    function changename(e) {
        e.preventDefault();
        var nameInArr = names2[Math.floor(Math.random() * names2.length)];
        Setname(nameInArr);
    }
    //using redux
    function handleGetProducts() {
        dispatch(products_1.getProductAsync());
    }
    return (React.createElement("div", { className: 'maindiv' },
        React.createElement("h3", { className: "h" }, "Welcome to our farm"),
        React.createElement("h1", null, "Kittens"),
        kitttens.map(function (kity) {
            return React.createElement("p", { key: kity._id }, kity.name);
        }),
        React.createElement(courses_1["default"], null),
        React.createElement("div", { className: "ani" },
            React.createElement("div", { className: 'animation' }))));
}
exports["default"] = Homepage;
