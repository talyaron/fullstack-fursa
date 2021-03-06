"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
app.use(express_1.default.static('public'));
app.get('/get-user', (req, res) => {
    console.log('user-request');
    res.send({ name: "Lama", id: 123 });
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
