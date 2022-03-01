"use strict";
exports.__esModule = true;
var hooks_1 = require("../../app/hooks");
var textSlice_1 = require("./textSlice");
//import { update, getJokeAsync } from "../../app/reducers/textSlice";
function TextShow() {
    var dispatch = hooks_1.useAppDispatch();
    function handleInput(ev) {
        //const text = ev.target.value;
        //dispatch(update(img));
        //dispatch(update(text));
        var text = '';
        var img = '';
        dispatch(textSlice_1.update([text, img]));
    }
    return (React.createElement("div", { className: "text2", onClick: handleClick },
        React.createElement("img", { src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", alt: "" })));
}
exports["default"] = TextShow;
