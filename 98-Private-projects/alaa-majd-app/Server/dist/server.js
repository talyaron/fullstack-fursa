"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 4001;
app.use(express_1.default.static('../Client/build'));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("hello");
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
