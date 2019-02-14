module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define(
    "Employee",
    {
      userID: DataTypes.INTEGER,
      lastName: DataTypes.STRING,
      firstName: DataTypes.STRING,
      employeeNbr: DataTypes.STRING,
      department: DataTypes.STRING,
      title: DataTypes.STRING,
      cellPhone: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );

  return Employee;
};
