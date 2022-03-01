
var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern =[];

var level=0;
var started=false;

$(document).keydown(function(){

  if(!started){

    $("#level-title").text("Level" + level);
    nextSequence();
    started= true;

  }
  
  });



$(".btn").click(function (){

  var userChosenColour = $(this).attr("id");
  
  userClickedPattern.push(userChosenColour);
  //console.log(userClickedPattern);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  
  });

function nextSequence() {
  var randomNumber= Math.floor(Math.random() * 4);
  
   //console.log(randomNumber);


var randomChosenColour = buttonColours[randomNumber];

gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColour);

}

function playSound(name){

  var audio = new Audio("sounds/" + name + ".mp3");

  audio.play();
  
}

function animatePress(currentColour){

$("#" + currentColour).addClass("pressed");

setTimeout(function()  {

  $("#" + currentColour).removeClass("pressed");
  
}, 100);


}

