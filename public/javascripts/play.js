
// global variables
var level = 2;
var note_guess;
var note_played;
var my_notes_array = [];
var divs_arr = [];
var score = 0;

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
    $("#currentScore").html(score);
    $("#currentLevel").html(level);
  // setting up divs
  for (var i = 1; i <= 12; i++) {
    //divs_arr.push(document.getElementById('note' + i));
    divs_arr.push($('#note' + i));
  }

  // function to set up images
  var set_notes = function(level) {
    for (var i = 0; i < level; i++) {
      my_notes_array.push(i);
    }
    shuffle(my_notes_array);
    //set inner HTML
    my_notes_array.forEach(function (note, i) {
      divs_arr[i].append("<img class='stupe' src='images/" + (my_notes_array[i] + 1) + ".png'>");
      });
    console.log("This is my ", divs_arr);
    console.log("This is my_notes_array " + my_notes_array);
  };

  set_notes(level);
  
// On Click of "play note"
  var x = document.createElement("audio"); 
  console.log("Running");
  $(".play").on("click", function () {
      console.log("clicked");
      note_played = Math.ceil(Math.random() * level);
      console.log("This is the note played " + note_played);
       // var x = document.createElement("audio"); 
       // console.log(x.ended)
      x.src = "audio/" + note_played +".mp3"; 
      x.play();
  });

// On Click for each div
  var one = document.createElement("audio");
    $("#note1").on("click", function () {
      console.log("note clicked");
      one.src = "audio/" + (my_notes_array[0] + 1)  + ".mp3";
      console.log(one.src);
      note_guess = (my_notes_array[0] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
      one.play();
    });

  var two = document.createElement("audio");
    $("#note2").on("click", function () {
      console.log("note clicked");
      two.src = "audio/" + (my_notes_array[1] + 1)  + ".mp3";
      console.log(two.src);
      note_guess = (my_notes_array[1] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
      two.play();
    });

  var three = document.createElement("audio");
    $("#note3").on("click", function () {
      console.log("note clicked");
      three.src = "audio/" + (my_notes_array[2] + 1)  + ".mp3";
      console.log(three.src);
      note_guess = (my_notes_array[2] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
      three.play();
    });

  var four = document.createElement("audio");
    $("#note4").on("click", function () {
      console.log("note clicked");
      four.src = "audio/" + (my_notes_array[3] + 1)  + ".mp3";
      console.log(four.src);
      note_guess = (my_notes_array[3] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
      four.play();
    });

  var five = document.createElement("audio");
    $("#note5").on("click", function () {
      console.log("note clicked");
      five.src = "audio/" + (my_notes_array[4] + 1)  + ".mp3";
      console.log(five.src);
      note_guess = (my_notes_array[4] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
      five.play();
    });

  var six = document.createElement("audio");
    $("#note6").on("click", function () {
      console.log("note clicked");
      six.src = "audio/" + (my_notes_array[5] + 1)  + ".mp3";
      console.log(six.src);
      note_guess = (my_notes_array[5] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
      six.play();
    });

  var seven = document.createElement("audio");
    $("#note7").on("click", function () {
      console.log("note clicked");
      seven.src = "audio/" + (my_notes_array[6] + 1)  + ".mp3";
      console.log(seven.src);
      note_guess = (my_notes_array[6] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
      seven.play();
    });

  var eight = document.createElement("audio");
    $("#note8").on("click", function () {
      console.log("note clicked");
      eight.src = "audio/" + (my_notes_array[7] + 1)  + ".mp3";
      console.log(eight.src);
      note_guess = (my_notes_array[7] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
      eight.play();
    });
  
  var nine = document.createElement("audio");
    $("#note9").on("click", function () {
      console.log("note clicked");
      nine.src = "audio/" + (my_notes_array[8] + 1)  + ".mp3";
      console.log(nine.src);
      note_guess = (my_notes_array[8] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
      nine.play();
    });

  var ten = document.createElement("audio");
    $("#note10").on("click", function () {
      console.log("note clicked");
      ten.src = "audio/" + (my_notes_array[9] + 1)  + ".mp3";
      console.log(ten.src);
      note_guess = (my_notes_array[9] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
      ten.play();
    });

  var eleven = document.createElement("audio");
    $("#note11").on("click", function () {
      console.log("note clicked");
      eleven.src = "audio/" + (my_notes_array[10] + 1)  + ".mp3";
      console.log(eleven.src);
      note_guess = (my_notes_array[10] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
      eleven.play();
    });

  var twelve = document.createElement("audio");
    $("#note12").on("click", function () {
      console.log("note clicked");
      twelve.src = "audio/" + (my_notes_array[11] + 1)  + ".mp3";
      console.log(twelve.src);
      note_guess = (my_notes_array[11] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
      twelve.play();
    });

  // function to check if note played by computer matches note played by user
  var note_match = function (note_guess, note_played) {
    if (note_guess === note_played) {
      console.log("Correct!");
      $(".feedback_message").html("Correct!");
      score = score + 1;
      $("#currentScore").html(score);
      $("#currentLevel").html(level);
      console.log("Current score " + score);
        if (score === 5) {
          level = level + 1;
          console.log("Current level is " + level);
          console.log("BEFORE: ",$('.stupe'));
          $('.stupe').remove();
          console.log("AFTER: ",$('.stupe'));
          my_notes_array = [];
          set_notes(level);
          score = 0;
        }
    } else {
      console.log("Wrong note");
      $(".feedback_message").html("Incorrect!");
      score = 0;
      console.log("Current score " + score);
      $("#currentScore").html(score);
      $("#currentLevel").html(level);
    }
  };
});