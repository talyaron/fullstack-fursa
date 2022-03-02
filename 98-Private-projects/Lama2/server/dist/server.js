var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
app.use(express.static("client/build"));
const mongoose = require('mongoose');
const internal = require('stream');
main().catch(err => console.log(err));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const password = process.env.MONGODB_PASSWORD;
        console.log(password);
        yield mongoose.connect(`mongodb+srv://Lama:${password}@cluster0.bve7t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
        // mongodb+srv://Lama:<password>@cluster0.bve7t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    });
}
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("connected to DB!");
});
const kittySchema = new mongoose.Schema({
    name: String,
    address: {
        city: String
    }
});
const CourseSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    participants: Number,
    hours: Number,
    lessons: Number,
});
const Kitten = mongoose.model('Kitten', kittySchema);
const Course = mongoose.model('Course', CourseSchema);
const gucci = new Kitten({
    name: 'Gucci',
    address: { city: "Haifa" },
});
const groupCourse = new Course({
    name: 'group course',
    cost: 1000,
    participants: 10,
    hours: 5,
    lessons: 10,
});
console.log(gucci.name);
console.log(groupCourse.cost); // 'Silence'
// async function getKittens(){
//     const kittens =await Kitten.find({name:"Gucci"});
//     const city =await Kitten.find({address:{city:"Haifa"}});
//     console.log(kittens);
//     console.log(city)
// }
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
app.get('/get-all-kitens', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const kittens = yield getKitens();
    res.send({ kittens: kittens });
}));
function getCourses() {
    return __awaiter(this, void 0, void 0, function* () {
        const course = yield Course.find({ name: "group course" });
        const hours = yield Course.find({ hours: 5 });
        console.log(course);
        console.log(hours);
    });
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/lama', (req, res) => {
    res.send("Hi,Lama");
});
// const routes = require('./routes/routes.js')(app, fs);
const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});
