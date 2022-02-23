"use strict";
exports.__esModule = true;
var hooks_1 = require("../../app/hooks");
var hooks_2 = require("../../app/hooks");
//import {update, getJokeAsync} from './textSlice'; 
var picSlice_1 = require("./picSlice");
require("./PicturesShow.css");
var picSlice_2 = require("./picSlice");
function PicturesShow() {
    var dispatch = hooks_1.useAppDispatch();
    var text = hooks_2.useAppSelector(picSlice_2.selectText);
    function handleClick(ev) {
        var pic = ev.target.src;
        dispatch(picSlice_1.update(pic));
    }
    return (React.createElement("div", { className: "pictures" },
        React.createElement("div", null,
            React.createElement("img", { src: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", onClick: handleClick }),
            React.createElement("div", null, text)),
        React.createElement("div", null,
            React.createElement("img", { src: "https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=", onClick: handleClick }),
            " ",
            React.createElement("div", null, text),
            " ")));
}
exports["default"] = PicturesShow;
