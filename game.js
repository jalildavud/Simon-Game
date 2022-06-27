gamePattern = []
userClickedPattern = []
buttonColours = ["red", "blue", "green", "yellow"]

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/"+randomChosenColour+".mp3");
  audio.play();
  gamePattern.push(randomChosenColour);
}
$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
});

function playSound() {
  var audio = new Audio("sounds/"+userChosenColour+".mp3");
  audio.play();
}


function animatePress(currentColour) {

  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");

  }, 100);
}

var started = false;

//2. Create a new variable called level and start at level 0.
var level = 0;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).click(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
