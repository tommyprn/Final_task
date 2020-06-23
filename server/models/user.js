"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: DataTypes.ENUM("Male", "Female"),
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      role: DataTypes.BOOLEAN,
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
    User.hasOne(models.Transaction);
  };
  return User;
};
