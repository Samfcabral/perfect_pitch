"use strict";

module.exports = function(sequelize, DataTypes) {
  var users_level = sequelize.define("users_level", {
    userId: DataTypes.INTEGER,
    levelId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        this.belongsTo(models.users);
        this.belongsTo(models.level);
      }
    }
  });

  return users_level;
};
