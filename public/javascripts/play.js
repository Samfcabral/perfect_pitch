
// global variables
var level = 12;
var note_number;
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

  // looping through to set click handlers 
  // for (var i = 0; i < level; i++) {
  //   divs_arr[i].onclick = function(event) {
  //     note_match(note_number, my_notes_array[i]);
  //   };
  // }

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
  }

  set_notes(level);
  
  var x = document.createElement("audio"); 
  console.log("Running");
  $(".play").on("click", function () {
      console.log("clicked");
      var note_played = Math.ceil(Math.random() * level);
      console.log(note_played);
       // var x = document.createElement("audio"); 
       // console.log(x.ended)
      x.src = "audio/" + note_played +".mp3"; 
      x.play();
  })



  $(".notes").on("click", function () {
      console.log("note clicked");

    });

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
    //setup_notes(level);
  };

  // // looping through to set click handlers 
  // for (var i = 0; i < level; i++) {
  //   divs[i].onclick = function(event) {
  //     note_match(note_number, my_notes_array[i]);
  //   };
  // }


});