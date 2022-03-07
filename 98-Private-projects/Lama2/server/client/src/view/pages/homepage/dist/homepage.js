"use strict";
exports.__esModule = true;
require("./homepage.scss");
var React = require("react");
var courses_1 = require("../courses/courses");
var offers_1 = require("../../components/offersCard/offers");
var products_1 = require("../../../features/productsReducer/products");
var hooks_1 = require("../../../app/hooks");
var react_1 = require("react");
var trainer_1 = require("../../../features/trainersReducer/trainer");
var offers_2 = require("../../../features/offersReducer/offers");
var offers_3 = require("../../../features/offersReducer/offers");
function Homepage() {
    var _a = react_1.useState("Zoro"), names = _a[0], Setname = _a[1];
    var _b = react_1.useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1yr60poUFJojpky70RI6hrTBtWx5Dm3ifwQ&usqp=CAU"), pics = _b[0], Setphoto = _b[1];
    var names2 = ["Simba", "Ice", "Gucci", "Sun", "Ben"];
    var _c = react_1.useState([]), kitttens = _c[0], setKittens = _c[1];
    var _d = react_1.useState([]), courses = _d[0], setCourses = _d[1];
    var offers = hooks_1.useAppSelector(offers_2.selectOffers);
    var trainers = hooks_1.useAppSelector(trainer_1.selectrainers);
    var dispatch = hooks_1.useAppDispatch();
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
        fetch('/get-all-courses')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            setCourses(data);
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
    function handleGetOffers() {
        dispatch(offers_3.getOfferAsync());
    }
    return (React.createElement("div", { className: 'maindiv' },
        React.createElement("h3", { className: "h" }, "Welcome to our farm"),
        React.createElement("div", null,
            React.createElement("button", { onClick: handleGetOffers }, "get offers")),
        kitttens.map(function (kity) {
            return React.createElement("p", { key: kity._id }, kity.name);
        }),
        React.createElement("div", { className: "offersDiv" }, offers.status !== 'loading' ? offers.arrOffers.map(function (offer, index) {
            // return (<p key={index}>{offer.name}</p> )
            return React.createElement(offers_1["default"], { key: index, name: offer.name, description: offer.description, cost: offer.cost });
        }) : React.createElement("div", null, "loading")),
        React.createElement(courses_1["default"], null),
        React.createElement("div", { className: "ani" },
            React.createElement("div", { className: 'animation' }))));
}
exports["default"] = Homepage;
