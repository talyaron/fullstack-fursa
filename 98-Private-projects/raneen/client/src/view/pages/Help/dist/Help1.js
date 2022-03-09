"use strict";
exports.__esModule = true;
require("./Help1.scss");
// function hanleHelpUpdate(props:any){
//   console.log(props);
// }
//const FooBar = () => <Button value="WOOSAH" onClick={handleClick} />;
function Help1() {
    var id = 2;
    function handleDelete(id) {
        console.log(id);
    }
    return (React.createElement("div", { className: "wrapper" },
        React.createElement("div", null,
            React.createElement("button", { onClick: function () { return handleDelete(id); } },
                " ",
                React.createElement("img", { src: "https://static.zara.net/photos///mkt/misc/help/icons//icon-80-help-registered-user.svg?ts=1550654368093", alt: "" }),
                React.createElement("p", null, "YOUR ZARA ACCOUNT"))),
        React.createElement("div", null,
            React.createElement("img", { src: "https://static.zara.net/photos///mkt/misc/help/icons//icon-80-help-order-settings.svg?ts=1550654368093", alt: "" }),
            React.createElement("p", null, "ORDER MODIFICATIONS")),
        React.createElement("div", null,
            React.createElement("img", { src: "https://static.zara.net/photos///mkt/misc/help/icons//icon-80-help-bag.svg?ts=1550654368093", alt: "" }),
            React.createElement("p", null, "SHOPPING BASKET")),
        React.createElement("div", null,
            React.createElement("img", { src: "https://static.zara.net/photos///mkt/misc/help/icons//icon-80-help-wishlist.svg?ts=1550654368093", alt: "" }),
            React.createElement("p", null, "WISHLIST")),
        React.createElement("div", null,
            React.createElement("img", { src: "https://static.zara.net/photos///mkt/misc/help/icons//icon-80-help-changes-in-price.svg?ts=1550654368093", alt: "" }),
            React.createElement("p", null, "PRICE CHANGES")),
        React.createElement("div", null,
            React.createElement("img", { src: "https://static.zara.net/photos///mkt/misc/help/icons//icon-80-help-newsletter.svg?ts=1550654368093", alt: "" }),
            React.createElement("p", null, "NEWSLETTER"))));
}
exports["default"] = Help1;
