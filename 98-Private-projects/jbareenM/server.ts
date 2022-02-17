const express = require("express");
const app = express();

const port = 3001;

app.use(express.static("ibring/build"));

interface userIF {
    email: string;
    pass: string;
}

const users: Array<userIF> = [
    { email: "a@a", pass: "1" },
    { email: "b@a", pass: "1" }
];

app.get("/", (req, res) => {
    res.send("hello world!");
});

app.get("/is-users", (req, res) => {
    const { email, pass } = req.query;
    const found = users.find(user => (user.email === email && user.pass === pass));
    if (found) {
        res.send({ ok: true, user: found });
    }
    else {
        res.send({ ok: false, user: found });
    }
})

app.get("/get-users", (req, res) => {
    res.send({ ok: true, users: users });
})

app.listen(port, () => {
    console.log(`app is listening to port ${port}`);
})