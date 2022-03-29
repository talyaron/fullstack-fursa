import Appointment from "../model/schema/appointmentsModel";

const express = require('express');
const router = express.Router();


async function getAppointments(): Promise<any> {
  try {
    const appointments = await Appointment.find({});
    return appointments;
  } catch (err: any) {
    console.error(err)
    return false;
  }
}     

router.get('/get-appointments', async (req, res) => {
  const appointments = await getAppointments();
  res.send(appointments);
})


router.post('/add-appointment', (req, res) => {
  try {
    const {appointment} = req.body;
    //console.log(req.body);
    if (!appointment) throw new Error("No appointment in request");
    const event = new Appointment({ title: appointment.title, start: appointment.start, end: appointment.end, name: appointment.name, phone: appointment.phone });
    event.save();
    res.send({ message: 'Done',appointment:appointment });
  } catch (error) {
    res.send({ error });
  }
});

router.delete('/delete-appointment', async (req, res) => {
  try {
    // console.log(req.body ,'/////////////////////////////');
    const appointment = req.body;
    if (!appointment) throw new Error("No appointment in request");
    const filter = { title: appointment.title, start: appointment.start, end: appointment.end, name: appointment.name, phone: appointment.phone };
    //console.log(filter);
    let doc = await Appointment.deleteOne(filter);
    res.send({ message: 'Deleted' ,filter:filter});
  } catch (error) {
    res.send({ error });
  }
});


module.exports = router;


