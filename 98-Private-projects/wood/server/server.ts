declare function require(name:string);
require('dotenv').config();
const mysql = require("mysql");

import axios from 'axios';
import Order from './model/schema/orderSchema';
import product from './model/schema/productSchema';
import Raw from './model/schema/rawSchema';
import { loginStatus } from './routes/login';
const express = require('express');
const cookieParser=require('cookie-parser')
const app = express();
const port = 4003;


export const con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "Mona100%",

  // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345678'
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  // con.query("use test", (err, result, fields) => {
  //   if (err) throw err;
  //   console.log("Using test");
  // });
});

// app.get('/get-wood-type', (req, res) => {
//   const woods = [{type:'pine wood', height:70,width:70,thick:70}, {type:'insulation', height:70,width:70,thick:70},{type:'multyLayer', height:70,width:70,thick:70}];

//   res.send(woods)
// })
app.use(express.static('client/build'));
app.use(cookieParser())
app.use(express.json());
app.use(loginStatus)
app.post('/register',async (req,res)=>{
  try{
    const {name,email,phone,password}=req.body;
    if(!name||!email||!password) throw 'ivalid field values'
    const sql = `INSERT INTO woodstore.users(name,email,phone,password) VALUES ('${name}','${email}','${phone}','${password}');`;

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
    catch(error:any){
        res.status(400).send({error:error.message})
      }

})

// app.get('/get-orders',async (req,res)=>{
//   try {
//    const response= await axios.get('http://localhost:3004/userOrder') 
//    const {data}=response;
//   //  console.log(data)
//     res.status(200).send(data)
//   } catch (error) {
//     console.info(error);
//     res.send({ error });
//   }
// })
// app.get('/get-raws',async (req,res)=>{
//   try {
//    const response= await axios.get('http://localhost:3004/woods') 
//    const {data}=response;
//   //  console.log(data)
//     res.status(200).send(data)
//   } catch (error) {
//     console.info(error);
//     res.send({ error });
//   }
// })
// app.post('/add-orders',(req,res)=>{
//   try{
//     const {orderObj}=req.body;
//     console.log(orderObj)
//     if(!orderObj) throw new Error("no order")
//     axios.post('http://localhost:3004/userOrder',orderObj)

//     res.send({ ok: true });

//   }
//   catch(error){
//     res.send({ error: error.message });

//   }

// })

// app.delete('/delete-order',(req,res)=>{
//   try{
//   axios.delete(`http://localhost:3004/userOrder`)
//   }
//   catch(error){
//     res.send({ error: error.message });

//   }
// })

//mongoose
// const mongoose = require("mongoose");

// main().catch((err) => console.log(err));

// const db = mongoose.connection;




// async function main() {
//   const password=process.env.MONGODB_PASSWORD;
//   // console.log(password)
//   await mongoose.connect(`mongodb+srv://Mona1:${password}@cluster0.qlk4d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
// }

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//   console.log("connected to DB!");
// });

// const kittySchema = new mongoose.Schema({
//   name: String,
//   address:{
//     city:String
//   }
// });

// const RawSchema=new mongoose.Schema({
// name:String,
// imageUrl:String,
// pricePerMeter:Number,

// });
// const OrderSchema=new mongoose.Schema({
//   woodName: String,
//   woodlength: Number,
//   amount: Number,
//   price:Number,
//   id: Number,
//   color:String,
//   width:Number,
//   thick:Number,
//   doorType:String,
// });

//the collection
// const Kitten = mongoose.model('Kitten', kittySchema);
// // const Raw=mongoose.model('Raw',RawSchema)
// // const Order=mongoose.model('Order',OrderSchema)

// const mitzy = new Kitten({ name: 'Mitzy' ,address:{city:"Nazareth"}});
// // console.log(mitzy.name);
// // mitzy.save()
// async function getKittens(){
// const kitten=await Kitten.find({address:{city:"Nazareth"}})
// console.log(kitten)
// }

// app.get('/get-all-kittens',async (req,res)=>{
//   const kittens=await getKittens();
//   res.send(kittens);
// })

// app.post('/add-Raw-Material',async (req,res)=>{
//   try{
//     const raw=req.body;
//     console.log(raw)
//     const newRaw=new Raw(raw);
//     await newRaw.save().then((res)=>{
//       console.log(res);
//     });
//     res.send({val:"OK"})
//   }catch(error:any){
//     res.status(400).send({error:error.message})
//   }
// })
// app.get('/get-Raw-Material',async (req,res)=>{
//   try{
//   const Raws=await Raw.find({});
//   // console.log(Raws)
//   res.status(200).send(Raws)
// }
// catch (error) {
//   console.info(error);
//   res.send({ error });
// }

// })
// app.patch('/update-raw',async(req,res)=>{
//   try{
//     console.log(req.body)
//     const{name,pricePerMeter,id}=req.body;
//     const filter={_id:id};
//     console.log(pricePerMeter)
//     const update={name:name,pricePerMeter:pricePerMeter}
//     let doc = await Raw.findOneAndUpdate(filter, update);
//     res.send({ ok: true, doc });
//   } catch (err) {
//     console.error(err);
//     res.status(400).send({ error: err.message });
//   }
// })
// app.post('/delete-raw',async (req,res)=>{
//   try{
//     const {id}=req.body;
//     const filter={_id:id};
//     console.log(filter)
//     let doc=await Raw.deleteOne(filter);
//     res.send({ok:true,doc});
//   }catch(err){
//     console.error(err)
//     res.status(400).send({error:err.message})
//   }
// })

const orderRoute=require('./routes/orderRoute')
app.use('/order',orderRoute)

const rawRoute=require('./routes/rawRoute')
app.use('/raw',rawRoute)

const userRoute=require('./routes/userRoute')
app.use('/user',userRoute)

const productRoute=require('./routes/productRoute')
app.use('/product',productRoute) 

// app.post('/add-order',async (req,res)=>{
//   try{
//     const order=req.body;
//     console.log(order)
//     const newOrder=new Order(order);
//     await newOrder.save().then((res)=>{
//       console.log(res);
//     });
//     res.send({val:"OK"})
//   }catch(error:any){
//     res.status(400).send({error:error.message})
//   }
// })
// app.get('/get-order',async (req,res)=>{
//   try{
//   const orders=await Order.find({});
//   // console.log(Raws)
//   res.status(200).send(orders)
// }
// catch (error) {
//   console.info(error);
//   res.send({ error });
// }

// })
// app.patch('/update-order',async(req,res)=>{
//   try{
//   const {_id,temp}=req.body;
//   console.log(req.body)
//   const filter={_id:_id};
//   const update={amount:temp};
//   console.log(update)
//   console.log(filter)
//   let doc = await Order.findOneAndUpdate(filter, update);
//   res.send({ ok: true, doc });
//   }catch(error){
//     console.info(error);
//     res.send({error});
//   }

// })
// app.post('/delete-order',async(req,res)=>{
//   try{
//     const {id}=req.body;
//     const filter={_id:id};
//     console.log(filter)
//     let doc=await Order.deleteOne(filter);
//     res.send({ok:true,doc});
//   }catch(err){
//     console.error(err)
//     res.status(400).send({error:err.message})
//   }
  
// })
//console.log(process.env.USER);
app.get('/',(req,res)=>{
    console.log(req);
    res.send('Hello World! all');
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  