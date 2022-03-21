"use strict";
exports.__esModule = true;
var hooks_1 = require("../../app/hooks");
var textSlice_1 = require("../../app/reducers/textSlice");
function TextShow() {
    var dispatch = hooks_1.useAppDispatch();
    function handleInput(ev) {
        var text = ev.target.value;
        dispatch(textSlice_1.update(text));
    }
    function handleJoke(ev) {
        dispatch(textSlice_1.getJokeAsync());
    }
    return (React.createElement("div", { className: "inputBox" },
        React.createElement("input", { type: "text", placeholder: "Enter text", onKeyUp: handleInput }),
        React.createElement("button", { onClick: handleJoke }, "Get Joke")));
}
exports["default"] = TextShow;
