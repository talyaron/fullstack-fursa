"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var home_1 = require("./view/pages/home/home");
var vitamins_1 = require("./view/pages/vitamins/vitamins");
var product_1 = require("./view/pages/product/product");
var cosmetics_1 = require("./view/pages/cosmetics/cosmetics");
var sugerfree_1 = require("./view/pages/sugerfree/sugerfree");
var treatment_1 = require("./view/pages/treatment/treatment");
var calendar_1 = require("./view/pages/calendar/calendar");
var Navbar_1 = require("./view/components/navbar/Navbar");
function App() {
    var products = [{ id: 1, name: 'Vitamin D', text: "Vitamin D helps regulate the amount of calcium and phosphate in the body. These nutrients are needed to keep bones, teeth and muscles healthy. A lack of vitamin D can lead to bone deformities such as rickets in children, and bone pain caused by a condition called osteomalacia in adults", img: 'https://img.mako.co.il/2016/03/14/shutterstock_59410978_i.jpg' },
        { id: 2, name: 'Chlorella', text: "Chlorella as a supplement improves cholesterol levels and rides the body of toxins.", img: 'https://eatwell.co.il/wp-content/uploads/2017/12/Chlorella-eatwell-123.jpg' },
        { id: 3, name: 'Omega3', text: "Omega3 fatty acids are incredibly important.They have many powerful health benefits for your body and brain.", img: 'https://www.vitaplus.co.il/wp-content/uploads/2020/02/%D7%90%D7%95%D7%9E%D7%92%D7%94-3.jpg' }
    ];
    var cosmetics = [{ id: 1, name: 'Organic-Cosmetics', img: 'https://static.manna.global/img/cms/uk/980/5170-how-much-do-you-know-about-natural-cosmetics-152004.png', text: "" },
        { id: 2, name: 'Handmade-Cosmetics', img: 'https://previews.123rf.com/images/vchalup/vchalup1702/vchalup170200163/73392103-skincare-concept-woman-is-preparing-homemade-cosmetics-or-makeup-.jpg', text: "" },
        { id: 3, name: 'Mud-Masks', img: 'https://thumbs.dreamstime.com/b/preparing-cosmetic-mud-mask-aloe-vera-lavender-essential-oil-facial-clay-spa-products-stones-natural-cosmetics-home-137897112.jpg', text: "" }
    ];
    var cupping = { id: 1, name: 'Cupping Therapy', img: 'https://media.wsimag.com/attachments/193b9b637c3a7dfcb27b91a14ed0d47878d88ca1/store/fill/1090/613/4621d5afb058b57330ba40e4d8ba23534743e5c727f3e6d06d5eceda4452/Cupping-therapy.jpg',
        text: "Cupping therapy is an ancient form of alternative medicine in which a therapist puts special cups on your skin for a few minutes to create suction. People get it for many purposes, including to help with pain, inflammation, blood flow, relaxation and well-being, and as a type of deep-tissue massage." };
    var facial = { id: 1, name: 'Facial Treatment', img: 'https://5.imimg.com/data5/VW/YX/GLADMIN-63916043/herbal-face-clean-up-treatment-500x500.png',
        text: "Skin care is the range of practices that support skin integrity, enhance its appearance and relieve skin conditions. ... Practices that enhance appearance include the use of cosmetics, botulinum, exfoliation, fillers, laser resurfacing, microdermabrasion, peels, retinol therapy and ultrasonic skin treatment." };
    var candles = { id: 1, name: 'Hopi Ear Candles', img: 'https://saltandcrystal.com/wp-content/uploads/2019/03/viber-image-3_E.jpg',
        text: "Do you suffer from conditions related to your ear, nose or throat? Hopi ear candles are an ancient and natural therapy that can offer relief from issues such as sinus problems, compacted ear wax, tinnitus and headaches. Hopi ear candle treatments can also help to reduce inflammation in the ears and sinuses, relieve the symptoms of hay fever, rebalance your body’s natural flow, and generally calm and relax you when life is stressful. " };
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(Navbar_1["default"], null),
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(home_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "vitamins", element: React.createElement(vitamins_1["default"], null) },
                React.createElement(react_router_dom_1.Route, { path: ":productId", element: React.createElement(product_1["default"], { products: products }) })),
            React.createElement(react_router_dom_1.Route, { path: "cosmetics", element: React.createElement(cosmetics_1["default"], null) },
                React.createElement(react_router_dom_1.Route, { path: ":productId", element: React.createElement(product_1["default"], { products: cosmetics }) })),
            React.createElement(react_router_dom_1.Route, { path: "sugerfree", element: React.createElement(sugerfree_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "cupping%20therapy", element: React.createElement(treatment_1["default"], { id: cupping.id, name: cupping.name, img: cupping.img, text: cupping.text }) }),
            React.createElement(react_router_dom_1.Route, { path: "facial%20treatment", element: React.createElement(treatment_1["default"], { id: facial.id, name: facial.name, img: facial.img, text: facial.text }) }),
            React.createElement(react_router_dom_1.Route, { path: "hopi%20candles", element: React.createElement(treatment_1["default"], { id: candles.id, name: candles.name, img: candles.img, text: candles.text }) }),
            React.createElement(react_router_dom_1.Route, { path: "calendar", element: React.createElement(calendar_1["default"], null) }))));
}
exports["default"] = App;
