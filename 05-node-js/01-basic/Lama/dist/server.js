// console.log('Hi all 2tre');
// const x = 3;
// console.log(x*4);
// console.log(process.env.USER);
// declare function require(name:string);
var path = require('path');
var express = require('express');
var app = express();
var port = 3000;
//routes for data
//static files
// const dirPath = path.join(__dirname, '../public');
// console.log(dirPath)
// app.use(express.static('dirPath'));
app.use(express.static('public'));
//data
app.get('/getadat/all-users', function (req, res) {
    res.send('Hello World!');
});
app.get('/all', function (req, res) {
    console.log(req);
    res.send('Hello World! all');
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
