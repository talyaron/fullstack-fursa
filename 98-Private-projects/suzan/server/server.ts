import express from 'express';
const app = express();
const port = 4000;
import axios from 'axios';

app.use(express.static('../client/build'));

app.get('/get-user' , (req, res) => {
  console.log('user-request')
  res.status(202).send({name:'suzan', id:12345})
})

app.get('/get-classes', async (req, res) => {
  console.log('get classes - server');
  try{
    const response = await axios.get('http://localhost:3004/schoolClasses');
    const data = response.data;
    console.log(data);
    res.status(200).send(data);
  }
  catch (error) {
    console.info(error)
    res.send({error})
  }

})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});