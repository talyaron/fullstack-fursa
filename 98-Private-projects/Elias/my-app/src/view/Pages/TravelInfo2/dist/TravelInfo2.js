"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
//transport
var Property_1_OFF_Plane_icon_png_1 = require("../../../icons/Property 1=OFF Plane+icon.png");
var Property_1_OFF_Bus_icon_png_1 = require("../../../icons/Property 1=OFF Bus+icon.png");
var Property_1_OFF_Car_icon_png_1 = require("../../../icons/Property 1=OFF Car+icon.png");
var Property_1_OFF_Ship_icon_png_1 = require("../../../icons/Property 1=OFF Ship+icon.png");
var Property_1_OFF_Taxi_icon_png_1 = require("../../../icons/Property 1=OFF Taxi+icon.png");
var Property_1_OFF_Taxi_icon_png_2 = require("../../../icons/Property 1=OFF Taxi+icon.png");
//activity
var Property_1_OFF_Golf_icon_png_1 = require("../../../icons/Property 1=OFF Golf+icon.png");
var Property_1_OFF_Club_icon_png_1 = require("../../../icons/Property 1=OFF Club+icon.png");
var Property_1_OFF_Photography_icon_png_1 = require("../../../icons/Property 1=OFF Photography+icon.png");
var Property_1_OFF_Swimming_icon_png_1 = require("../../../icons/Property 1=OFF Swimming+icon.png");
var Property_1_OFF_Hiking_icon_png_1 = require("../../../icons/Property 1=OFF Hiking+icon.png");
var Property_1_OFF_Biking_icon_png_1 = require("../../../icons/Property 1=OFF Biking+icon.png");
//accommodation
var Property_1_OFF_Hotel_icon_png_1 = require("../../../icons/Property 1=OFF Hotel+icon.png");
var Property_1_OFF_BB_icon_png_1 = require("../../../icons/Property 1=OFF BB+icon.png");
var Property_1_OFF_Shorterm_icon_png_1 = require("../../../icons/Property 1=OFF Shorterm+icon.png");
var Property_1_OFF_Van_icon_png_1 = require("../../../icons/Property 1=OFF Van+icon.png");
var Property_1_OFF_Tent_icon_png_1 = require("../../../icons/Property 1=OFF Tent+icon.png");
var Property_1_OFF_Sofa_icon_png_1 = require("../../../icons/Property 1=OFF Sofa+icon.png");
//Spicial
var Property_1_OFF_Baby_icon_png_1 = require("../../../icons/Property 1=OFF Baby+icon.png");
var Property_1_OFF_Toddlers_icon_png_1 = require("../../../icons/Property 1=OFF Toddlers+icon.png");
var Property_1_OFF_Pets_icon_png_1 = require("../../../icons/Property 1=OFF Pets+icon.png");
var Property_1_OFF_Med_icon_png_1 = require("../../../icons/Property 1=OFF Med+icon.png");
var Property_1_OFF_Merchandise_icon_png_1 = require("../../../icons/Property 1=OFF Merchandise+icon.png");
var Property_1_OFF_Valuable_icon_png_1 = require("../../../icons/Property 1=OFF Valuable+icon.png");
require("./TravelInfo2.scss");
var TravelInfo2 = function () {
    var nav = react_router_dom_1.useNavigate();
    var state = react_router_dom_1.useLocation().state;
    function onSubmit(e) {
        nav('/ViewList', {
            state: state
        });
    }
    return (react_1["default"].createElement("div", { className: "wrapper" },
        react_1["default"].createElement("div", { className: "header" }, " Fill travel info"),
        react_1["default"].createElement("form", { action: "", className: "TarvelInfo1Form" },
            react_1["default"].createElement("div", { className: "catg box1" },
                react_1["default"].createElement("div", { className: " text Transport" }, "Transport"),
                react_1["default"].createElement("div", { className: "grid-container" },
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Plane_icon_png_1["default"], alt: "" })),
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Bus_icon_png_1["default"], alt: "" })),
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Car_icon_png_1["default"], alt: "" })),
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Ship_icon_png_1["default"], alt: "" })),
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Taxi_icon_png_1["default"], alt: "" })),
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Taxi_icon_png_2["default"], alt: "" })))),
            react_1["default"].createElement("div", { className: "catg box2" },
                react_1["default"].createElement("div", { className: " text Activity" }, "Activity"),
                react_1["default"].createElement("div", { className: "grid-container" },
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Golf_icon_png_1["default"], alt: "" })),
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Club_icon_png_1["default"], alt: "" })),
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Photography_icon_png_1["default"], alt: "" })),
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Swimming_icon_png_1["default"], alt: "" })),
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Hiking_icon_png_1["default"], alt: "" })),
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Biking_icon_png_1["default"], alt: "" })))),
            react_1["default"].createElement("div", { className: "catg box3" },
                react_1["default"].createElement("div", { className: " text Accommodation" }, "Accommodation"),
                react_1["default"].createElement("div", { className: "grid-container" },
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Hotel_icon_png_1["default"], alt: "" })),
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_BB_icon_png_1["default"], alt: "" })),
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Shorterm_icon_png_1["default"], alt: "" })),
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Van_icon_png_1["default"], alt: "" })),
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Tent_icon_png_1["default"], alt: "" })),
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Sofa_icon_png_1["default"], alt: "" })))),
            react_1["default"].createElement("div", { className: "catg box4" },
                react_1["default"].createElement("div", { className: " text Special" }, "Special Care"),
                react_1["default"].createElement("div", { className: "grid-container" },
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Baby_icon_png_1["default"], alt: "" })),
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Toddlers_icon_png_1["default"], alt: "" })),
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Pets_icon_png_1["default"], alt: "" })),
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Med_icon_png_1["default"], alt: "" })),
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Merchandise_icon_png_1["default"], alt: "" })),
                    react_1["default"].createElement("div", { className: "grid-item" },
                        react_1["default"].createElement("img", { src: Property_1_OFF_Valuable_icon_png_1["default"], alt: "" })))),
            react_1["default"].createElement("button", { className: 'Proceedbtn', onClick: onSubmit }, "Submit"))));
};
exports["default"] = TravelInfo2;
