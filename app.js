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
passport.serializeUser(function(user, done){
  console.log("SERIALIZED JUST RAN!");
  done(null, user.id);
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
  console.log(req.users);
  res.render("index", {currentUser: req.users});
});

// WHEN SOMEONE WANTS THE SIGNUP PAGE
app.get("/register", function (req, res) {
   if (!req.users) {
    res.render("users/register", {currentUser: req.users});
  } else {
    res.redirect("/", {currentUser: req.users});
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
    if (req.users) {
      console.log("App Login Get");
    res.redirect("/");
  } else {
    console.log("App Login Get Else");
    res.render("users/login", {currentUser: req.users});
  }
});

// AUTHENTICATING A USER
app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

app.get("/logout", function (req, res) {
  // LOG OUT
  req.logout();
  res.redirect("/");
});

app.get("/fail", function (req, res) {
  res.render("site/fail");
});

// Function to shuffle array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// global variables
var level = 1;
var note_number;
var my_notes_array = [];
var divs = [];

// setting up all possible divs such that divs are called divs[0] through divs[11]
for (var i = 1; i < 12; i++) {
  divs.push(document.getElementById('note' + i));
}

// function to randomly play a note based on level
var setup_notes = function (level) {
  var note_played = Math.ceil(Math.random() * level);
  note_number = note_played;
  console.log(note_number);
}

// function to set up images
var set_notes = function (level) {
  for (var i = 0; i < level; i++) {
    my_notes_array.push(i);
  }
  //set inner HTML
  shuffle(my_notes_array);
  for (var i = 0; i < level; i++) {
    divs[i].innerHTML = "<img src=/images/" + my_notes_array[i] + ".png/>";
  }
}

// function to check if note played by computer matches note played by user
var note_match = function (note_number, note_clicked) {
  if (note_number === note_clicked) {
    //update score
      //if applicable update level
    //show "correct note" message
  } else {
    //update score to zero
    //show "incorrect note" message
  }
  setup_notes(level);
};

// looping through to set click handlers 
for (var i = 0; i < level; i++) {
  divs[i].onclick = function(event) {
    note_match(note_number, my_notes_array[i]);
  };
}


// CLICK ON "PLAY NOTE" BUTTON ON HOME PAGE
  // On click ("play")
    // hide "play note" button
    // check what level user on
    // display note options (setup notes function maybe?)
    // randomly play a note (audibly based on user level)
    // wait for user click

  // On click of a note
    //check to see if it matches "play note"
    // if yes
      // update scoreboard (# of accurate consecutive guesses)
        // if applicable update user level
      // display "correct" message (ideally an audio file)
      // display "play note" button
    // if no
      // scoreboard = 0
      // display "incorrect" message (audio file)
      // display "play note" button




// db.sequelize.sync().then(function() {
//   var server = app.listen(process.env.PORT || 3000, function() {
//     console.log(new Array(51).join("*"));
//     console.log("\t LISTENING ON: \n\t\t localhost:3000");
//     console.log(new Array(51).join("*")); 
//   });
// });
