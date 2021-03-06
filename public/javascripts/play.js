


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
  var level = 2;
  var note_guess;
  var note_played;
  var my_notes_array = [];
  var divs_arr = [];
  var score = 0;
  var wrong = 0;
  var which_octave;

  $.get("/users_level").
    done(function (data) {
      level = data[0].levelId || 2;
      $("#currentScore").html(score);
      $("#currentLevel").html(level);
      $('.stupe').remove();
      // set_notes(level);
    });
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


  var new_octave = function(){
    console.log("IN HERE");
    var octave = Math.floor(Math.random() * 4);
    if (octave<2) {
      return new_octave();
    } else {
      return octave;
    }
  };
  
  var correct = document.createElement("audio");
  correct.src = "audio/correct.m4a";

  var incorrect = document.createElement("audio");
  incorrect.src = "audio/incorrect.m4a";


  var x = document.createElement("audio"); 
  console.log("Running");
// On Click of "play note"
  $(".play").on("click", function () {
      console.log("clicked");
      note_played = Math.ceil(Math.random() * level);
      which_octave = new_octave();
      console.log("THIS IS THE OCTAVE:", which_octave);
      // if (which_octave < 2) {
      //   which_octave = Math.floor(Math.random() * 5);
      // }
      console.log("This is the note played " + note_played);
       // var x = document.createElement("audio"); 
       // console.log(x.ended)
      x.src = "audio/" + note_played + "-" + which_octave + ".mp3"; 
      x.play();
      $('.stupe').remove();
      console.log("AFTER: ",$('.stupe'));
      my_notes_array = [];
      set_notes(level);
      $(".replay").hide();
      $(x).on("ended", function() {
        $(".replay").show();
      });
  });
  $(".replay").on("click", function () {
    x.play();
    $(".replay").hide();
    $(x).on("ended", function() {
      $(".replay").show();
    })
  });

// On Click for each div
  var one = document.createElement("audio");
    $("#note1").on("click", function () {
      console.log("note clicked");
      one.src = "audio/" + (my_notes_array[0] + 1)  + "-" + which_octave + ".mp3";
      one.play();
      console.log(one.src);
      note_guess = (my_notes_array[0] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
    });

  var two = document.createElement("audio");
    $("#note2").on("click", function () {
      console.log("note clicked");
      two.src = "audio/" + (my_notes_array[1] + 1)  + "-" + which_octave + ".mp3";
      two.play();
      console.log(two.src);
      note_guess = (my_notes_array[1] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
    });

  var three = document.createElement("audio");
    $("#note3").on("click", function () {
      console.log("note clicked");
      three.src = "audio/" + (my_notes_array[2] + 1)  + "-" + which_octave + ".mp3";
      three.play();
      console.log(three.src);
      note_guess = (my_notes_array[2] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
    });

  var four = document.createElement("audio");
    $("#note4").on("click", function () {
      console.log("note clicked");
      four.src = "audio/" + (my_notes_array[3] + 1)  + "-" + which_octave + ".mp3";
      four.play();
      console.log(four.src);
      note_guess = (my_notes_array[3] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
    });

  var five = document.createElement("audio");
    $("#note5").on("click", function () {
      console.log("note clicked");
      five.src = "audio/" + (my_notes_array[4] + 1)  + "-" + which_octave + ".mp3";
      five.play();
      console.log(five.src);
      note_guess = (my_notes_array[4] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
    });

  var six = document.createElement("audio");
    $("#note6").on("click", function () {
      console.log("note clicked");
      six.src = "audio/" + (my_notes_array[5] + 1)  + "-" + which_octave + ".mp3";
      six.play();
      console.log(six.src);
      note_guess = (my_notes_array[5] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
    });

  var seven = document.createElement("audio");
    $("#note7").on("click", function () {
      console.log("note clicked");
      seven.src = "audio/" + (my_notes_array[6] + 1)  + "-" + which_octave + ".mp3";
      seven.play();
      console.log(seven.src);
      note_guess = (my_notes_array[6] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
    });

  var eight = document.createElement("audio");
    $("#note8").on("click", function () {
      console.log("note clicked");
      eight.src = "audio/" + (my_notes_array[7] + 1)  + "-" + which_octave + ".mp3";
      eight.play();
      console.log(eight.src);
      note_guess = (my_notes_array[7] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
    });
  
  var nine = document.createElement("audio");
    $("#note9").on("click", function () {
      console.log("note clicked");
      nine.src = "audio/" + (my_notes_array[8] + 1)  + "-" + which_octave + ".mp3";
      nine.play();
      console.log(nine.src);
      note_guess = (my_notes_array[8] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
    });

  var ten = document.createElement("audio");
    $("#note10").on("click", function () {
      console.log("note clicked");
      ten.src = "audio/" + (my_notes_array[9] + 1)  + "-" + which_octave + ".mp3";
      ten.play();
      console.log(ten.src);
      note_guess = (my_notes_array[9] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
    });

  var eleven = document.createElement("audio");
    $("#note11").on("click", function () {
      console.log("note clicked");
      eleven.src = "audio/" + (my_notes_array[10] + 1)  + "-" + which_octave + ".mp3";
      eleven.play();
      console.log(eleven.src);
      note_guess = (my_notes_array[10] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
    });

  var twelve = document.createElement("audio");
    $("#note12").on("click", function () {
      console.log("note clicked");
      twelve.src = "audio/" + (my_notes_array[11] + 1)  + "-" + which_octave + ".mp3";
      twelve.play();
      console.log(twelve.src);
      note_guess = (my_notes_array[11] + 1);
      console.log("Note guessed " + note_guess);
      note_match(note_guess, note_played);
    });

  // function to check if note played by computer matches note played by user
  var note_match = function (note_guess, note_played) {
    if (note_guess === note_played) {
      console.log("Correct!");
      
      $(".feedback_message").html("Correct!");
      score = score + 1;
      $("#currentScore").html(score);
      $("#currentLevel").html(level);
      wrong = 0;
      console.log("Current score " + score);
        if (score === 5) {
          $(".feedback_message").html("You moved to the next level!");
          level = level + 1;
          $.post("/users_level", {level: level})
          $("#currentScore").html(score);
          $("#currentLevel").html(level);
          correct.play();
          console.log("Current level is " + level);
          console.log("BEFORE: ",$('.stupe'));
          score = 0;
        }
      
    } else {
      console.log("Wrong note");
      wrong +=1;
      $(".feedback_message").html("Incorrect!");
      score = 0;
      console.log("Current score " + score);
      if (wrong === 3 && level > 2) {
        level = level -1;
        $.post("/users_level", {level: level});
        wrong = 0;
        incorrect.play();
      }
      $("#currentScore").html(score);
      $("#currentLevel").html(level);
    }
      $('.stupe').remove();
      console.log("AFTER: ",$('.stupe'));
      my_notes_array = [];
  };
});