import express from 'express';
//import axios from 'axios';
//import Appointment from './model/schema/appointmentsModel';

const app = express();
const port = 4000;
require('dotenv').config();

app.use(express.static('healthstore/build'));
app.use(express.json());

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

// const facial = {
//   name: 'Facial Treatment', img: 'https://5.imimg.com/data5/VW/YX/GLADMIN-63916043/herbal-face-clean-up-treatment-500x500.png',
//   text: "Skin care is the range of practices that support skin integrity, enhance its appearance and relieve skin conditions. Practices that enhance appearance include the use of cosmetics, botulinum, exfoliation, fillers, laser resurfacing, microdermabrasion, peels, retinol therapy and ultrasonic skin treatment."
// };


// const treatmentSchema = new mongoose.Schema({
//   title: String,
//   text: String,
//   img: String
// });


//const Treatment = mongoose.model('treatments', treatmentSchema);
// const hopiCandles = new Treatment({
//   title: 'Hopi Ear Candles', img: 'https://saltandcrystal.com/wp-content/uploads/2019/03/viber-image-3_E.jpg',
//   text: "Do you suffer from conditions related to your ear, nose or throat? Hopi ear candles are an ancient and natural therapy that can offer relief from issues such as sinus problems, compacted ear wax, tinnitus and headaches. Hopi ear candle treatments can also help to reduce inflammation in the ears and sinuses, relieve the symptoms of hay fever, rebalance your body’s natural flow, and generally calm and relax you when life is stressful. "
// });
// const cupping =new Treatment({
//   title: 'Cupping Therapy', img: 'https://media.wsimag.com/attachments/193b9b637c3a7dfcb27b91a14ed0d47878d88ca1/store/fill/1090/613/4621d5afb058b57330ba40e4d8ba23534743e5c727f3e6d06d5eceda4452/Cupping-therapy.jpg',
//   text: "Cupping therapy is an ancient form of alternative medicine in which a therapist puts special cups on your skin for a few minutes to create suction. People get it for many purposes, including to help with pain, inflammation, blood flow, relaxation and well-being, and as a type of deep-tissue massage."
// });

// const facial= new Treatment({
//   title: 'Facial Treatment', img: 'https://5.imimg.com/data5/VW/YX/GLADMIN-63916043/herbal-face-clean-up-treatment-500x500.png',
//   text: "Skin care is the range of practices that support skin integrity, enhance its appearance and relieve skin conditions. Practices that enhance appearance include the use of cosmetics, botulinum, exfoliation, fillers, laser resurfacing, microdermabrasion, peels, retinol therapy and ultrasonic skin treatment."
// });

// cupping.save();


const appointmentsRoutes = require('./routes/appointmentsRoutes')
app.use('/appointments', appointmentsRoutes);

const treatmentsRoutes = require('./routes/treatmentsRoutes')
app.use('/treatments', treatmentsRoutes);


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});