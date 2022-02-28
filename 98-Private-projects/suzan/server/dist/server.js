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
const app = express_1.default();
const port = 4000;
const axios_1 = __importDefault(require("axios"));
app.use(express_1.default.static('../client/build'));
app.get('/get-user', (req, res) => {
    console.log('user-request');
    res.status(202).send({ name: 'suzan', id: 12345 });
});
app.get('/get-classes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('get classes - server');
    try {
        const response = yield axios_1.default.get('http://localhost:3004/schoolClasses');
        const data = response.data;
        console.log(data);
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
