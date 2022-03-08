"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var React = require("react");
var styles_1 = require("@mui/material/styles");
var Card_1 = require("@mui/material/Card");
var CardHeader_1 = require("@mui/material/CardHeader");
var CardMedia_1 = require("@mui/material/CardMedia");
var CardContent_1 = require("@mui/material/CardContent");
var CardActions_1 = require("@mui/material/CardActions");
var Collapse_1 = require("@mui/material/Collapse");
var IconButton_1 = require("@mui/material/IconButton");
var Typography_1 = require("@mui/material/Typography");
var Favorite_1 = require("@mui/icons-material/Favorite");
var Share_1 = require("@mui/icons-material/Share");
var ExpandMore_1 = require("@mui/icons-material/ExpandMore");
var ExpandMore = styles_1.styled(function (props) {
    var expand = props.expand, other = __rest(props, ["expand"]);
    return React.createElement(IconButton_1["default"], __assign({}, other));
})(function (_a) {
    var theme = _a.theme, expand = _a.expand;
    return ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    });
});
function RecipeReviewCard() {
    var _a = React.useState(false), expanded = _a[0], setExpanded = _a[1];
    var handleExpandClick = function () {
        setExpanded(!expanded);
    };
    return (React.createElement(Card_1["default"], { className: "container", sx: { maxWidth: 345 } },
        React.createElement(CardHeader_1["default"], { fontStyle: "Apple Color Emoji", 
            // avatar={
            //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            //     R
            //   </Avatar>
            // }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title: "SATIN DRESS" }),
        React.createElement(CardMedia_1["default"], { className: "wrap", component: "img", height: "194", 
            // width="160"
            sx: [
                { width: 1 / 2 },
                { ml: 2 },
            ], image: "https://static.zara.net/photos///2022/V/0/1/p/2341/650/520/17/w/1500/2341650520_1_1_1.jpg?ts=1646390724222", alt: "Paella dish" }),
        React.createElement(CardContent_1["default"], null,
            React.createElement(Typography_1["default"], { variant: "body2", color: "text.secondary", sx: { display: 'inline' } }, "Collared dress with a V-neckline, long sleeves and shoulder pads. Inside button fastening at the front.")),
        React.createElement(CardActions_1["default"], { disableSpacing: true },
            React.createElement(IconButton_1["default"], { "aria-label": "add to favorites" },
                React.createElement(Favorite_1["default"], null)),
            React.createElement(IconButton_1["default"], { "aria-label": "share" },
                React.createElement(Share_1["default"], null)),
            React.createElement(IconButton_1["default"], { "aria-label": "share" },
                React.createElement("img", { width: "40px", src: "https://previews.123rf.com/images/dmvector/dmvector1909/dmvector190900060/131424750-icono-de-carrito-de-compras-icono-de-carro-.jpg", alt: "" })),
            React.createElement(ExpandMore, { expand: expanded, onClick: handleExpandClick, "aria-expanded": expanded, "aria-label": "show more" },
                React.createElement(ExpandMore_1["default"], null))),
        React.createElement(Collapse_1["default"], { "in": expanded, timeout: "auto", unmountOnExit: true },
            React.createElement(CardContent_1["default"], null,
                React.createElement(Typography_1["default"], { paragraph: true }, "CARE:"),
                React.createElement(Typography_1["default"], { paragraph: true }),
                React.createElement(Typography_1["default"], { paragraph: true }, "Caring for your clothes is caring for the environment. Lower temperature washes and delicate spin cycles are gentler on garments and help to protect the colour, shape and structure of the fabric. Furthermore, they reduce the amount of energy used in care processes. Machine wash at max. 30\u00BAC/86\u00BAF with short spin cycle Do not use bleach Iron at a maximum of 110\u00BAC/230\u00BAF Dry clean with tetrachloroethylene Do not tumble dry"),
                React.createElement(Typography_1["default"], { paragraph: true }),
                React.createElement(Typography_1["default"], null)))));
}
exports["default"] = RecipeReviewCard;
