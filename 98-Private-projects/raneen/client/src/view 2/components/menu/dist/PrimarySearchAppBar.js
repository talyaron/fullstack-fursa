"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var AppBar_1 = require("@material-ui/core/AppBar");
var Toolbar_1 = require("@material-ui/core/Toolbar");
var IconButton_1 = require("@material-ui/core/IconButton");
var Typography_1 = require("@material-ui/core/Typography");
var InputBase_1 = require("@material-ui/core/InputBase");
var Badge_1 = require("@material-ui/core/Badge");
var MenuItem_1 = require("@material-ui/core/MenuItem");
var Menu_1 = require("@material-ui/core/Menu");
var Menu_2 = require("@material-ui/icons/Menu");
var Search_1 = require("@material-ui/icons/Search");
var AccountCircle_1 = require("@material-ui/icons/AccountCircle");
var Mail_1 = require("@material-ui/icons/Mail");
var Notifications_1 = require("@material-ui/icons/Notifications");
var MoreVert_1 = require("@material-ui/icons/MoreVert");
var useStyles = styles_1.makeStyles(function (theme) {
    var _a, _b, _c, _d, _e;
    return styles_1.createStyles({
        grow: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: (_a = {
                display: 'none'
            },
            _a[theme.breakpoints.up('sm')] = {
                display: 'block'
            },
            _a),
        search: (_b = {
                position: 'relative',
                borderRadius: theme.shape.borderRadius,
                backgroundColor: styles_1.alpha(theme.palette.common.white, 0.15),
                '&:hover': {
                    backgroundColor: styles_1.alpha(theme.palette.common.white, 0.25)
                },
                marginRight: theme.spacing(2),
                marginLeft: 0,
                width: '100%'
            },
            _b[theme.breakpoints.up('sm')] = {
                marginLeft: theme.spacing(3),
                width: 'auto'
            },
            _b),
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        inputRoot: {
            color: 'inherit'
        },
        inputInput: (_c = {
                padding: theme.spacing(1, 1, 1, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: "calc(1em + " + theme.spacing(4) + "px)",
                transition: theme.transitions.create('width'),
                width: '100%'
            },
            _c[theme.breakpoints.up('md')] = {
                width: '20ch'
            },
            _c),
        sectionDesktop: (_d = {
                display: 'none'
            },
            _d[theme.breakpoints.up('md')] = {
                display: 'flex'
            },
            _d),
        sectionMobile: (_e = {
                display: 'flex'
            },
            _e[theme.breakpoints.up('md')] = {
                display: 'none'
            },
            _e)
    });
});
function PrimarySearchAppBar() {
    var classes = useStyles();
    var _a = react_1["default"].useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var _b = react_1["default"].useState(null), mobileMoreAnchorEl = _b[0], setMobileMoreAnchorEl = _b[1];
    var isMenuOpen = Boolean(anchorEl);
    var isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    var handleProfileMenuOpen = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleMobileMenuClose = function () {
        setMobileMoreAnchorEl(null);
    };
    var handleMenuClose = function () {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    var handleMobileMenuOpen = function (event) {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    var menuId = 'primary-search-account-menu';
    var renderMenu = (react_1["default"].createElement(Menu_1["default"], { anchorEl: anchorEl, anchorOrigin: { vertical: 'top', horizontal: 'right' }, id: menuId, keepMounted: true, transformOrigin: { vertical: 'top', horizontal: 'right' }, open: isMenuOpen, onClose: handleMenuClose },
        react_1["default"].createElement(MenuItem_1["default"], { onClick: handleMenuClose }, "Profile"),
        react_1["default"].createElement(MenuItem_1["default"], { onClick: handleMenuClose }, "My account")));
    var mobileMenuId = 'primary-search-account-menu-mobile';
    var renderMobileMenu = (react_1["default"].createElement(Menu_1["default"], { anchorEl: mobileMoreAnchorEl, anchorOrigin: { vertical: 'top', horizontal: 'right' }, id: mobileMenuId, keepMounted: true, transformOrigin: { vertical: 'top', horizontal: 'right' }, open: isMobileMenuOpen, onClose: handleMobileMenuClose },
        react_1["default"].createElement(MenuItem_1["default"], null,
            react_1["default"].createElement(IconButton_1["default"], { "aria-label": "show 4 new mails", color: "inherit" },
                react_1["default"].createElement(Badge_1["default"], { badgeContent: 4, color: "secondary" },
                    react_1["default"].createElement(Mail_1["default"], null))),
            react_1["default"].createElement("p", null, "Messages")),
        react_1["default"].createElement(MenuItem_1["default"], null,
            react_1["default"].createElement(IconButton_1["default"], { "aria-label": "show 11 new notifications", color: "inherit" },
                react_1["default"].createElement(Badge_1["default"], { badgeContent: 11, color: "secondary" },
                    react_1["default"].createElement(Notifications_1["default"], null))),
            react_1["default"].createElement("p", null, "Notifications")),
        react_1["default"].createElement(MenuItem_1["default"], { onClick: handleProfileMenuOpen },
            react_1["default"].createElement(IconButton_1["default"], { "aria-label": "account of current user", "aria-controls": "primary-search-account-menu", "aria-haspopup": "true", color: "inherit" },
                react_1["default"].createElement(AccountCircle_1["default"], null)),
            react_1["default"].createElement("p", null, "Profile"))));
    return (react_1["default"].createElement("div", { className: classes.grow },
        react_1["default"].createElement(AppBar_1["default"], { position: "static" },
            react_1["default"].createElement(Toolbar_1["default"], null,
                react_1["default"].createElement(IconButton_1["default"], { edge: "start", className: classes.menuButton, color: "inherit", "aria-label": "open drawer" },
                    react_1["default"].createElement(Menu_2["default"], null)),
                react_1["default"].createElement(Typography_1["default"], { className: classes.title, variant: "h6", noWrap: true }, "Material-UI"),
                react_1["default"].createElement("div", { className: classes.search },
                    react_1["default"].createElement("div", { className: classes.searchIcon },
                        react_1["default"].createElement(Search_1["default"], null)),
                    react_1["default"].createElement(InputBase_1["default"], { placeholder: "Search\u2026", classes: {
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }, inputProps: { 'aria-label': 'search' } })),
                react_1["default"].createElement("div", { className: classes.grow }),
                react_1["default"].createElement("div", { className: classes.sectionDesktop },
                    react_1["default"].createElement(IconButton_1["default"], { "aria-label": "show 4 new mails", color: "inherit" },
                        react_1["default"].createElement(Badge_1["default"], { badgeContent: 4, color: "secondary" },
                            react_1["default"].createElement(Mail_1["default"], null))),
                    react_1["default"].createElement(IconButton_1["default"], { "aria-label": "show 17 new notifications", color: "inherit" },
                        react_1["default"].createElement(Badge_1["default"], { badgeContent: 17, color: "secondary" },
                            react_1["default"].createElement(Notifications_1["default"], null))),
                    react_1["default"].createElement(IconButton_1["default"], { edge: "end", "aria-label": "account of current user", "aria-controls": menuId, "aria-haspopup": "true", onClick: handleProfileMenuOpen, color: "inherit" },
                        react_1["default"].createElement(AccountCircle_1["default"], null))),
                react_1["default"].createElement("div", { className: classes.sectionMobile },
                    react_1["default"].createElement(IconButton_1["default"], { "aria-label": "show more", "aria-controls": mobileMenuId, "aria-haspopup": "true", onClick: handleMobileMenuOpen, color: "inherit" },
                        react_1["default"].createElement(MoreVert_1["default"], null))))),
        renderMobileMenu,
        renderMenu));
}
exports["default"] = PrimarySearchAppBar;
