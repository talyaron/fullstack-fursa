const express = require("express");
const app = express();
const port = 4000;
require('dotenv').config()

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




async function main() {
  const password=process.env.MONGODB_PASSWORD;
  await mongoose.connect(`mongodb+srv://tal1:${password}@tal-test1.m39if.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
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

// mitzy.save().then(res=>{console.log(res)});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
