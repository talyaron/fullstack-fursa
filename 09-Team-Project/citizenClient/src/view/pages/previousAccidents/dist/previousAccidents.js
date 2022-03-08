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
var react_1 = require("react");
var react_2 = require("react");
var axios_1 = require("axios");
var navbar_1 = require("../../components/navbar/navbar");
var previousAccidentComponent_1 = require("../../components/previousAccidents/previousAccidentComponent");
function PreviousAccident() {
    var _a = react_2.useState([]), accidents = _a[0], setAccident = _a[1];
    // const [accidents, setAccidents] = useState<Array<any>>([
    //     { details: { name: "test 1", content: text }, notifications: 10 },
    //     { details: { name: "test 2", content: text }, notifications: 5 },
    //     { details: { name: "test 3", content: text }, notifications: 4 },
    //   ]);
    //   useEffect(() => {
    //     console.log("Accident");
    //   }, [])
    function handleGetAccident(e) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1["default"].get("/get-previous-accidents").then(function (_a) {
                            var data = _a.data;
                            console.log(data);
                            setAccident(data);
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    react_2.useEffect(function () {
        axios_1["default"].get("/get-previous-accidents").then(function (_a) {
            var data = _a.data;
            console.log(data);
            setAccident(data);
        });
    }, []);
    return (react_1["default"].createElement("div", { className: 'AccidentContainer' },
        react_1["default"].createElement(navbar_1["default"], null),
        react_1["default"].createElement("div", { className: "accidentHeader" },
            react_1["default"].createElement("div", { className: "accidentHeader_home" }, "Home"),
            react_1["default"].createElement("div", { className: "accidentHeader_search" }, "search"),
            react_1["default"].createElement("div", { className: "accidentHeader_settings" }, "settings")),
        react_1["default"].createElement("button", { onClick: handleGetAccident }, " get previous accidents "),
        react_1["default"].createElement("div", { className: "accidentsContent" }, accidents.map(function (accident, index) {
            return (react_1["default"].createElement(previousAccidentComponent_1["default"], { key: index, connect: "connect", details: accident.details, notifications: accident.notifications }));
        }))));
}
exports["default"] = PreviousAccident;
