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
var express = require("express");
var router = express.Router();
var productSchema_1 = require("../model/schema/productSchema");
router.post("/add-product", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, typeId, url, price, description, quantity, newProduct;
    return __generator(this, function (_b) {
        try {
            console.log("hi ra");
            _a = req.body, name = _a.name, typeId = _a.typeId, url = _a.url, price = _a.price, description = _a.description, quantity = _a.quantity;
            console.log("hi raneen");
            if (!name)
                throw new Error("No name in body");
            if (!typeId)
                throw new Error("No typeId in body");
            if (!url)
                throw new Error("No url in body");
            if (!price)
                throw new Error("No price in body");
            if (!description)
                throw new Error("No description in body");
            if (!quantity)
                throw new Error("No quantity in body");
            console.log("hi raneen123");
            newProduct = new productSchema_1["default"]({
                name: name,
                typeId: typeId,
                url: url,
                price: price,
                description: description,
                quantity: quantity
            });
            // const query = { name:name},
            //   options = { upsert: true, new: true, setDefaultsOnInsert: true };
            //  const oldItem = await Users.findOneAndUpdate(query,ownerDB,options);
            console.log(newProduct);
            res.send(newProduct);
            newProduct.save();
            console.log("Hello World! all");
        }
        catch (error) {
            // console.info('ON app.post("/add-product"');
            // console.log(req.body);
            // console.error(error.message);
            // res.send({ error: error.message });
        }
        return [2 /*return*/];
    });
}); });
router.patch("/get-product", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var typeID, filter, products, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                typeID = req.body.typeID;
                console.log(typeID);
                console.log("typeID");
                filter = { _typeID: typeID };
                return [4 /*yield*/, productSchema_1["default"].find({ typeId: typeID })];
            case 1:
                products = _a.sent();
                console.log(products);
                return [2 /*return*/, products];
            case 2:
                err_1 = _a.sent();
                console.error(err_1);
                return [2 /*return*/, false];
            case 3: return [2 /*return*/];
        }
    });
}); });
// app.patch("/update-cat", async (req, res) => {
//   try {
//     const { name, city, id } = req.body;
//     const filter = { _id: id };
//     const update = { name: name, address: { city: city } };
//     //update the DB
//     let doc = await Cats.findOneAndUpdate(filter, update);
//     res.send({ ok: true, doc });
//   } catch (err) {
//     console.error(err);
//     res.status(400).send({ error: err.message });
//   }
// });
module.exports = router;
