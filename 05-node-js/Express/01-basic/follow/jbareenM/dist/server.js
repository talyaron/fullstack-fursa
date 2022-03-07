"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.static('public'));
app.get('/get-user', (req, res) => {
    console.log('get user!');
    res.status(200).send({ name: 'Hello World!' });
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
