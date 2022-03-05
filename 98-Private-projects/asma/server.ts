import express from 'express';
import axios from 'axios';
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
const appointmentSchema = new mongoose.Schema({
  title: String,
  start: Date,
  end: Date,
  name: String,
  phone: String
});

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


const Appointment = mongoose.model('appointment', appointmentSchema);
//const event = new Appointment({ title: "Hopi Candles", name: 'asma', start: new Date(2022, 2, 26, 5), end: new Date(2022, 2, 26, 6), phone: "123" });
//console.log(event.title);
//event.save();

async function getAppointments(): Promise<any> {
  try {
    const appointments = await Appointment.find({});
    return appointments;
  } catch (err: any) {
    console.error(err)
    return false;
  }
}

app.get('/get-appointments', async (req, res) => {
  const appointments = await getAppointments();
  res.send(appointments);
})


app.post('/add-appointment', (req, res) => {
  try {
    const appointment = req.body.appointment;
    console.log(req.body);
    if (!appointment) throw new Error("No appointment in request");
    const event = new Appointment({ title: appointment.title, start: appointment.start, end: appointment.end, name: appointment.name, phone: appointment.phone });
    event.save();
    res.send({ message: 'Done' });
  } catch (error) {
    res.send({ error });
  }
}); 

app.post('/delete-appointment',async (req, res)=>{
  try {
    const appointment = req.body;
    if (!appointment) throw new Error("No appointment in request");
    const filter = { title: appointment.title, start: appointment.start, end: appointment.end, name: appointment.name, phone: appointment.phone };
    console.log(filter);
    let doc = await Appointment.deleteOne(filter);
    console.log('Deleted!!');
    res.send({ message: 'Deleted' });
  } catch (error) {
    res.send({ error });
  }
});





app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});