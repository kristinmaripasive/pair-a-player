$(document).ready(function(){

var start = $("#start");
var pause = $("#pause");
var time = $("#time");
var points = $("#points");
var reset = $("#again");
var timer = 10;
var i = 0
var imageArray = []
imageArray[0] = "nba-faces-steph.jpg";
imageArray[1] = "nba-faces-kobe.jpg";
imageArray[2] = "nba-faces-kevin.jpg";
imageArray[3] = "nba-faces-james.jpg";
var cards = $("div .back");
var output = '';



start.on("click", beginTimer);
pause.on("click", pauseTimer);
reset.on("click", playAgain);


// shuffles the images function
Array.prototype.cardShuffle = function(){                       // shuffles array
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

imageArray.cardShuffle();

// places an image in the card container
var innerHTML = $(".back").html();
for(var i=0; i<imageArray.length; i++){
  innerHTML += "<img src='" + imageArray[i] + "' />";
}
$(".back").html(innerHTML);

// for (var i=0; i<imageArray.length; i++){
//   document.getElementById("cards") =  imageArray[];
//   // imageArray[i]=(i+1);
//   // document.getElementById("cards")
// });

// timer increments in seconds
function startTimer(){
  if(timer == 0){
    timer = 0;
    alert ("Game over!");
    clearInterval(timerId);
  } else {
  timer-=1;
  time.html(timer);
  return;
}

};

// timer calls increment and sets 1 second intervals
function beginTimer(){
  if(timer<10){
    return;
  } else {
    timerId = setInterval(startTimer, 1000);
  }
}

// timer gets paused
function pauseTimer(){
  clearInterval(timerId);
}

// timer gets cleared and resets to 0
function playAgain(){
  clearInterval(timerId);
  timer=10;
  time.html("10");
}

// flipping a card function
$(".card").on("click", function(){
  $(this).toggleClass("flip");
})




})
