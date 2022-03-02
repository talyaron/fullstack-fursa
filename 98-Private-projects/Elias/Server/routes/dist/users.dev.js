"use strict";

var userRoutes = function userRoutes(app, fs) {
  // variables
  var dataPath = './data/users.json'; // helper methods

  var readFile = function readFile(callback) {
    var returnJson = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var filePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : dataPath;
    var encoding = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'utf8';
    fs.readFile(filePath, encoding, function (err, data) {
      if (err) {
        throw err;
      }

      callback(returnJson ? JSON.parse(data) : data);
    });
  };

  var writeFile = function writeFile(fileData, callback) {
    var filePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : dataPath;
    var encoding = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'utf8';
    fs.writeFile(filePath, fileData, encoding, function (err) {
      if (err) {
        throw err;
      }

      callback();
    });
  }; // READ


  app.get('/users', function (req, res) {
    // fs.readFile(dataPath, 'utf8', (err, data) => {
    //     if (err) {
    //         throw err;
    //     }
    //     res.send(JSON.parse(data));
    // });
    res.send({
      Name: 'Elias from server'
    });
  }); // CREATE

  app.post('/users', function (req, res) {
    readFile(function (data) {
      // Note: this isn't ideal for production use. 
      // ideally, use something like a UUID or other GUID for a unique ID value
      var newUserId = Date.now().toString(); // add the new user

      data[newUserId.toString()] = req.body;
      writeFile(JSON.stringify(data, null, 2), function () {
        res.status(200).send('new user added');
      });
    }, true);
  }); // UPDATE

  app.put('/users/:id', function (req, res) {
    readFile(function (data) {
      // add the new user
      var userId = req.params["id"];
      data[userId] = req.body;
      writeFile(JSON.stringify(data, null, 2), function () {
        res.status(200).send("users id:".concat(userId, " updated"));
      });
    }, true);
  }); // DELETE

  app["delete"]('/users/:id', function (req, res) {
    readFile(function (data) {
      // delete the user
      var userId = req.params["id"];
      delete data[userId];
      writeFile(JSON.stringify(data, null, 2), function () {
        res.status(200).send("users id:".concat(userId, " removed"));
      });
    }, true);
  });
};

module.exports = userRoutes;