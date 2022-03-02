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
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const config = dotenv_1.conf();
const express = require("express");
const app = express();
const port = 4000; // default port to listen
require('dotenv').config();
// define a route handler for the default home page
app.use(express.static("../client/build"));
app.use(express.json());
const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
const users = [{ name: "Lama", id: '12345' }];
app.get("/get-users", (req, res) => {
    try {
        res.status(200).send({ users });
    }
    catch (error) {
        console.info(error);
        res.send({ error });
    }
});
app.post("/add-user", (req, res) => {
    try {
        const { user } = req.body;
        if (!user)
            throw new Error("No user in request");
        const userObj = {
            name: user,
            id: uid()
        };
        users.push(userObj);
        console.log(users);
        res.send({ ok: true });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
const mongoose = require('mongoose');
main().catch(err => console.log(err));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const password = process.env.MONGODB_PASSWORD;
        console.log(password);
        yield mongoose.connect(`mongodb+srv://Suzan:${password}@cluster0.skxqu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
    });
}
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("connected to DB!");
});
