const mysql = require('mysql');
const express = require("express");
const app = express();
const port = 3001;
require("dotenv").config();

//routes for data

//static files
app.use(express.json());
// app.use(express.static("client/build"));

//data
const con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "12345678"


    // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345678'
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected to mysql!");
});

function uid() {
    return Math.floor(Math.random() * 1e6);
}

app.post('/sqlTest', async (req, res) => {
    const { name, age } = req.body;
    console.log("sqlTest");
    try {
        var sql = `INSERT INTO fishes.fish (fishID, fish_name, fish_age) VALUES (${uid()}, '${name}', ${age})`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            res.send({ ok: true, results: result });
        });
    } catch (error) {
        res.send({ ok: false });
    }
})

app.post('/sqlTest_LessThan', async (req, res) => {
    const { age } = req.body;
    console.log("sqlTest_LessThan");
    try {
        var sql = `SELECT * FROM fishes.fish WHERE fish_age < ${age}`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.send({ ok: true, results: result });
        });
    } catch (error) {
        res.send({ ok: false });
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
