"use strict";
exports.__esModule = true;
require("./trainers.scss");
var React = require("react");
var card_1 = require("../../components/trainersCard/card");
function Trainers() {
    var trainers = [{ name: 'Joey', image: 'https://m.media-amazon.com/images/M/MV5BODQ0NTI0OTk0M15BMl5BanBnXkFtZTcwMDk2MDg5Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg', desc: "description" },
        { name: 'Ros', image: 'https://cdn.archilovers.com/projects/c_383_f83bb625-ff28-414b-a700-8e4bebde941b.jpg', desc: "description" },
        { name: 'Phoebe', image: 'https://bestrest.rest/wp-content/uploads/2019/05/TAIZU_017.jpg', desc: "description" },
        { name: 'Rachel', image: 'https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY317_CR3,0,214,317_AL_.jpg', desc: "description" },
        { name: 'Chandler', image: 'https://m.media-amazon.com/images/M/MV5BMTMwODc5NjI3N15BMl5BanBnXkFtZTcwNDEyMTE3Mw@@._V1_UY317_CR17,0,214,317_AL_.jpg', desc: "description" },
        { name: 'Monica', image: 'https://m.media-amazon.com/images/M/MV5BMTA4OTczNDExNDNeQTJeQWpwZ15BbWU3MDUyNTIzMTM@._V1_UY317_CR7,0,214,317_AL_.jpg', desc: "description" }];
    return (React.createElement("div", { className: "maindiv" },
        React.createElement("h3", null, "Our trainers"),
        React.createElement("div", { className: "maindiv_card" }, trainers.map(function (trainer, index) {
            return React.createElement(card_1["default"], { key: index, name: trainer.name, image: trainer.image, desc: trainer.desc });
        }))));
}
exports["default"] = Trainers;
