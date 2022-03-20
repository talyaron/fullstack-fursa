"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var mongoose = require('mongoose');

require('dotenv').config();

var password = process.env.MONGODB_PASSWORD;
var app = express();
app.use(cors()); // Use this after the variable declaration

var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var routes = require('./routes/routes.js')(app, fs);

main()["catch"](function (err) {
  return console.log(err);
});

function main() {
  var password;
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          password = process.env.MONGODB_PASSWORD;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect("mongodb+srv://eliasrenawi:".concat(password, "@cluster0.yp2sn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected to DB!");
});
var kittySchema = new mongoose.Schema({
  name: String
}); //the collection

var Kitten = mongoose.model('Kitten', kittySchema);
var mitzy = new Kitten({
  name: 'Mitzy'
});
console.log(mitzy.name);
mitzy.save().then(function (res) {
  console.log(res);
});
var server = app.listen(3001, function () {
  console.log('listening on port %s...', server.address().port);
});