"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
let users = [{ name: "Mohamad", id: 123 }];
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.get("/get-user", (req, res) => {
    console.log("user-request");
    res.status(202).send(users);
});
app.post("/add-user", (req, res) => {
    const { body } = req;
    console.log(body);
    users = [...users, body];
    res.send({ message: "user created", users });
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
