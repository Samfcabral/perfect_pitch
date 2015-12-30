"use strict"

var majorChords = {
  c: ["7", "3", "2"],
  f: ["11","5","7"],
  g: ["2","9","8"],
  eb: ["10","2","1"],
  ab: ["12","7","10"],
  bb: ["1","8","11"],
  gb: ["11","1","4"],
  b: ["9","10","6"],
  db: ["4","11","1"],
  a: ["5","4","3"],
  d: ["8","6","5"],
  e: ["3","12","9"],
}


// // Function to shuffle an array
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

$(function () {

  var playF = function() {
    var f = document.createElement("audio"); 
    f.src = "audio/" + majorChords.f[0] + "-" + "4" + ".mp3";
    f.play();
    setTimeout('', 5000);
  }

  var playA = function () {
    var a = document.createElement("audio"); 
    a.src = "audio/" + majorChords.f[1] + "-" + "3" + ".mp3";
    a.play();
    setTimeout('', 5000);
  }
  
  var playC = function() {
    var z = document.createElement("audio"); 
    z.src = "audio/" + majorChords.f[2] + "-" + "3" + ".mp3";
    z.play();
    setTimeout('', 5000);
  }

var playNotes = function(a, b, c) {
    playF();
    setTimeout('', 5000);
    playA();
    setTimeout('', 5000);
    playC();
    setTimeout('', 5000);
}


//   var level = 0;
//   var note_guess;
//   var note_played;
//   var my_notes_array = [];
//   var divs_arr = [];
//   var score = 0;
//   var wrong = 0;
//   var which_octave;

//   $.get("/users_level").
//     done(function (data) {
//       level = data[0].levelId || 2;
//       $("#currentScore").html(score);
//       $("#currentLevel").html(level);
//       $('.stupe').remove();
//     });

//     $("#currentScore").html(score);
//     $("#currentLevel").html(level);


//   // setting up divs
//   for (var i = 1; i <= 12; i++) {
//     divs_arr.push($('#note' + i));
//   }

//   // function to set up images
//   var set_notes = function(level) {
//     for (var i = 0; i < level; i++) {
//       my_notes_array.push(i);
//     }

//     shuffle(my_notes_array);
    
//     //set inner HTML
//     my_notes_array.forEach(function (note, i) {
//       divs_arr[i].append("<img class='stupe' src='images/" + (my_notes_array[i] + 1) + ".png'>");
//     });

//     console.log("This is my_notes_array ",  my_notes_array);
//   };


//   var new_octave = function(){
//     console.log("IN HERE");
//     var octave = Math.floor(Math.random() * 4);
//     if (octave<2) {
//       return new_octave();
//     } else {
//       return octave;
//     }
//   };
  
//   var correct = document.createElement("audio");
//   correct.src = "audio/correct.m4a";

//   var incorrect = document.createElement("audio");
//   incorrect.src = "audio/incorrect.m4a";


//   var x = document.createElement("audio"); 
//   console.log("Running");

// // On Click of "play note"
//   $(".play").on("click", function () {
//       console.log("clicked");
//       note_played = Math.ceil(Math.random() * level);
//       which_octave = new_octave();

//       console.log("THIS IS THE OCTAVE:", which_octave);
      
//       // if (which_octave < 2) {
//       //   which_octave = Math.floor(Math.random() * 5);
//       // }
//       console.log("This is the note played " + note_played);
//        // var x = document.createElement("audio"); 
//        // console.log(x.ended)
//       x.src = "audio/" + note_played + "-" + which_octave + ".mp3"; 
//       x.play();
//       $('.stupe').remove();
//       console.log("AFTER: ",$('.stupe'));
//       my_notes_array = [];
//       set_notes(level);
//       $(x).on("ended", function() {
//         $(".replay").show();
//       });
//   });

// // On Click for each div
//   var one = document.createElement("audio");
//     $("#note1").on("click", function () {
//       console.log("note clicked");
//       one.src = "audio/" + (my_notes_array[0] + 1)  + "-" + which_octave + ".mp3";
//       one.play();
//       console.log(one.src);
//       note_guess = (my_notes_array[0] + 1);
//       console.log("Note guessed " + note_guess);
//       note_match(note_guess, note_played);
//     });

//   var two = document.createElement("audio");
//     $("#note2").on("click", function () {
//       console.log("note clicked");
//       two.src = "audio/" + (my_notes_array[1] + 1)  + "-" + which_octave + ".mp3";
//       two.play();
//       console.log(two.src);
//       note_guess = (my_notes_array[1] + 1);
//       console.log("Note guessed " + note_guess);
//       note_match(note_guess, note_played);
//     });

//   var three = document.createElement("audio");
//     $("#note3").on("click", function () {
//       console.log("note clicked");
//       three.src = "audio/" + (my_notes_array[2] + 1)  + "-" + which_octave + ".mp3";
//       three.play();
//       console.log(three.src);
//       note_guess = (my_notes_array[2] + 1);
//       console.log("Note guessed " + note_guess);
//       note_match(note_guess, note_played);
//     });


//   // function to check if note played by computer matches note played by user
//   var note_match = function (note_guess, note_played) {
//     if (note_guess === note_played) {
//       console.log("Correct!");
      
//       $(".feedback_message").html("Correct!");
//       score = score + 1;
//       $("#currentScore").html(score);
//       $("#currentLevel").html(level);
//       wrong = 0;
//       console.log("Current score " + score);
//         if (score === 5) {
//           $(".feedback_message").html("You moved to the next level!");
//           level = level + 1;
//           $.post("/users_level", {level: level})
//           $("#currentScore").html(score);
//           $("#currentLevel").html(level);
//           correct.play();
//           console.log("Current level is " + level);
//           console.log("BEFORE: ",$('.stupe'));
//           score = 0;
//         }
      
//     } else {
//       console.log("Wrong note");
//       wrong +=1;
//       $(".feedback_message").html("Incorrect!");
//       score = 0;
//       console.log("Current score " + score);
//       if (wrong === 3 && level > 2) {
//         level = level -1;
//         $.post("/users_level", {level: level});
//         wrong = 0;
//         incorrect.play();
//       }
//       $("#currentScore").html(score);
//       $("#currentLevel").html(level);
//     }
//       $('.stupe').remove();
//       console.log("AFTER: ",$('.stupe'));
//       my_notes_array = [];
//   };
});