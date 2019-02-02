module.exports = function (sequelize, DataTypes) {

  var employee = sequelize.define("Employee", {
    lastName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    employeeNbr: DataTypes.STRING,
    department: DataTypes.STRING,
    title: DataTypes.STRING,
    cellPhone: DataTypes.STRING,

  });

  return employee;
};