import express from 'express';
const app = express();
const port = 4000;
import axios from 'axios';

app.use(express.static('healthstore/build'));
app.use(express.json());

app.get('/get-appointments', async (req, res) => {
  //console.log("user request");
  try {
    const response = axios.get('http://localhost:3004/AppointmentData');
    const data = (await response).data;
    //console.log(data);
    res.status(200).send({data});
  } catch (error) {
    res.send({ error });
  }
});


app.post('/add-appointment',(req,res)=>{
  try {
    const appointment=req.body.appointment;
    if(!appointment) throw new Error("No appointment in request");
    //console.log('data');
    //console.log(appointment.id);

    let data= { id:appointment.id ,title: appointment.title, start:  appointment.start,end: appointment.end, name:  appointment.name, phone: appointment.phone};
    //console.log('data1111111111');
    //console.log(data);
    axios.post('http://localhost:3004/AppointmentData',data);
    res.send({message: 'Done'! });
  } catch (error) {
    res.send({ error });
  }
});



const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://Asma1:KJHwN2tNRofki2hi@cluster0.ct7iu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
}


const kittySchema = new mongoose.Schema({
  name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name);
silence.save();



app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});