$(document).ready(function(){
// ACA - you have around ten images. You might want to move them to an img folder
// and access them with "img/hoop.jpg" or whatever. If you were working with
// thousands of images, you'd want that for sure.
var start = $("#start");
var pause = $("#pause");
var time = $("#time");
var points = 0;
var reset = $("#again");
var card = $(".card");
var timer = 20;
var i = 0;
var timerId;
var imageArray = ["nba-faces-steph.jpg", "nba-faces-kobe.jpg", "nba-faces-kevin.jpg", "nba-faces-james.jpg", "nba-faces-steph.jpg", "nba-faces-kobe.jpg", "nba-faces-kevin.jpg", "nba-faces-james.jpg"];
var imageValues = [];

//event listeners
start.on("click", function(){
  beginTimer();
  $(".overlay-container").remove();
});
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
}


// timer increments in seconds
function startTimer(){
  if(timer == 0){
    timer = 0; // ACA - This confuses me some. It says if timer is zero,
              // set it to zero. Or am i missing something?
    alert ("Game over!");
    clearInterval(timerId);
  } else {
  timer-=1;
  time.html(timer);
  return; // ACA - You don't need a return unless it returns a value. This doesn't
          // hurt anything, though.
  }
};

// timer calls increment and sets 1 second intervals
function beginTimer(){
  if(timer<20){ // ACA - does this cover beginning the timer if it's running?
    return;
  } else {
    timerId = setInterval(startTimer, 1000);
  }
}

// timer gets paused
function pauseTimer(){ // ACA - Why not just use clearInterval? Do you think
                      // you might want to expand this?
  clearInterval(timerId);
}

// timer gets cleared and resets to 0
function playAgain(){
  clearInterval(timerId);
  timer=15;
  time.html("20");
  document.location.reload(true);
}

//main game function
$(".card").on("click", function(){

  var card = $(this);
  var value = card.find("img").attr("src");
  imageValues.push(value);
  card.toggleClass("flip");
  if(imageValues.length == 3){ // ACA - why is 3 special?
    console.log(imageValues);
      if(imageValues[0] == imageValues[1]){
        console.log("DID MATCH");

        //adding points
        var pointsCount = $(".points")
        points+=1;
        pointsCount.html(points);

    } else {
      console.log("DID NOT MATCH");
        card.siblings(".flip").removeClass("flip"); //removes cards that have a class of flip since did not match
    }
      imageValues = [imageValues[2]];
    }
      winGame(); // ACA -- is there a losing condition?
  })

//checks if user has flipped all cards and won the game

function winGame(){ // ACA - perhaps this is just me being "old-school"
                    // but I'd move this above your main body with all
                    // all of its other function dfinition friends
  var isFlipped = $(".card").filter(".flip").length;
  console.log(isFlipped);
  if(isFlipped === 8){
    alert("You won the game!");
  } else {
    console.log("false");
  }

}


})
