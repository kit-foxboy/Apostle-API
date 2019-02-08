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

  app.get("/api/inspection", function(req, res) {
    // res.send("get vehicles");
    db.Inspection.findAll({}).then(function(dbinspection) {
      res.json(dbinspection);
    });
  });
 
  // Create a new example
  app.post("/api/inspection", function(req, res) {
    // res.send("post vehciles");
    db.Inspection.create(req.body).then(function(dbinspection) {
      res.json(dbinspection);
    });
  });
  app.get("/api/user", function(req, res) {
    // res.send("get vehicles");
    db.User.findAll({}).then(function(dbuser) {
      res.json(dbuser);
    });
  });
 
  // Create a new example
  app.post("/api/user", function(req, res) {
    // res.send("post vehciles");
    db.User.create(req.body).then(function(dbuser) {
      res.json(dbuser);
    });
  });
  // Delete an example by id
  //   app.delete("/api/employee/:id", function(req, res) {
  //     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //       res.json(dbExample);
  //     });
  //   });
};
