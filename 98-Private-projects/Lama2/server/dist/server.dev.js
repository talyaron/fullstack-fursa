"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/lama', function (req, res) {
  res.send("Hi,Lama");
}); // const routes = require('./routes/routes.js')(app, fs);

var server = app.listen(3001, function () {
  console.log('listening on port %s...', server.address().port);
});