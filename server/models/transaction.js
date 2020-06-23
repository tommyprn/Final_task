"use strict";
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    "Transaction",
    {
      startDate: DataTypes.DATE,
      dueDate: DataTypes.DATE,
      userId: DataTypes.INTEGER,
      attachment: DataTypes.STRING,
      status: DataTypes.ENUM("Cancel", "Approved", "Pending"),
    },
    {}
  );
  Transaction.associate = function (models) {
    // associations can be defined here
    Transaction.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
      },
    });
  };
  return Transaction;
};
