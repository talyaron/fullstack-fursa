import express from 'express';
//import axios from 'axios';
//import Appointment from './model/schema/appointmentsModel';

const app = express();
const port = 4000;
require('dotenv').config();

app.use(express.static('healthstore/build'));
app.use(express.json());

// app.get('/get-appointments', async (req, res) => {
//   //console.log("user request");
//   try {
//     const response = axios.get('http://localhost:3004/AppointmentData');
//     const data = (await response).data;
//     //console.log(data);
//     res.status(200).send({data});
//   } catch (error) {
//     res.send({ error });
//   }
// });


// app.post('/add-appointment',(req,res)=>{
//   try {
//     const appointment=req.body.appointment;
//     if(!appointment) throw new Error("No appointment in request");
//     //console.log('data');
//     //console.log(appointment.id);

//     let data= { id:appointment.id ,title: appointment.title, start:  appointment.start,end: appointment.end, name:  appointment.name, phone: appointment.phone};
//     //console.log('data1111111111');
//     //console.log(data);
//     axios.post('http://localhost:3004/AppointmentData',data);
//     res.send({message: 'Done'! });
//   } catch (error) {
//     res.send({ error });
//   }
// });

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


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});