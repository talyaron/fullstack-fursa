import express from 'express';
const app = express();
const port = 3000;

app.use(express.static('public'))


app.get('/get-user', (req, res) => {


    res.send({ Data: "mohamed" })
})

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//