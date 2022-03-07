"use strict";
exports.__esModule = true;
require("./trainers.scss");
var React = require("react");
var card_1 = require("../../components/trainersCard/card");
var header_1 = require("../../components/header/header");
function Trainers() {
    var trainers = [{ name: 'Joey', image: 'https://m.media-amazon.com/images/M/MV5BODQ0NTI0OTk0M15BMl5BanBnXkFtZTcwMDk2MDg5Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg', desc: "description" },
        { name: 'Ros', image: 'https://m.media-amazon.com/images/M/MV5BMTQ2Mjg5ODIzNF5BMl5BanBnXkFtZTgwNjIwMjI0ODE@._V1_UX214_CR0,0,214,317_AL_.jpg', desc: "description" },
        { name: 'Phoebe', image: 'https://m.media-amazon.com/images/M/MV5BMTU5OTA0ODcxNl5BMl5BanBnXkFtZTcwMjE3NjQxMw@@._V1_UY317_CR8,0,214,317_AL_.jpg', desc: "description" },
        { name: 'Rachel', image: 'https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY317_CR3,0,214,317_AL_.jpg', desc: "description" },
        { name: 'Chandler', image: 'https://m.media-amazon.com/images/M/MV5BMTMwODc5NjI3N15BMl5BanBnXkFtZTcwNDEyMTE3Mw@@._V1_UY317_CR17,0,214,317_AL_.jpg', desc: "description" },
        { name: 'Monica', image: 'https://m.media-amazon.com/images/M/MV5BMTA4OTczNDExNDNeQTJeQWpwZ15BbWU3MDUyNTIzMTM@._V1_UY317_CR7,0,214,317_AL_.jpg', desc: "description" }];
    return (React.createElement("div", { className: "maindiv2" },
        React.createElement(header_1["default"], null),
        React.createElement("h3", null, "Our trainers"),
        React.createElement("div", { className: "maindiv_card2" }, trainers.map(function (trainer, index) {
            return React.createElement(card_1["default"], { key: index, name: trainer.name, image: trainer.image, desc: trainer.desc });
        }))));
}
exports["default"] = Trainers;
