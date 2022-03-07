"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./footer.scss");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
function Footer() {
    return (react_1["default"].createElement("div", { className: "footer" },
        react_1["default"].createElement("div", { className: "footer__content" },
            react_1["default"].createElement("div", { className: "footer__content__first" },
                react_1["default"].createElement("div", { className: "footer__content__title" }, "DISCOVER"),
                react_1["default"].createElement("div", { className: "footer__content__li" }, "Private Dining"),
                react_1["default"].createElement("div", { className: "footer__content__li" }, "Restaurants Near Me"),
                react_1["default"].createElement("div", { className: "footer__content__li" }, "Reserve For Others"),
                react_1["default"].createElement("div", { className: "footer__content__li" }, "Delivery Near Me"),
                react_1["default"].createElement("div", { className: "footer__content__li" }, "Cuisines"),
                react_1["default"].createElement("div", { className: "footer__content__li" }, "Restaurants Open Now")),
            react_1["default"].createElement("div", { className: "footer__content__second" },
                react_1["default"].createElement("div", { className: "footer__content__title" }, "APP NAME"),
                react_1["default"].createElement("div", { className: "footer__content__li" }, "About Us"),
                react_1["default"].createElement("div", { className: "footer__content__li" }, "Blog"),
                react_1["default"].createElement("div", { className: "footer__content__li" }, "Career"),
                react_1["default"].createElement("div", { className: "footer__content__li" }, "Help")),
            react_1["default"].createElement("div", { className: "footer__content__third" },
                react_1["default"].createElement("div", { className: "footer__content__title" }, "CONTACT"),
                react_1["default"].createElement("div", { className: "footer__content__li" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faHouseChimney }),
                    " Israel,Haifa 10012"),
                react_1["default"].createElement("div", { className: "footer__content__li" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faEnvelope }),
                    " m.zmiro@hotmail.com"),
                react_1["default"].createElement("div", { className: "footer__content__li" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPhone }),
                    " +972 549 074 119")),
            react_1["default"].createElement("div", { className: "footer__content__fourth" },
                react_1["default"].createElement("div", { className: "footer__content__title" }, "JOIN US"),
                react_1["default"].createElement("div", { className: "footer__content__fourth__brands" },
                    react_1["default"].createElement("div", { className: "footer__content__fourth__icons" },
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faFacebook })),
                    react_1["default"].createElement("div", { className: "footer__content__fourth__icons" },
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faTwitter })),
                    react_1["default"].createElement("div", { className: "footer__content__fourth__icons" },
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faInstagram })),
                    react_1["default"].createElement("div", { className: "footer__content__fourth__icons" },
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faLinkedin })))))));
}
exports["default"] = Footer;
