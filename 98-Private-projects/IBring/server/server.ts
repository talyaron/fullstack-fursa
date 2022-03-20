import { checkStatus } from "./Controller/userController";

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');

const userRouter = require("./Routes/userRoutes");
const listRouter = require("./Routes/listRoutes");

app.use(express.static("../client/build"));
app.use(express.json());
app.use(cookieParser());
// app.use(checkStatus);

require('dotenv').config();

function uid() {
  return Math.floor(Math.random() * 1e6);
}

const con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "12345678"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to mysql!");
});

app.post('/sqlTest', async (req, res) => {
  const { name } = req.body;
  console.log("sqlTest");
  try {
    var sql = `INSERT INTO fishes.fish (fishID, fish_name) VALUES (${uid()}, '${name}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.send({ ok: true, results: result });
    });
  } catch (error) {
    res.send({ ok: false });
  }
})

mongoose.connect(`mongodb+srv://${process.env.MONGODB_EMAIL}:${process.env.MONGODB_PASS}@cluster0.sqzq0.mongodb.net/test`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to DB!");
});

app.use("/user", userRouter);
app.use("/meeting", listRouter);

app.get("/", (req, res) => {
  res.send("hello world!");
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));