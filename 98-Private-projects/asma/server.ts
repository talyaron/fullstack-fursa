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
    console.log(data);
    res.status(200).send({data});
  } catch (error) {
    res.send({ error });
  }
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});