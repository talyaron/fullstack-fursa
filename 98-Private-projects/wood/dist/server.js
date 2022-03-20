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
const axios_1 = __importDefault(require("axios"));
const express = require('express');
const app = express();
const port = 4000;
app.get('/get-wood-type', (req, res) => {
    const woods = [{ type: 'pine wood', height: 70, width: 70, thick: 70 }, { type: 'insulation', height: 70, width: 70, thick: 70 }, { type: 'multyLayer', height: 70, width: 70, thick: 70 }];
    res.send(woods);
});
app.use(express.static('client/build'));
app.use(express.json());
app.get('/get-orders', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get('http://localhost:3004/userOrder');
        const { data } = response;
        //  console.log(data)
        res.status(200).send(data);
    }
    catch (error) {
        console.info(error);
        res.send({ error });
    }
}));
app.get('/get-raws', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get('http://localhost:3004/woods');
        const { data } = response;
        //  console.log(data)
        res.status(200).send(data);
    }
    catch (error) {
        console.info(error);
        res.send({ error });
    }
}));
app.post('/add-orders', (req, res) => {
    try {
        const { orderObj } = req.body;
        console.log(orderObj);
        if (!orderObj)
            throw new Error("no order");
        axios_1.default.post('http://localhost:3004/userOrder', orderObj);
        res.send({ ok: true });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.delete('/delete-order', (req, res) => {
    try {
        axios_1.default.delete(`http://localhost:3004/userOrder`);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
//console.log(process.env.USER);
app.get('/', (req, res) => {
    console.log(req);
    res.send('Hello World! all');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
