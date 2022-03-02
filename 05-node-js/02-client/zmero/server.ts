const express = require('express');
const app = express();
require('dotenv').config()
const port = 4000;

app.use(express.static('client/build'));
app.use(express.json());
//data





//posts






const mongoose = require('mongoose');

main().catch(err => console.log(err));
const db = mongoose.connection;


async function main() {
    const password = process.env.MONGODB_PASSWORD
    await mongoose.connect(`mongodb+srv://zmero123:${password}@cluster0.acxtd.mongodb.net/test`)
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
//mitzy.save().then(res => { console.log(res) }).catch(err => console.log(err));
async function getKitens() {
    const kittens = await Kitten.find({ name: "Mitzy" });
    console.log(kittens);
}

getKitens();
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
