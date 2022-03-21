"use strict";

rfce;

var path = require("path");

var express = require('express');

var app = express();
var port = 4000;
app.use(express["static"]('client/build')); //routes for data
//static files
// // const dirPath = path.join(__dirname, '../public');
// console.log(dirPath)
// app.use(express.static(dirPath));
//data

app.get('/get-all-users', function (req, res) {
  var users = [{
    id: 1,
    name: 'John'
  }, {
    id: 2,
    name: 'Mary'
  }];
  res.send(users);
});
app.get('/', function (req, res) {
  console.log(req);
  res.send('Hello World! all');
});
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});