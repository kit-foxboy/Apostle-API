module.exports = function(sequelize, DataTypes) {
  var employee = sequelize.define("empoloyee", {
    lastName: Datatypes.varchar,
    firstName:Datatypes.varchar,
    employeeNbr:Datatypes.varchar,
    department: Datatypes.varchar,
    title: Datatypes.varchar,
    cellPhone: Datatypes.varchar,

  });

  return employees;
};

var vehicles = sequelize.define("vehicles", {

  vinNbr: Datatypes.varchar,
  registrationNbr: Datatypes.varchar, 
  registrationDate: Datatypes.varchar,
  make: Datatypes.varchar,
  model: Datatypes.varchar,
  year: Datatypes.varchar,

});

return vehicles;


 




