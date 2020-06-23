"use strict";
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define(
    "Song",
    {
      title: DataTypes.STRING,
      year: DataTypes.INTEGER,
      thumbnail: DataTypes.STRING,
      attachment: DataTypes.STRING,
      artistId: DataTypes.INTEGER,
    },
    {}
  );
  Song.associate = function (models) {
    // associations can be defined here
    Song.belongsTo(models.Artist, {
      foreignKey: {
        name: "artistId",
      },
    });
  };
  return Song;
};
