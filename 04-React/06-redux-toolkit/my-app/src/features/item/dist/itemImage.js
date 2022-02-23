"use strict";
exports.__esModule = true;
var hooks_1 = require("../../app/hooks");
var itemSlice_1 = require("./itemSlice");
function itemImage() {
    var dispatch = hooks_1.useAppDispatch();
    function handleSelect(ev) {
        var item = ev.target.value;
        dispatch(itemSlice_1.update(item));
    }
    return (React.createElement("div", { className: "wrapper" },
        React.createElement("div", { className: 'box', onClick: handleSelect },
            React.createElement("img", { src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg", alt: "" }),
            React.createElement("p", null, "Image 1")),
        React.createElement("div", { className: 'box' },
            React.createElement("img", { src: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg", alt: "" }),
            React.createElement("p", null, "Image 1")),
        React.createElement("div", { className: 'box' },
            React.createElement("img", { src: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg", alt: "" }),
            React.createElement("p", null, "Image 1"))));
}
exports["default"] = itemImage;
