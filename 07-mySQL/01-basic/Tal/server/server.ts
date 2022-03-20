const cookieParser = require("cookie-parser");
const mysql = require("mysql");
const express = require("express");
const Ajv = require("ajv");
const ajv = new Ajv();
const app = express();
const port = 4001;
require("dotenv").config();

//routes for data

//static files
app.use(express.json());
app.use(cookieParser());
app.use(express.static("client/build"));

//data
export const con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "12345678",

  // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345678'
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  con.query("use test", (err, result, fields) => {
    if (err) throw err;
    console.log("Using test");
  });
});

//routes
import uesrRouter from "./routes/userRoute";
app.use("/users", uesrRouter);

//fishes
const newFish = {
  type: "string",
};
const validate = ajv.compile(newFish);

app.post("/add-new-fish", async (req, res) => {
  const { name } = req.body;
  try {
    if (name) {
      const valid = validate(name);
      if (!valid) {
        console.log(validate.errors);
        throw new Error("invalid data")
        
      }


      const sql = `INSERT INTO fishes.fishes(fish_name) VALUES ('${name}');`;

      con.query(sql, (err, result) => {
        try {
          if (err) throw err;
          console.log("1 record inserted");
          res.send({ results: result });
        } catch (err) {
          console.log(err.message);
          res.send({ error: err.message });
        }
      });
    }
  } catch (err) {
    console.error(err);
    res.send({error:err.message})
  }
});

app.get("/get-all-fishes", async (req, res) => {
  const sql = "SELECT * FROM fishes.fishes";
  con.query(sql, (err, result) => {
    try {
      if (err) throw err;
      console.log("records retrived");
      res.send({ fishes: result });
    } catch (err) {
      console.log(err.message);
      res.send({ error: err.message });
    }
  });
});

function uid() {
  return Math.floor(Math.random() * 1e7);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
