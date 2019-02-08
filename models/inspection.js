module.exports = function (sequelize, DataTypes) {

  var Inspection = sequelize.define("Inspection", {

    userName: DataTypes.STRING,
    comments: DataTypes.STRING,
    cargo: DataTypes.STRING,
    brakes: DataTypes.STRING,
    tires: DataTypes.STRING,
    horn: DataTypes.STRING,

  
  },
  {
    timestamps: false
  });



return Inspection;
};