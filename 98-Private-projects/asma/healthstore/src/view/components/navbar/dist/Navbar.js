"use strict";
exports.__esModule = true;
var react_1 = require("react");
var FaIcons = require("react-icons/fa");
var AiIcons = require("react-icons/ai");
var react_router_dom_1 = require("react-router-dom");
var SidebarData_1 = require("./SidebarData");
require("./Navbar.scss");
var react_icons_1 = require("react-icons");
function Navbar() {
    var _a = react_1.useState(false), sidebar = _a[0], setSidebar = _a[1];
    var showSidebar = function () { return setSidebar(!sidebar); };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_icons_1.IconContext.Provider, { value: { color: '#fff' } },
            react_1["default"].createElement("div", { className: 'navbar' },
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/" },
                    react_1["default"].createElement("img", { src: "https://www.pngall.com/wp-content/uploads/2016/06/Health-PNG-File.png" }),
                    " "),
                react_1["default"].createElement(react_router_dom_1.Link, { to: '#', className: 'menu-bars' },
                    react_1["default"].createElement(FaIcons.FaBars, { onClick: showSidebar }))),
            react_1["default"].createElement("nav", { className: sidebar ? 'nav-menu active' : 'nav-menu' },
                react_1["default"].createElement("ul", { className: 'nav-menu-items', onClick: showSidebar },
                    react_1["default"].createElement("li", { className: 'navbar-toggle' },
                        react_1["default"].createElement(react_router_dom_1.Link, { to: '#', className: 'menu-bars' },
                            react_1["default"].createElement(AiIcons.AiOutlineClose, null))),
                    SidebarData_1.SidebarData.map(function (item, index) {
                        return (react_1["default"].createElement("li", { key: index, className: item.cName },
                            react_1["default"].createElement(react_router_dom_1.Link, { to: item.path }, item.title)));
                    }))))));
}
exports["default"] = Navbar;
