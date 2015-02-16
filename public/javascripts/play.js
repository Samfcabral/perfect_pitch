
// global variables
var level = 3;
var note_guess;
var my_notes_array = [];
var divs_arr = [];

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

// when user clicks "play"
$(function () {
  // setting up divs
  for (var i = 1; i <= 12; i++) {
    divs_arr.push(document.getElementById('note' + i));
  }

  // function to set up images
  var set_notes = function(level) {
    for (var i = 0; i < level; i++) {
      my_notes_array.push(i);
    }
    shuffle(my_notes_array);
    //set inner HTML
    my_notes_array.forEach(function (note, i) {
      divs_arr[i].innerHTML = "<img src='images/" + (my_notes_array[i] + 1) + ".png'>";
      });
    console.log(divs_arr);
    console.log("This is my_notes_array " + my_notes_array);

  }

  set_notes(level);
  
  var x = document.createElement("audio"); 
  console.log("Running");
  $(".play").on("click", function () {
      console.log("clicked");
      var note_played = Math.ceil(Math.random() * level);
      console.log("This is the note played " + note_played);
       // var x = document.createElement("audio"); 
       // console.log(x.ended)
      x.src = "audio/" + note_played +".mp3"; 
      x.play();
  });

  var one = document.getElementById("note1");
    $("#note1").on("click", function () {
      console.log("note clicked");
      one.src = "audio/" + (my_notes_array[0] + 1)  + ".mp3";
      console.log(one.src);
      note_guess = (my_notes_array[0] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
      one.play();
    });

  var two = document.getElementById("note2");
    $("#note2").on("click", function () {
      console.log("note clicked");
      two.src = "audio/" + (my_notes_array[1] + 1)  + ".mp3";
      console.log(two.src);
      note_guess = (my_notes_array[1] + 1);
      console.log("Note guessed " + note_guess);
      two.src.play();
    });

  var three = document.getElementById("note3");
    $("#note3").on("click", function () {
      console.log("note clicked");
      three.src = "audio/" + (my_notes_array[2] + 1)  + ".mp3";
      console.log(three.src);
      note_guess = (my_notes_array[2] + 1);
      console.log("Note guessed " + note_guess);
      three.src.play();
    });

  var four = document.getElementById("note4");
    $("#note3").on("click", function () {
      console.log("note clicked");
      four.src = "audio/" + (my_notes_array[3] + 1)  + ".mp3";
      console.log(four.src);
      note_guess = (my_notes_array[3] + 1);
      console.log("Note guessed " + note_guess);
      four.src.play();
    });

  // function to check if note played by computer matches note played by user
  var note_match = function (note_guess, note_played) {
    if (note_guess === note_clicked) {
      console.log("Correct!");
      //update score
        //if applicable update level
      //show "correct note" message
    } else {
      console.log("You clicked the wrong note");
      //update score to zero
      //show "incorrect note" message
    }
    //setup_notes(level);
  };

 
});