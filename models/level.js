"use strict";

module.exports = function(sequelize, DataTypes) {
  var level = sequelize.define("level", {
    level_number: DataTypes.INTEGER,
    notes_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // this.hasMany(models.notes)
      }
    }
  });

  return level;
};
