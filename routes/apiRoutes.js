var db = require("../models");
const apiKey =
  process.env.apiKey ||
  "150EBDF52F40A4CB43F649C4D9E0744081E60B88BFB3FCE86524F73613C2A65A";

module.exports = function(app) {
  // Get all examples
  app.post("/api/get-employees", function(req, res) {
    if (!req.body.apiKey || req.body.apiKey !== apiKey) {
      return res.json({ error: "Invalid API key" });
    }
    db.Employee.findAll({}).then(function(dbemployees) {
      res.json(dbemployees);
    });
  });

  // Create a new example
  app.post("/api/employees", function(req, res) {
    if (!req.body.apiKey || req.body.apiKey !== apiKey) {
      return res.json({ error: "Invalid API key" });
    }
    if (!req.body.employeeNbr || req.body.employeeNbr === "") {
      return res.json({ error: "Employee number required." });
    }
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

  app.post("/api/get-vehicles", function(req, res) {
    if (!req.body.apiKey || req.body.apiKey !== apiKey) {
      return res.json({ error: "Invalid API key" });
    }
    db.Vehicle.findAll({}).then(function(dbvehicles) {
      res.json(dbvehicles);
    });
  });

  app.post("/api/vehicles", function(req, res) {
    if (!req.body.apiKey || req.body.apiKey !== apiKey) {
      return res.json({ error: "Invalid API key" });
    }
    if (!req.body.vinNbr || req.body.vinNbr === "") {
      return res.json({ error: "VIN Number required." });
    }
    db.Vehicle.create(req.body).then(function(dbVehicle) {
      res.json(dbVehicle);
    });
  });

  app.post("/api/get-inspection", function(req, res) {
    if (!req.body.apiKey || req.body.apiKey !== apiKey) {
      return res.json({ error: "Invalid API key" });
    }
    db.Inspection.findAll({}).then(function(dbinspection) {
      res.json(dbinspection);
    });
  });

  // Create a new example
  app.post("/api/inspection", function(req, res) {
    if (!req.body.apiKey || req.body.apiKey !== apiKey) {
      return res.json({ error: "Invalid API key" });
    }
    if (!req.body.userId || parseInt(req.body.userId) === 0) {
      return res.json({ error: "User ID required." });
    }
    db.Inspection.create(req.body).then(function(dbinspection) {
      res.json(dbinspection);
    });
  });
  //api login
  app.post("/api/login", function(req, res) {
    if (!req.body.apiKey || req.body.apiKey !== apiKey) {
      return res.json({ error: "Invalid API key" });
    }
    if (
      !req.body.userName ||
      !req.body.password ||
      req.body.userName === "" ||
      req.body.password === ""
    ) {
      return res.json({ error: "Username and password required." });
    }
    db.User.findOne({
      where: {
        userName: req.body.userName,
        password: req.body.password
      }
    }).then(function(dbuser) {
      if (dbuser === null) {
        res.json({ error: "no user found" });
      } else {
        res.json(dbuser);
      }
    });
  });

  app.post("/api/get-user", function(req, res) {
    if (!req.body.apiKey || req.body.apiKey !== apiKey) {
      return res.json({ error: "Invalid API key" });
    }
    db.User.findAll({}).then(function(dbuser) {
      res.json(dbuser);
    });
  });

  // Create a new example
  app.post("/api/user", function(req, res) {
    if (!req.body.apiKey || req.body.apiKey !== apiKey) {
      return res.json({ error: "Invalid API key" });
    }
    if (
      !req.body.userName ||
      !req.body.password ||
      req.body.userName === "" ||
      req.body.password === ""
    ) {
      return res.json({ error: "Username and password required." });
    }
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
