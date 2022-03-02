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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const app = express_1.default();
const port = 4000;
const mongoose = require('mongoose');
main().catch(err => console.log(err));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose.connect('mongodb://localhost:27017/test');
    });
}
app.use(express_1.default.static('../client/build'));
app.use(express_1.default.json());
app.get('/get-user', (req, res) => {
    console.log('user-request');
    res.status(202).send({ name: 'dima', id: 316181734 });
});
app.get('/get-select-recipe', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get('http://localhost:3004/select/1');
        console.log(response.data);
        const data = response.data;
        res.status(200).send(data);
    }
    catch (error) {
        console.info(error);
        res.send({ error });
    }
}));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
