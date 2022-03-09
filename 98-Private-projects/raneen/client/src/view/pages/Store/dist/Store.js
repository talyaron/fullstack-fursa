"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
require("./Store.scss");
var react_router_dom_1 = require("react-router-dom");
var axios_1 = require("axios");
var productCard_1 = require("../../components/productCard/productCard");
function add() {
    return __awaiter(this, void 0, void 0, function () {
        var name, typeId, url, price, description, quantity, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = "WARM WOOL PREMIUM COAT - LIMITED EDITION";
                    typeId = "COATS";
                    url = "https://static.zara.net/photos///2022/V/0/1/p/2584/747/436/2/w/1500/2584747436_2_3_1.jpg?ts=1642604108776";
                    price = 750;
                    description = "Coat made of a top-quality warm wool blend. Lapel collar and long sleeves. Tied belt in the same fabric. Front pockets. Contrast interior lining. ";
                    quantity = 100;
                    axios_1["default"]
                        .post("/products/add-product", {
                        name: name,
                        typeId: typeId,
                        url: url,
                        price: price,
                        description: description,
                        quantity: quantity
                    })
                        .then(function (_a) {
                        var data = _a.data;
                        console.log(data);
                    });
                    console.log("aa");
                    return [4 /*yield*/, axios_1["default"].patch("/products/get-product", { typeId: typeId })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
function Store() {
    var coatsId = react_router_dom_1.useParams().coatsId;
    add();
    // axios.get('/user', {
    //   params: {
    //     ID: 12345
    //   }
    // })
    // axios
    // .patch("/products/get-product", {
    //    coatsId,
    // })
    // .then(({ data }) => {
    //   console.log(data);
    // });
    console.log(coatsId);
    return (
    // <div >
    // name:{coatsId}
    // </div>
    React.createElement("div", { className: "wrapper" },
        React.createElement("div", null,
            React.createElement(productCard_1["default"], null)),
        React.createElement("div", null,
            React.createElement(productCard_1["default"], null)),
        React.createElement("div", null,
            React.createElement(productCard_1["default"], null)),
        React.createElement("div", null,
            React.createElement(productCard_1["default"], null)),
        React.createElement("div", null,
            React.createElement(productCard_1["default"], null)),
        React.createElement("div", null,
            React.createElement(productCard_1["default"], null)),
        React.createElement("div", null,
            React.createElement(productCard_1["default"], null))));
}
exports["default"] = Store;
