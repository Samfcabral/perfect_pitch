"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("levels", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      level_number: {
        type: DataTypes.INTEGER
      },
      notes_id: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("levels").done(done);
  }
};