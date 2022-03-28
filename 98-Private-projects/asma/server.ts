import express from 'express';
import Category from './model/schema/categoriesModel';
import Product from './model/schema/productsModel';
import Treatment from './model/schema/treatmentsModel';
const multer = require('multer');

const cookieParser = require('cookie-parser');
const app = express();
const port = 4001;
require('dotenv').config();

app.use(express.static('healthstore/build'));
app.use(cookieParser());
app.use(express.json());


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './healthstore/public/images')
  },
  filename: function (req, file, cb) {
    cb(null, '../images/'+Date.now()+file.originalname );
  }
})
var upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req:any, res) => {
  try {
    const {name,text,category} = req.body;
    console.log(req.file)
    const path = req.file.filename;
    const event = new Product({ name: name, text: text,category:category ,img: path });
    event.save();    
    res.send({message: req.body,ok:"upload"});
  } catch (error) {
    res.send({ error });
  }
})

app.patch('/update-product',  upload.single('image'),async (req:any, res) => {
  try {
    const {id,name,text,category} = req.body;
    let update={};
    if (req.file){
       const path = req.file.filename;
      // console.log(req.file)
       update = { name: name, text: text, category:category, img: path };
    }
    else{ update = { name: name, text: text, category:category };}
    const filter = { _id: id };
    //update the DB
    let doc = await Product.findOneAndUpdate(filter, update);
    res.send({ ok: true, doc });
  } catch (err) {
    console.error(err);
    res.status(400).send({ error: err.message });
  }
});

app.post('/upload-treatment', upload.single('image'), (req:any, res) => {
  try {
    const {name,text} = req.body;
    console.log(req.file)
    const path = req.file.filename;
    const event = new Treatment({ name: name, text: text,img: path });
    event.save();    
    res.send({message: req.body,ok:"upload"});
  } catch (error) {
    res.send({ error });
  }
})

app.patch('/update-treatment',  upload.single('image'),async (req:any, res) => {
  try {
    const {id,name,text} = req.body;
    let update={};
    if (req.file){
       const path = req.file.filename;
      // console.log(req.file)
       update = { name: name, text: text, img: path };
    }
    else{ update = { name: name, text: text};}
    const filter = { _id: id };
    //update the DB
    let doc = await Treatment.findOneAndUpdate(filter, update);
    res.send({ ok: true, doc });
  } catch (err) {
    console.error(err);
    res.status(400).send({ error: err.message });
  }
});

app.post('/upload-category', upload.single('image'), (req:any, res) => {
  try {
    const {name} = req.body;
    console.log(req.file)
    const path = req.file.filename;
    const event = new Category({ name: name,img: path });
    event.save();    
    res.send({message: req.body,ok:"upload"});
  } catch (error) {
    res.send({ error });
  }
})


app.patch('/update-category',  upload.single('image'),async (req:any, res) => {
  try {
    const {id,name} = req.body;
    let update={};
    if (req.file){
       const path = req.file.filename;
      // console.log(req.file)
       update = { name: name, img: path };
    }
    else{ update = { name: name};}
    const filter = { _id: id };
    //update the DB
    let doc = await Category.findOneAndUpdate(filter, update);
    res.send({ ok: true, doc });
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

const categoriesRoutes = require('./routes/categoriesRoutes')
app.use('/categorys', categoriesRoutes);

const usersRoutes = require('./routes/usersRoutes')
app.use('/users', usersRoutes);


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});