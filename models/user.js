"use strict";

var bcrypt = require("bcrypt");
var salt = bcrypt.genSaltSync(10);
var passport = require("passport");
var passportLocal = require("passport-local");

module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    email: { 
      type: DataTypes.STRING, 
      unique: true, 
      validate: {
        len: [3, 30],
      }
    },
    password_digest: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: true
      }
  },
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    points: {
      type: DataTypes.INTEGER
    }
  }, 
  {
    instanceMethods: {
      checkPassword: function (password) {
        return bcrypt.compareSync(password, this.password_digest);
      }
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        this.hasOne(models.users_level);
      },
      findByEmail: function (email) {
        return this.find({
          where: {
            email: email
          }
        });
      },
      encryptPassword: function (password) {
        var salt = bcrypt.genSaltSync(13);
        var hash = bcrypt.hashSync(password, salt);
        return hash;
      },
      createSecure: function (email, password, name, age, error, success) {
        var hash = this.encryptPassword(password);
        this.create({
          email: email,
          password_digest: hash,
          name: name,
          age: age
        })
        .then(function (user) {
          console.log("YES!! HASH FUNCTION RAN")
          success(null, user, {message: "logged in"});
         },
        function (err) {
          console.log("ERROR RUNNING HASH")
          console.log(arguments)
          console.log(err)
          error(null, false, {message: "something went wrong"});
        });
      },
      authenticate: function (email, password, done) {
        this.findByEmail(email)
        .then(function (user) {
          if (user && user.checkPassword(password)) {
            done(null, user);
          } else {
            done(null, false, {message: "oops"});
          }
        },
        function (err) {
            done(err)
        })
      }
    }
  });
  passport.use(new passportLocal.Strategy(
    {
      usernameField: 'user[email]',
      passwordField: 'user[password]',
      passReqToCallback : true
    },
    function (req, email, password, done) {
      console.log("Authenticating");
      users.authenticate(email, password, done);
    }
  ))
  return users;
};
