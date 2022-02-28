"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
var Menu_1 = require("@material-ui/core/Menu");
var Button_1 = require("@material-ui/core/Button");
var MenuItem_1 = require("@material-ui/core/MenuItem");
var react_2 = require("react");
function Menu1() {
    react_2.useEffect(function () {
        axios_1["default"].get('http://localhost:3004/products1').then(function (_a) {
            var data = _a.data;
            console.log(data);
            setProducts(data);
        });
    }, []);
    var _a = react_2.useState(""), catagory = _a[0], setCatagory = _a[1];
    var _b = react_2.useState([]), products = _b[0], setProducts = _b[1];
    var _c = react_2.useState(products), productByCatagory = _c[0], setProductByCatagory = _c[1];
    var _d = react_1["default"].useState(null), anchorEl = _d[0], setAnchorEl = _d[1];
    var open = Boolean(anchorEl);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    react_2.useEffect(function () {
        function handleClose() {
            setAnchorEl(null);
            // ev.preventDefault();
            console.log(catagory);
            var arr = products.filter(function (element) {
                if (element.catagory === catagory) {
                    return element;
                }
            });
            setProductByCatagory(__spreadArrays(arr));
            if (catagory === "All") {
                setProductByCatagory(__spreadArrays(products));
            }
            console.log(arr);
        }
        handleClose();
    }, [catagory]);
    // const handleClose = () => {
    //   setAnchorEl(null);
    //    console.log("hi");
    // };
    return (react_1["default"].createElement("div", { className: "navbar" },
        react_1["default"].createElement("div", { className: "navbar__box" },
            react_1["default"].createElement("div", { className: "navbar__left" },
                react_1["default"].createElement("nav", { role: "navigation" }),
                react_1["default"].createElement("div", { className: "categories" },
                    react_1["default"].createElement(Button_1["default"], { id: "basic-button", "aria-controls": open ? "basic-menu" : undefined, "aria-haspopup": "true", "aria-expanded": open ? "true" : undefined, onClick: handleClick },
                        react_1["default"].createElement("img", { src: "https://cdn.icon-icons.com/icons2/2751/PNG/512/menu_burger_icon_176150.png", alt: "Logo" })),
                    react_1["default"].createElement(Menu_1["default"], { id: "basic-menu", anchorEl: anchorEl, open: open, onClose: handleClose, MenuListProps: {
                            "aria-labelledby": "basic-button"
                        } },
                        react_1["default"].createElement(MenuItem_1["default"], { onClick: handleClose }, "Clothes"),
                        react_1["default"].createElement(MenuItem_1["default"], { onClick: handleClose }, "Shoes"),
                        react_1["default"].createElement(MenuItem_1["default"], { onClick: handleClose }, "Accessories"))),
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("img", { src: "https://i.pinimg.com/originals/6f/dd/03/6fdd0381fb24566c13af151a9c5a9ddc.jpg", alt: "Logo" }))),
            react_1["default"].createElement("div", { className: "navbar__right" },
                react_1["default"].createElement("button", { className: "navbar__right__signup", type: "button" },
                    react_1["default"].createElement("span", null, "Shopping bag")),
                react_1["default"].createElement("a", { href: "#home" }, "help"),
                react_1["default"].createElement("button", { className: "navbar__right__signin", type: "button" }, "Sign in")))));
}
exports["default"] = Menu1;
