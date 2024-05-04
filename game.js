
var colors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

$(document).keypress(function(){

    if (!started){

        $("#level-title").text("Level 0");

        nextSequence();

        started = true;
    }

});

$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

})

function  nextSequence() {

    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = colors[nextSequence()];
    
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(75).fadeOut(75).fadeIn(75);

    playSound(randomChosenColour);

}

function playSound(name){
    
        var sounds = new Audio("sounds/" + name + ".mp3");

        sounds.play();
}

function animatePress(currentColor){

    $(".btn " + currentColor).addClass("pressed");

    setTimeout(function () {

        $("#" + currentColor).removeClass("pressed");

      }, 100);
}
