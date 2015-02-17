var express = require("express"),
  bodyParser = require("body-parser"),
  db = require("./models"),
  passport = require("passport"),
  session = require("cookie-session"),
  request = require("request"),
  app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
//End of dependencies

 
//Session
app.use(session( {
  secret: 'thisismysecretkey',
  name: 'chocolate chip',
  // this is in milliseconds
  maxage: 3600000
  })
);

// get passport started
app.use(passport.initialize());
app.use(passport.session());

/*
SERIALizING
Turns relevant user data into a string to be stored as a cookie
*/
passport.serializeUser(function(users, done){
  console.log("SERIALIZED JUST RAN!");
  done(null, users.id);
});

/*
DeSERIALizing
Taking a string and turns into an object
  using the relevant data stored in the session
*/
passport.deserializeUser(function(id, done){
  console.log("DESERIALIZED JUST RAN!");
  db.users.find({
      where: {
        id: id
      }
    })
    .then(function(users){
      done(null, users);
    },
    function(err) {
      done(err, null);
    });
});

// HOME PAGE
app.get("/", function (req, res) {
  console.log("THE CURRENT USER IS: ",req.user);
  res.render("index", {currentUser: req.user});
});

// WHEN SOMEONE WANTS THE SIGNUP PAGE
app.get("/register", function (req, res) {
   if (!req.user) {
    res.render("users/register", {currentUser: req.user});
  } else {
    res.redirect("/", {currentUser: req.user});
  }
});

// WHEN SOMEONE  SUBMITS A SIGNUP PAGE
app.post("/users", function (req, res) {
  console.log("POST /users");
  var newUser = req.body.users;
  console.log("New User:", newUser);
  // CREATE a user and secure their password
  db.users.createSecure(newUser.email, newUser.password_digest, newUser.name, newUser.age, 
    function () {
      // if a user fails to create make them signup again
      res.redirect("/");
    },
    function (err, users) {
      // when successfully created log the user in
      // req.login is given by the passport
      req.login(users, function(){
        // after login redirect to home
        console.log("Id: ", users.id)
        res.redirect("/");
      });
    })
});

// WHEN SOMEONE WANTS THE LOGIN PAGE
app.get("/login", function (req, res) {
    if (req.user) {
      console.log("App Login Get");
    res.redirect("/");
  } else {
    console.log("App Login Get Else");
    res.render("users/login", {currentUser: req.user});
  }
});

// AUTHENTICATING A USER
app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

// When user clicks logout
app.get("/logout", function (req, res) {
  // LOG OUT
  req.logout();
  res.redirect("/");
});

// For error pages.
app.get("/fail", function (req, res) {
  res.render("site/fail");
});


app.post("/users_level", function (req, res) {
  console.log(req.body, req.user)
  db.users_level.findOrCreate({
    where: {
      userId: req.user.id
    }
  }).then(function (level) {
    level[0].updateAttributes({
      levelId: req.body.level
    }).then(function (level){
      res.json(level);
    });
  });
});

app.get("/users_level", function (req, res) {
  db.users_level.findOrCreate({
    where: {
      userId: req.user.id
    }
  }).then(function (level) {
    res.json(level);
  });
});



db.sequelize.sync().then(function() {
  var server = app.listen(process.env.PORT || 3000, function() {
    console.log(new Array(51).join("*"));
    console.log("\t LISTENING ON: \n\t\t localhost:3000");
    console.log(new Array(51).join("*")); 
  });
});
