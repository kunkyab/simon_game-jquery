var userClickedPattern = [];
var gamePattern = [];
var buttonColors= ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random()*4);
  
  var randomChosenColor = buttonColors[randomNumber];


gamePattern.push(randomChosenColor);

var b = gamePattern[0];


$("#"+b).fadeOut(1).fadeIn(100);
playSound(b);

//button thats cllick
$(".btn").on("click",function (event) {
  
  $(event.target).fadeOut(1).fadeIn(100);
  playSound(event.target.id);

  //console.log(event.target.id);
  animatePress(event.target.id);

 // console.log(event.currentTarget);
  var result = handler(event.target.id);
  userClickedPattern.push(result);
//console.log(userClickedPattern);
});





function handler(userChosenColor) {
  
  this.userChosenColor = userChosenColor;
 return userChosenColor;
}

function playSound(b) {
  var a = new Audio("sounds\\"+b+".mp3");
a.play();
}

function animatePress(currentColor) {
  
 
 
    $("#"+currentColor).addClass("pressed");

    setTimeout(() => {
      $("#"+currentColor).removeClass("pressed");
    }, 100);
   // console.log("free tibet");
  };



}









$(document).on("keydown",function (event){
 nextSequence();
  })

