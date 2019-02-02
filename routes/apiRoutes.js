var db = require("../models");

module.exports = function (app) {
  // Get all examples

  app.get("/api/employees", function (req, res) {

    // res.send("get working");
    db.Employee.findAll({}).then(function(dbemployees) {
      res.json(dbemployees);
    });
  });

  // Create a new example
  app.post("/api/employees", function(req, res) {
    // res.send("post working");
    db.Employee.create(req.body).then(function(dbemployees) {
      res.json(dbemployees);
    });
  });

  // Delete an example by id
  //   app.delete("/api/employee/:id", function(req, res) {
  //     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //       res.json(dbExample);
  //     });
  //   });

  app.get("/api/vehicles", function(req, res) {
    // res.send("get vehicles");
    db.Vehicle.findAll({}).then(function(dbvehicles) {
      res.json(dbvehicles);
    });
  });

  // Create a new example
  app.post("/api/vehicles", function(req, res) {
    // res.send("post vehciles");
    db.Vehicle.create(req.body).then(function(dbvehicles) {
      res.json(dbvehicles);
    });
  });

  // Delete an example by id
  //   app.delete("/api/employee/:id", function(req, res) {
  //     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //       res.json(dbExample);
  //     });
  //   });
};
