module.exports = function (sequelize, DataTypes) {

  var vehicle = sequelize.define("Vehicle", {

    vinNbr: DataTypes.STRING,
    registrationNbr: DataTypes.STRING,
    registrationDate: DataTypes.STRING,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.STRING,

  });
  return vehicle;
}