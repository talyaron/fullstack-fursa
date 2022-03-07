"use strict";

// import other routes
var userRoutes = require('./users');

var appRouter = function appRouter(app, fs) {
  // default route
  app.get('/', function (req, res) {
    res.send('welcome to the development api-server');
  });
  app.get('get-user', function (req, res) {
    res.send({
      Name: 'Elias from sarver'
    });
  }); // // other routes

  userRoutes(app, fs);
};

module.exports = appRouter;