"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var app = express();
app.use(cors()); // Use this after the variable declaration

var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var routes = require('./routes/routes.js')(app, fs);

var server = app.listen(3001, function () {
  console.log('listening on port %s...', server.address().port);
});