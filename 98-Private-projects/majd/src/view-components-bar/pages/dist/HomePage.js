"use strict";
exports.__esModule = true;
var React = require("react");
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
var pages = ['Products', 'Pricing', 'Blog'];
var settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
var HomePage = function () {
    var _a = React.useState(null), anchorElNav = _a[0], setAnchorElNav = _a[1];
    var _b = React.useState(null), anchorElUser = _b[0], setAnchorElUser = _b[1];
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
    return (React.createElement(AppBar_1["default"], { position: "static" },
        React.createElement(Container_1["default"], { maxWidth: "xl" },
            React.createElement(Toolbar_1["default"], { disableGutters: true },
                React.createElement(Typography_1["default"], { variant: "h6", noWrap: true, component: "div", sx: { mr: 2, display: { xs: 'none', md: 'flex' } } }, "LOGO"),
                React.createElement(Box_1["default"], { sx: { flexGrow: 1, display: { xs: 'flex', md: 'none' } } },
                    React.createElement(IconButton_1["default"], { size: "large", "aria-label": "account of current user", "aria-controls": "menu-appbar", "aria-haspopup": "true", onClick: handleOpenNavMenu, color: "inherit" },
                        React.createElement(Menu_2["default"], null)),
                    React.createElement(Menu_1["default"], { id: "menu-appbar", anchorEl: anchorElNav, anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left'
                        }, keepMounted: true, transformOrigin: {
                            vertical: 'top',
                            horizontal: 'left'
                        }, open: Boolean(anchorElNav), onClose: handleCloseNavMenu, sx: {
                            display: { xs: 'block', md: 'none' }
                        } }, pages.map(function (page) { return (React.createElement(MenuItem_1["default"], { key: page, onClick: handleCloseNavMenu },
                        React.createElement(Typography_1["default"], { textAlign: "center" }, page))); }))),
                React.createElement(Typography_1["default"], { variant: "h6", noWrap: true, component: "div", sx: { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }, "LOGO"),
                React.createElement(Box_1["default"], { sx: { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }, pages.map(function (page) { return (React.createElement(Button_1["default"], { key: page, onClick: handleCloseNavMenu, sx: { my: 2, color: 'white', display: 'block' } }, page)); })),
                React.createElement(Box_1["default"], { sx: { flexGrow: 0 } },
                    React.createElement(Tooltip_1["default"], { title: "Open settings" },
                        React.createElement(IconButton_1["default"], { onClick: handleOpenUserMenu, sx: { p: 0 } },
                            React.createElement(Avatar_1["default"], { alt: "Remy Sharp", src: "/static/images/avatar/2.jpg" }))),
                    React.createElement(Menu_1["default"], { sx: { mt: '45px' }, id: "menu-appbar", anchorEl: anchorElUser, anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'right'
                        }, keepMounted: true, transformOrigin: {
                            vertical: 'top',
                            horizontal: 'right'
                        }, open: Boolean(anchorElUser), onClose: handleCloseUserMenu }, settings.map(function (setting) { return (React.createElement(MenuItem_1["default"], { key: setting, onClick: handleCloseUserMenu },
                        React.createElement(Typography_1["default"], { textAlign: "center" }, setting))); })))))));
};
exports["default"] = HomePage;
