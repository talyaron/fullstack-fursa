"use strict";

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var _this = void 0;

require('dotenv').config();

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var fs = require('fs');

var mongoose = require('mongoose');

var internal = require('stream');

app.use(express["static"]("client/build"));
main()["catch"](function (err) {
  return console.log(err);
});

function main() {
  return __awaiter(this, void 0, void 0, function () {
    var password;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          password = process.env.MONGODB_PASSWORD;
          console.log(password);
          return [4
          /*yield*/
          , mongoose.connect("mongodb+srv://Lama:" + password + "@cluster0.bve7t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")];

        case 1:
          _a.sent();

          return [2
          /*return*/
          ];
      }
    });
  });
}

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected to DB!");
});
var kittySchema = new mongoose.Schema({
  name: String,
  address: {
    city: String
  }
});
var CourseSchema = new mongoose.Schema({
  name: String,
  cost: Number,
  participants: Number,
  hours: Number,
  lessons: Number
});
var Kitten = mongoose.model('Kitten', kittySchema);
var Course = mongoose.model('Course', CourseSchema);
var gucci = new Kitten({
  name: 'Gucci',
  address: {
    city: "Haifa"
  }
});
var groupCourse = new Course({
  name: 'group course',
  cost: 1000,
  participants: 10,
  hours: 5,
  lessons: 10
});
console.log(gucci.name);
console.log(groupCourse.cost); // 'Silence'
// async function getKittens(){
//     const kittens =await Kitten.find({name:"Gucci"});
//     const city =await Kitten.find({address:{city:"Haifa"}});
//     console.log(kittens);
//     console.log(city)
// }

function getKitens() {
  return __awaiter(this, void 0, Promise, function () {
    var kittens, err_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          return [4
          /*yield*/
          , Kitten.find({})];

        case 1:
          kittens = _a.sent();
          return [2
          /*return*/
          , kittens];

        case 2:
          err_1 = _a.sent();
          console.error(err_1);
          return [2
          /*return*/
          , false];

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}

app.get('/get-all-kitens', function (req, res) {
  return __awaiter(_this, void 0, void 0, function () {
    var kittens;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , getKitens()];

        case 1:
          kittens = _a.sent();
          res.send(kittens);
          return [2
          /*return*/
          ];
      }
    });
  });
});

function getCourses() {
  return __awaiter(this, void 0, void 0, function () {
    var course, hours;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , Course.find({
            name: "group course"
          })];

        case 1:
          course = _a.sent();
          return [4
          /*yield*/
          , Course.find({
            hours: 5
          })];

        case 2:
          hours = _a.sent();
          console.log(course);
          console.log(hours);
          return [2
          /*return*/
          ];
      }
    });
  });
}

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