"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AppBar_1 = require("@mui/material/AppBar");
var Box_1 = require("@mui/material/Box");
var Toolbar_1 = require("@mui/material/Toolbar");
var IconButton_1 = require("@mui/material/IconButton");
var Typography_1 = require("@mui/material/Typography");
var Menu_1 = require("@mui/material/Menu");
var Menu_2 = require("@mui/icons-material/Menu");
var Container_1 = require("@mui/material/Container");
var Avatar_1 = require("@mui/material/Avatar");
var Button_1 = require("@mui/material/Button");
var Tooltip_1 = require("@mui/material/Tooltip");
var MenuItem_1 = require("@mui/material/MenuItem");
var react_router_dom_1 = require("react-router-dom");
require("./navbar.scss");
function Navbar() {
    var _a = react_1["default"].useState(null), anchorElNav = _a[0], setAnchorElNav = _a[1];
    var _b = react_1["default"].useState(null), anchorElUser = _b[0], setAnchorElUser = _b[1];
    var pages = ['Home', 'Info', 'Stories', 'Chat'];
    var handleOpenNavMenu = function (event) {
        setAnchorElNav(event.currentTarget);
    };
    var handleOpenUserMenu = function (event) {
        setAnchorElUser(event.currentTarget);
    };
    var handleCloseNavMenu = function () {
        setAnchorElNav(null);
    };
    var handleCloseUserMenu = function () {
        setAnchorElUser(null);
    };
    return (react_1["default"].createElement(AppBar_1["default"], { position: "static" },
        react_1["default"].createElement(Container_1["default"], { maxWidth: "xl" },
            react_1["default"].createElement(Toolbar_1["default"], { disableGutters: true },
                react_1["default"].createElement(Typography_1["default"], { variant: "h6", noWrap: true, component: "div", sx: { mr: 2, display: { xs: 'none', md: 'flex' } } }, "LOGO"),
                react_1["default"].createElement(Box_1["default"], { sx: { flexGrow: 1, display: { xs: 'flex', md: 'none' } } },
                    react_1["default"].createElement(IconButton_1["default"], { size: "large", "aria-label": "account of current user", "aria-controls": "menu-appbar", "aria-haspopup": "true", onClick: handleOpenNavMenu, color: "inherit" },
                        react_1["default"].createElement(Menu_2["default"], null)),
                    react_1["default"].createElement(Menu_1["default"], { id: "menu-appbar", anchorEl: anchorElNav, anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left'
                        }, keepMounted: true, transformOrigin: {
                            vertical: 'top',
                            horizontal: 'left'
                        }, open: Boolean(anchorElNav), onClose: handleCloseNavMenu, sx: {
                            display: { xs: 'block', md: 'none' }
                        } }, pages.map(function (page) { return (react_1["default"].createElement(MenuItem_1["default"], { key: page, onClick: handleCloseNavMenu },
                        react_1["default"].createElement(Typography_1["default"], { textAlign: "center" }, page))); }))),
                react_1["default"].createElement(Typography_1["default"], { variant: "h6", noWrap: true, component: "div", sx: { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }, "LOGO"),
                react_1["default"].createElement(Box_1["default"], { sx: { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }, pages.map(function (page) { return (react_1["default"].createElement(Button_1["default"], { key: page, onClick: handleCloseNavMenu, sx: { my: 2, color: 'white', display: 'block' } }, page)); })),
                react_1["default"].createElement(Box_1["default"], { sx: { flexGrow: 0 } },
                    react_1["default"].createElement(Tooltip_1["default"], { title: "Open settings" },
                        react_1["default"].createElement(IconButton_1["default"], { onClick: handleOpenUserMenu, sx: { p: 0 } },
                            react_1["default"].createElement(Avatar_1["default"], { alt: "Remy Sharp", src: "/static/images/avatar/2.jpg" }))),
                    react_1["default"].createElement(Menu_1["default"], { sx: { mt: '45px' }, id: "menu-appbar", anchorEl: anchorElUser, anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'right'
                        }, keepMounted: true, transformOrigin: {
                            vertical: 'top',
                            horizontal: 'right'
                        }, open: Boolean(anchorElUser), onClose: handleCloseUserMenu },
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/profile" },
                            react_1["default"].createElement(MenuItem_1["default"], { key: "profile", onClick: handleCloseUserMenu },
                                react_1["default"].createElement(Typography_1["default"], { textAlign: "center" }, "profile")))))))));
}
exports["default"] = Navbar;
