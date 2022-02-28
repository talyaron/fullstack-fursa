import express from 'express';
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/get-user', (req, res) => {
    console.log('get user!')
    res.status(200).send({ name: 'Hello World!' });
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});