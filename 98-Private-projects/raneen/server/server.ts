import Owners from './model/schema/ownerModel';
import Users from './model/schema/UserSchema';
import Products from './model/schema/productSchema';

const express = require("express");
const cookieParser = require('cookie-parser'); 
const app = express();
const mysql = require('mysql');
const port = 4000;
require("dotenv").config();

//routes for data

//static files
app.use(express.json());
app.use(cookieParser());
app.use(express.static("client/build"));

export const con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "raneennm246"


  // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345678'
});

con.connect( (err)=> {
  if (err) throw err;
  console.log("Connected!");
  // con.query("use test", (err, result, fields) => {
  //     if (err) throw err;
  //     console.log('Using test');

  // });
});


//data
// app.post('/sqlTest', async (req, res) => {
//     const { name, age } = req.body;
//     console.log("sqlTest");
//     try {
//         var sql = `INSERT INTO fishes.fish (fishID, fish_name, fish_age) VALUES (${uid()}, '${name}', ${age})`;
//         con.query(sql, function (err, result) {
//             if (err) throw err;
//             console.log("1 record inserted");
//             res.send({ ok: true, results: result });
//         });
//     } catch (error) {
//         res.send({ ok: false });
//     }
// })


app.post('/users_LessThan', async (req, res) => {
    const { age } = req.body;
    console.log("users_LessThan");
    try {
        var sql = `SELECT * FROM user.products WHERE product-price < ${age}`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.send({ ok: true, results: result });
        });
    } catch (error) {
        res.send({ ok: false });
    }
})

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
  const password = process.env.MONOGODB_PASSWORD;
  await mongoose.connect(
    `mongodb+srv://Raneen:${password}@cluster0.heyoj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
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

// const mitzy = new Kitten({
//   name: "Mitzy3",
//   address: {
//     city: "Um al fahm",
//     street: "Jaberin",
//   },
// });

// console.log(mitzy.name);

// mitzy
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// async function getKitens(): Promise<any> {
//   try {
//     const kittens = await Kitten.find({});
//     return kittens;
//   } catch (err: any) {
//     console.error(err);
//     return false;
//   }
// }

// app.get("/get-all-kitens", async (req, res) => {
//   const kittens = await getKitens();
//   res.send(kittens);
// });

// app.get("/privateInfo",async (req, res) => {
//     //get cookie
//     const { mySecretPassword } = req.cookies;
//     const { id } = mySecretPassword;
//     //get user from database
//     // if exists, responce with user's data

//     res.send({ ok: true });
//     console.log("private");
//   });



const ownerRoute = require('./routes/ownersRoute')
app.use('/owenrs', ownerRoute);

const UserRoute = require('./routes/UserRoute')
app.use('/users', UserRoute);

const productRoute = require('./routes/productRoute')
app.use('/products', productRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
