module.exports = function (sequelize, DataTypes) {

  var Vehicle = sequelize.define("Vehicle", {

    vinNbr: DataTypes.STRING,
    registrationNbr: DataTypes.STRING,
    registrationDate: DataTypes.STRING,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.STRING,

  
  },
  {
    timestamps: false
  });



return Vehicle;
};