"use strict";

module.exports = function(sequelize, DataTypes) {
  var notes = sequelize.define("notes", {
    note_name: DataTypes.STRING,
    note_url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // this.belongsTo(models.level)
      }
    }
  });

  return notes;
};
