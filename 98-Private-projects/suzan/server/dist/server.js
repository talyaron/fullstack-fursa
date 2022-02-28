"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 4000;
app.use(express_1.default.static('../client/build'));
app.get('/get-user', (req, res) => {
    console.log('user-request');
    res.status(202).send({ name: 'suzan', id: 12345 });
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
