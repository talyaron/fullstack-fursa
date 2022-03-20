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
exports.con = void 0;
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const express = require("express");
const Ajv = require("ajv");
const ajv = new Ajv();
const app = express();
const port = 4001;
require("dotenv").config();
//routes for data
//static files
app.use(express.json());
app.use(cookieParser());
app.use(express.static("client/build"));
//data
exports.con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "12345678"
    // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345678'
});
exports.con.connect((err) => {
    if (err)
        throw err;
    console.log("Connected!");
    exports.con.query("use test", (err, result, fields) => {
        if (err)
            throw err;
        console.log('Using test');
    });
});
//routes
const userRoute_1 = __importDefault(require("./routes/userRoute"));
app.use('/users', userRoute_1.default);
//fishes
const newFish = {
    type: "string",
};
const validate = ajv.compile(newFish);
app.post('/add-new-fish', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    if (name) {
        const sql = `INSERT INTO fishes.fishes(fish_name) VALUES ('${name}');`;
        exports.con.query(sql, (err, result) => {
            try {
                if (err)
                    throw err;
                console.log("1 record inserted");
                res.send({ results: result });
            }
            catch (err) {
                console.log(err.message);
                res.send({ error: err.message });
            }
        });
    }
}));
app.get('/get-all-fishes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'SELECT * FROM fishes.fishes';
    exports.con.query(sql, (err, result) => {
        try {
            if (err)
                throw err;
            console.log("records retrived");
            res.send({ fishes: result });
        }
        catch (err) {
            console.log(err.message);
            res.send({ error: err.message });
        }
    });
}));
function uid() {
    return Math.floor(Math.random() * 1e7);
}
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
