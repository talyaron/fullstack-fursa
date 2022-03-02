const express = require("express");
//import axios from 'axios';
const app = express();
const port = 4000;
require("dotenv").config();

app.use(express.static("../client/build"));
app.use(express.json());

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

const db = mongoose.connection;

async function main() {
  const password = process.env.MONGODB_PASSWORD;
  await mongoose.connect(
    `mongodb+srv://Dima1:${password}@cluster0.tmxpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  );
}

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to DB!");
});

const kittySchema = new mongoose.Schema({
  name: String,
  city: String,
  street: String,
});

//the collection
const Kitten = mongoose.model("Kitten", kittySchema);

//mitzy.save().then(res=>{console.log(res)}).catch(err=>console.log(err));

async function getKitens(): Promise<any> {
  try {
    const kittens = await Kitten.find({});
    return kittens;
  } catch (err: any) {
    console.error(err);
    return false;
  }
}

app.get("/get-all-kitens", async (req, res) => {
  console.log("yes");
  const kittens = await getKitens();
  res.send({ kittens: kittens });
});

app.post("/add-newKitten", async (req, res) => {
  try {
    const { name, city, street } = req.body;
    if (!name || !city || !street) throw new Error("No data");
    console.log(name);
    const newKitten = new Kitten({
      name: name,
      city: city,
      street: street,
    });
    await newKitten.save().then((res) => {
      console.log(res);
    });
    res.send({ val: "OK" });
  } catch (err) {
    res.send({ error: err.message });
  }
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
