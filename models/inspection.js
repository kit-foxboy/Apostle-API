module.exports = function(sequelize, DataTypes) {
  var Inspection = sequelize.define("Inspection", {
    userId: DataTypes.INTEGER,
    vehicleId: DataTypes.INTEGER,
    comments: DataTypes.STRING,
    cargo: DataTypes.STRING,
    brakes: DataTypes.STRING,
    tires: DataTypes.STRING,
    horn: DataTypes.STRING,
    endDatetime: DataTypes.DATE(6)
  });
  return Inspection;
};
