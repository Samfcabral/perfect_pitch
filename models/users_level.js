"use strict";

module.exports = function(sequelize, DataTypes) {
  var users_level = sequelize.define("users_level", {
    user_id: DataTypes.INTEGER,
    level_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // this.hasMany(models.users)
        // this.hasMany(models.level)
      }
    }
  });

  return users_level;
};
