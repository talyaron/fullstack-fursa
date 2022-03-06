import assert from "assert";
const express = require("express");
const app = express();
const port = 4000;
require("dotenv").config();

//routes for data

//static files
app.use(express.json());
app.use(express.static("client/build"));

//data

app.get("/get-all-users", (req, res) => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Mary" },
  ];

  res.send(users);
});

//mongoose
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

const db = mongoose.connection;

async function main() {
  const password = process.env.MONGODB_PASSWORD;
  await mongoose.connect(
    `mongodb+srv://tal1:${password}@tal-test1.m39if.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  );
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
  lifes: Number,
  extraLife: Boolean,
});

//the collection
const Kitten = mongoose.model("Kitten", kittySchema);

const mitzy = new Kitten({
  name: "Mitzy4",
  address: {
    city: "Um al fahm",
    street: "Jaberin",
  },
  lifes: 9,
});
console.log(mitzy.name);

// mitzy.save().then(res=>{console.log(res)}).catch(err=>console.log(err));

async function getKitens(): Promise<any> {
  try {
    const nameRegEx = new RegExp("hu", "i");
    const kittens = await Kitten.find({});
    console.log(kittens);
    return kittens;
  } catch (err: any) {
    console.error(err);
    return false;
  }
}

async function aggragateKittensLives() {
  const filter = { extraLife: true };
  let docs = await Kitten.aggregate([
    { $match: filter },
    {
      $group: {
        _id: "$extraLife",
        numberOfCats: { $sum: 1 },
        count: { $sum: "$lifes" },
        avg: { $avg: "$lifes" },
      },
    },
  ]);
  console.log("----");
  console.log(docs);
}

aggragateKittensLives();

app.get("/get-all-kitens", async (req, res) => {
  const kittens = await getKitens();
  res.send(kittens);
});

//update (PATCH)
app.patch("/update-cat", async (req, res) => {
  try {
    const { name, city, id } = req.body;

    const filter = { _id: id };
    const update = { name: name, address: { city: city } };
    //update the DB
    let doc = await Kitten.findOneAndUpdate(filter, update);

    res.send({ ok: true, doc });
  } catch (err) {
    console.error(err);
    res.status(400).send({ error: err.message });
  }
});

app.post("/delete-cat", async (req, res) => {
  try {
    const { id } = req.body;

    const filter = { _id: id };

    //delet on  DB
    let doc = await Kitten.deleteOne(filter);

    res.send({ ok: true, doc });
  } catch (err) {
    console.error(err);
    res.status(400).send({ error: err.message });
  }
});

const OwnerSchema = new mongoose.Schema({
  name: String,
  id: String,
});

//the collection
const Owners = mongoose.model("Owners", OwnerSchema);

// const mitzy = new Kitten({
//   name: "Mitzy4",
//   address: {
//     city: "Um al fahm",
//     street: "Jaberin",
//   },
//   lifes: 9,
// });

app.post("/add-owner", async (req, res) => {
  try {
    const { id, name } = req.body;

    
    if (!id) throw new Error("No id in body");
    if (!name) throw new Error("No name in body");

    const ownerDB = new Owners({
      name,
      id,
    });

    const query = { id: id },
  
      options = { upsert: true, new: true, setDefaultsOnInsert: true };
  
    const oldItem = await Owners.findOneAndUpdate(query,ownerDB,options);
    console.log(oldItem);
    res.send(oldItem);
  } catch (error) {
    console.info('ON app.post("/add-owner"')
    console.log(req.body);
    console.error(error.message);
    res.send({ error: error.message });
  }
});

//query

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
