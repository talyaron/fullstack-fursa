const express = require('express');
const app = express();
const port = 3001;

app.use(express.json())

app.post('/login', (req, res) => {
    console.log('/login');
    const { email, password } = req.body;
    try {
        console.log(email, password);
        res.send({ ok: true });
    } catch (error) {
        res.send({ ok: false });
    }
})

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})