var startQuizbtn = document.querySelector("#start-quiz");
var startQuizbtn2 = document.querySelector("#start-quiz2");
var timerEl = document.querySelector(".timer");

startQuizbtn.addEventListener('click', function() { startTimer()});

startQuizbtn2.addEventListener('click', function() { reduceTimer()});


var secondsLeft = 20;

var startTimer = function () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;


    }, 1000)
}

var reduceTimer = function () {
    timerEl.textContent = secondsLeft - 10;

}

var setNextQuestion = function() {

}

