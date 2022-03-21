const mysql = require('mysql');
import express from 'express';
import Product from './model/schema/productsModel';
const multer = require('multer');
//const path = require('path');

const cookieParser = require('cookie-parser');
const app = express();
const port = 4000;
require('dotenv').config();

app.use(express.static('healthstore/build'));
app.use(cookieParser());
app.use(express.json());


//data
const con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123456"


  // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456'
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});
// con.query('SELECT * from products.products', function(err, rows, fields) {
//   if(err) console.log(err);
//   console.log('The solution is: ', rows);
//   con.end();
// }); 


app.get('/get-products', async (req, res) => {
  const sql = "SELECT * FROM products.products";
  con.query(sql, (err, result) => {
    try {
      if (err) throw err;
      console.log("records retrived");
      res.send({ ok: true, products: result });
    } catch (err) {
      console.log(err.message);
      res.send({ ok: false, products: [] });
    }
  });
})


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
})
var upload = multer({ storage: storage })


app.post("/add-new-product", upload.single('image'), async (req: any, res) => {
  const { name, text, category } = req.body;
  try {
    const path = req.file.filename;
    const sql = `INSERT INTO products.products (name, text, category, img) VALUES ('${name}', '${text}', '${category}', '${path}');`;
    con.query(sql, (err, result) => {
      try {
        if (err) throw err;
        console.log("product inserted");
        res.send({ result: result });
      } catch (err) {
        console.log(err.message);
        res.send({ error: err.message });
      }
    });

  } catch (err) {
    console.error(err);
    res.send({ error: err.message })
  }
});



app.post('/delete-product', async (req, res) => {
  try {
    const productId = req.body.id;
    console.log(productId, '*****************************************')
    if (!productId) throw new Error("No product in request");
    const filter = productId;
    const sql = `DELETE FROM products.products WHERE (id = '${filter}');`;
    con.query(sql, (err, result) => {
      try {
        if (err) throw err;
        console.log("product deleted");
        res.send({ result: result });
      } catch (err) {
        console.log(err.message);
        res.send({ error: err.message });
      }
    });

  } catch (error) {
    res.send({ error });
  }
});


app.patch("/update-product", upload.single('img'), async(req: any, res) => { 
  try {
    const { name, text, category, id, selectedImage } = req.body;
    let sql = '';
    console.log( name, text, category, id, selectedImage,"*********************************************");
    if (selectedImage) {
      const path = req.file.filename;
      console.log(path," ******************************************* selected image");
      sql = `UPDATE products.products SET name='${name}', text='${text}',category='${category}',img='${path}' WHERE (id = '${id}');`;
    }
    else { sql = `UPDATE products.products SET name='${name}', text='${text}',category='${category}'WHERE (id = '${id}');`; }
    con.query(sql, (err, result) => {
      try {
        if (err) throw err;
        console.log("product updated");
        res.send({ result: result });
      } catch (err) {
        console.log(err.message);
        res.send({ error: err.message }); 
      }
    });
  } catch (err) {
    console.error(err);
    res.status(400).send({ error: err.message });
  }
});


const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  const password = process.env.MONGODB_PASSWORD;
  await mongoose.connect(`mongodb+srv://Asma1:${password}@cluster0.ct7iu.mongodb.net/priviteProjectDatabase?retryWrites=true&w=majority`);
}
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to DB!");
});


const appointmentsRoutes = require('./routes/appointmentsRoutes')
app.use('/appointments', appointmentsRoutes);

const treatmentsRoutes = require('./routes/treatmentsRoutes')
app.use('/treatments', treatmentsRoutes);

const productsRoutes = require('./routes/productsRoutes')
app.use('/products', productsRoutes);

const usersRoutes = require('./routes/usersRoutes')
app.use('/users', usersRoutes);


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});