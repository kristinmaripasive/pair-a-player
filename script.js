$(document).ready(function(){

var start = $("#start");
var pause = $("#pause");
var time = $("#time");
var points = $("#points");
var reset = $("#again");
var timer = 0;
var i = 0
// var imageArray = ["nba-faces-steph.jpg", "nba-faces-kobe.jpg", "nba-faces-kevin.jpg", "nba-faces-james.jpg"];



start.on("click", beginTimer);
pause.on("click", pauseTimer);
reset.on("click", playAgain);


function startTimer(){
  timer+=1;
  time.html(timer);
};


function beginTimer(){
  if(timer>0){
    return;
  } else {
    timerId = setInterval(startTimer, 1000);
  }
}

function pauseTimer(){
  clearInterval(timerId);
}

function playAgain(){
  clearInterval(timerId);
  timer=0;
  time.html("0");
}

$(".card").on("click", function(){
  $(this).toggleClass("flip");
})




})
