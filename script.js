$(document).ready(function(){

var start = $("#start");
var pause = $("#pause");
var time = $("#time");
var points = 0
var reset = $("#again");
var card = $(".card");
var timer = 20;
var i = 0
var timerId;
var imageArray = ["nba-faces-steph.jpg", "nba-faces-kobe.jpg", "nba-faces-kevin.jpg", "nba-faces-james.jpg", "nba-faces-steph.jpg", "nba-faces-kobe.jpg", "nba-faces-kevin.jpg", "nba-faces-james.jpg"];
var imageValues = [];



start.on("click", beginTimer);
pause.on("click", pauseTimer);
reset.on("click", playAgain);


// shuffles the images
Array.prototype.cardShuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

imageArray.cardShuffle();


// places an image in the card container and its ID
for(var i=0; i < imageArray.length; i++){
  $(".back").eq(i).html("<img src='" + imageArray[i] + "' />");
  // ("<img src='" + imageArray[i] + "' />")
}

//tester
$("h1").on("click", test);
function test(){
  console.log(card.find("img").attr("src"));
}


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
  if(timer<20){
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
  timer=15;
  time.html("20");

}

// card.on("click", selectCard);
//
// //selecting a card
// function selectCard() {
//   var card = $(".card");
//   $(this).toggleClass("flip");
//   var val = card.find("img").attr("src")
//   //push card value into array
//   imageArray.push(val);
// }




$(".card").on("click", function(){
  var card = $(this);
  var value = card.find("img").attr("src");
  imageValues.push(value);
  console.log(imageValues);
  card.toggleClass("flip");
    if(imageValues[imageValues.length-1] == imageValues[imageValues.length-2]){
      console.log("DID MATCH");
      imageValues = [];
      //adding points
      var pointsCount = $(".points")
      points+=1;
      pointsCount.html(points);
    } else {
      console.log("DID NOT MATCH");
      // imageValues[imageValues.length-1].children().toggleClass("flip");
      // imageValues[imageValues.length-2].children().toggleClass("flip");
    }

    // setTimeout(function(){
    //   imageArray[imageArray.length-1].toggleClass("flip");
    //   imageArray[imageArray.length-2].toggleClass("flip");
    // }, 900);



})

// flipping a card back
// card.toggleClass("flip");
// setTimeout(function(){
//   card.toggleClass("flip");
// }, 900);

//checking to see if cards match
// $(".card").on("click", function(){
//   var card = $(this);
//   var value = card.find("img").attr("src");
//   imageValues.push(value);
//   console.log(imageValues);
// card.toggleClass("flip");




// card.find("img").attr("src")

// function pairPlayer(card,val){
// if(card.innerHTML == "" && imageValues < 2){
//   if (imageValues.length) == 0){
//     imageValues.push(val);
//     imageIds.push(card.id);
//   } else if(imageValues.length == 1){
//     imageValues.push(val);
//     imageIds.push(card.id);
//     if(imageValues[0] == imageValues[1]){
//       cards_flipped +=2;
//       //Clear both arrays
//       imageValues = [];
//       imageIds = [];
//
//     }
//   }
// }
// }




})
