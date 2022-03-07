"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var routes = require('./routes/routes.js')(app, fs);

var server = app.listen(3001, function () {
  console.log('listening on port %s...', server.address().port);
}); //mongoose

var mongoose = require('mongoose');

main()["catch"](function (err) {
  return console.log(err);
});

function main() {
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(mongoose.connect('mongodb://localhost:27017/test'));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

var kittySchema = new mongoose.Schema({
  name: String
}); //   const password = process.env.MONGODB_PASSWORD;
//   console.log(password)