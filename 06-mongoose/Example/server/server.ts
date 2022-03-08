import Cats from './model/schema/cats'
import Owners from './model/schema/ownerModel';

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




const mitzy = new Cats({
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
    const kittens = await Cats.find({});
    console.log(kittens);
    return kittens;
  } catch (err: any) {
    console.error(err);
    return false;
  }
}

async function aggragateCatsLives() {
  const filter = { extraLife: true };
  let docs = await Cats.aggregate([
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

aggragateCatsLives();

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
    let doc = await Cats.findOneAndUpdate(filter, update);

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
    let doc = await Cats.deleteOne(filter);

    res.send({ ok: true, doc });
  } catch (err) {
    console.error(err);
    res.status(400).send({ error: err.message });
  }
});

const ownerRoute = require('./routes/ownersRoute')
app.use('/owenrs', ownerRoute);

//query

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
