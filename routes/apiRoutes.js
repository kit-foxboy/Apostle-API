var db = require("../models");

module.exports = function(app) {
  // Get all examples

  app.get("/api/employees", function(req, res) {
    db.employees.findAll({}).then(function(dbemployees) {
      res.json(dbemployees);
    });
  });

  // Create a new example
  app.post("/api/employees", function(req, res) {
    db.employees.create(req.body).then(function(dbemployees) {
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
    db.vehicles.findAll({}).then(function(dbvehicles) {
      res.json(dbvehicles);
    });
  });

  // Create a new example
  app.post("/api/vehicles", function(req, res) {
    db.vehicles.create(req.body).then(function(dbemployee) {
      res.json(dbemployee);
    });
  });

  // Delete an example by id
  //   app.delete("/api/employee/:id", function(req, res) {
  //     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //       res.json(dbExample);
  //     });
  //   });
};
