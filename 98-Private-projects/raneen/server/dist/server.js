var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require("express");
const app = express();
const port = 4000;
require("dotenv").config();
//routes for data
//static files
app.use(express.static("client/build"));
//data
app.get("/get-all-users", (req, res) => {
    const users = [
        { id: 1, name: "John" },
        { id: 2, name: "Mary" },
    ];
    res.send(users);
});
app.get("/", (req, res) => {
    console.log(req);
    res.send("Hello World! all");
});
//mongoose
const mongoose = require("mongoose");
main().catch((err) => console.log(err));
const db = mongoose.connection;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const password = process.env.MONOGODB_PASSWORD;
        yield mongoose.connect(`mongodb+srv://Raneen:${password}@cluster0.heyoj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
    });
}
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("connected to DB!");
});
const kittySchema = new mongoose.Schema({
    name: String,
    address: {
        city: String,
    },
});
// const userSchema = new mongoose.Schema({
//   //id: String,
//   name: String,
//   password: String,
//   address: {
//     city: String,
//   },
//   // email: String,
//   // phone: String,
// });
// const User = mongoose.model("User", userSchema);
// async function getUsers(): Promise<any> {
//   try {
//     const users = await User.find({});
//     return users;
//   } catch (err: any) {
//     console.error(err);
//     return false;
//   }
// }
// app.get("/get-all-users", async (req, res) => {
//   const users = await getUsers();
//   res.send(users);
// });
// async function addUser():Promise<any> {
//   try{
//   const users = await User.find({ });
//   return users;
//   } catch(err:any){
//     console.error(err)
//     return false
//   }
// }
// app.get("/add-user", async (req, res) => {
//   const { body } = req;
//   console.log(body);
//   User.post({ body });
//   res.send({ message: "user created", User});
// });
// const raneen = new User({
//   name: "Raneen",
//   password: "ba",
//   address: {
//     city: "Kafar Manda",
//   },
// });
// raneen
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));
//the collection
const Kitten = mongoose.model("Kitten", kittySchema);
const mitzy = new Kitten({
    name: "Mitzy3",
    address: {
        city: "Um al fahm",
        street: "Jaberin",
    },
});
console.log(mitzy.name);
mitzy
    .save()
    .then((res) => {
    console.log(res);
})
    .catch((err) => console.log(err));
function getKitens() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const kittens = yield Kitten.find({});
            return kittens;
        }
        catch (err) {
            console.error(err);
            return false;
        }
    });
}
app.get("/get-all-kitens", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const kittens = yield getKitens();
    res.send(kittens);
}));
const user = require('./routes/user');
app.use('/User', user);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
