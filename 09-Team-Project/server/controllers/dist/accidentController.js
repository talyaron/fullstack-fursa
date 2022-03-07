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
var accidentModel_1 = require("../model/accidentModel");
exports.getAllAccidents = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _acc, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('getAllAccidents');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, accidentModel_1["default"].find({})];
            case 2:
                _acc = _a.sent();
                res.send({ ok: true, accidents: _acc });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                res.send({ ok: false, error: error_1.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getAccidentByID = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _acc, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('getAccidentByID');
                id = req.body.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, accidentModel_1["default"].findOne({ _id: id })];
            case 2:
                _acc = _a.sent();
                // const _acc = await accident.findOne({ });
                res.send({ ok: true, accident: _acc });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                res.send({ ok: false, error: error_2.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getAccidenstByUserName = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userName, _acc, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('getAccidentByUserName');
                userName = req.body.userName;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, accidentModel_1["default"].find({ "user.name": userName })];
            case 2:
                _acc = _a.sent();
                // const _acc = await accident.findOne({ });
                res.send({ ok: true, accidents: _acc });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                res.send({ ok: false, error: error_3.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addNewAccident = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, type, emergency, date, address, media, call, description, user, org, _acc, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log('addNewAccident');
                _a = req.body, type = _a.type, emergency = _a.emergency, date = _a.date, address = _a.address, media = _a.media, call = _a.call, description = _a.description, user = _a.user, org = _a.org;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, new accidentModel_1["default"]({
                        type: "a",
                        emergency: true,
                        date: new Date(),
                        address: "123",
                        media: {
                            src: "String",
                            type: "String"
                        },
                        call: "123",
                        description: "123",
                        user: {
                            userID: Number,
                            name: String,
                            email: String,
                            password: String,
                            phone: String,
                            location: String,
                            gender: String,
                            type: 'public'
                        },
                        org: {}
                    })];
            case 2:
                _acc = _b.sent();
                _acc.save().then("accident saved!");
                // const _acc = await accident.findOne({ });
                res.send({ ok: true, accidents: _acc });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _b.sent();
                res.send({ ok: false, error: error_4.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
