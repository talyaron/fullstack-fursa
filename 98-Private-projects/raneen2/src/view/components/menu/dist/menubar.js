"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MenuItem_1 = require("@material-ui/core/MenuItem");
var Fade_1 = require("@material-ui/core/Fade");
function FadeMenu() {
    var _a = react_1["default"].useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var open = Boolean(anchorEl);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    return (aria - controls) = "fade-menu";
    aria - haspopup;
    "true";
    onClick = { handleClick: handleClick } >
        Open;
    with (fade)
        transition
            < /Button>
            < Menu_1["default"];
    id = "fade-menu";
    anchorEl = { anchorEl: anchorEl };
    keepMounted;
    open = { open: open };
    onClose = { handleClose: handleClose };
    TransitionComponent = { Fade: Fade_1["default"] }
        >
            onClick;
    {
        handleClose;
    }
     > Profile < /MenuItem>
        < MenuItem_1["default"];
    onClick = { handleClose: handleClose } > My;
    account < /MenuItem>
        < MenuItem_1["default"];
    onClick = { handleClose: handleClose } > Logout < /MenuItem>
        < /Menu>
        < /div>;
    ;
}
exports["default"] = FadeMenu;
