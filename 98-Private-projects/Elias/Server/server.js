const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const mongoose = require('mongoose');
require('dotenv').config();

const password = process.env.MONGODB_PASSWORD;

const app = express();
app.use(cors()) // Use this after the variable declaration
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);

const db = mongoose.connection;


main().catch(err => console.log(err));

async function main() {
    const password = process.env.MONGODB_PASSWORD;
    await mongoose.connect(`mongodb+srv://eliasrenawi:${password}@cluster0.yp2sn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
}


db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("connected to DB!");
});


const kittySchema = new mongoose.Schema({
    name: String
});

//the collection
const Kitten = mongoose.model('Kitten', kittySchema);

const mitzy = new Kitten({ name: 'Mitzy' });
console.log(mitzy.name);

mitzy.save().then(res => { console.log(res) });




const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});