"use strict";
exports.__esModule = true;
var hooks_1 = require("../../app/hooks");
var textSlice_1 = require("../../app/reducers/textSlice");
function HelpShow() {
    var dispatch = hooks_1.useAppDispatch();
    function handleInput(ev) {
        var text = ev.target.value;
        dispatch(textSlice_1.update(text));
    }
    function handleJoke(ev) {
        ev.preventDefault();
        var id = ev.target;
        dispatch(textSlice_1.getJokeAsync(id));
    }
    return (React.createElement("div", { className: "inputBox" },
        React.createElement("input", { type: "text", placeholder: "Enter text", onKeyUp: handleInput }),
        React.createElement("button", { onClick: handleJoke },
            React.createElement("img", { src: "https://static.zara.net/photos///mkt/misc/help/icons//icon-80-help-shipping.svg?ts=1550654368093", alt: "" }),
            "DELIVERY METHODS AND COSTS")));
}
exports["default"] = HelpShow;
