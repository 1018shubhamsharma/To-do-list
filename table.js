var answerBlock = document.querySelectorAll(".multiplechoice");
var display     = document.getElementById("display");
var startButton = document.getElementById("startRest");
var correctAnswer
alert("gfhjk");
function generateMultiplePair(){
    var x = Math.floor(Math.random()*11);
    var y = Math.floor(Math.random()*11);
    console.log(x);
    console.log(y);
    display.textContent = x * y
    
}

generateMultiplePair();