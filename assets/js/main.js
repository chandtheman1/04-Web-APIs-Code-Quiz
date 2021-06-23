var startQuizbtn = document.querySelector("#start-quiz");
var questionContainerEl = document.querySelector("#question-container");
var startEl = document.querySelector(".start");
var questionEl = document.querySelector("#question");
var answerButtonsEl = document.querySelector("#answer-buttons");

var incorrectEl = document.querySelectorAll(".incorrect");

var timerEl = document.querySelector(".timer");

var enterScoreEL = document.querySelector(".score");
var finalScoreEL = document.querySelector(".final-score");

var startQuizbtn2 = document.querySelector("#start-quiz2");
var submitBtn = document.querySelector(".submit");
var nameInputEl = document.querySelector(".name");


var shuffledQuestions, currentQuestionIndex






// startQuizbtn2.addEventListener('click', function() { reduceTimer()});


// var reduceTimer = function () {
//     timerEl.textContent = secondsLeft - 10;

// }

var setNextQuestion = function() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function nextQuestion () {
    currentQuestionIndex++;
    setNextQuestion();
}


function showQuestion(questionArray) {
    questionEl.innerText = questionArray.question;
    questionArray.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        };
        if (answer.correct == false ) {
            button.classList.add("incorrect");
        };
        button.addEventListener("click", selectAnswer);
        answerButtonsEl.appendChild(button);
    });
    
};

function resetState () {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
}




function selectAnswer (e) {
    var selectedButton = e.target;
    if (selectedButton.dataset.correct == "true") {

        const correctEL = document.createElement("correct");
        correctEL.textContent = "Correct";
        answerButtonsEl.appendChild(correctEL);
        

    } else {
        console.log("wrong");
        const wrongEL = document.createElement("wrong");
        wrongEL.textContent = "Wrong";
        answerButtonsEl.appendChild(wrongEL);
        
        if (secondsLeft < 5) {
            secondsLeft = 0;
            timerEl.innerHTML = secondsLeft;
        } else {
            secondsLeft -= 5;
            timerEl.innerHTML = secondsLeft;
        }
         
    }
    
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        setTimeout(nextQuestion, 500);
    } else {
        enterScore();
        
    }
    
};



function enterScore () {

    questionContainerEl.classList.add("hide");
    enterScoreEL.classList.remove("hide2");
    clearInterval(startTime);
 
    if (secondsLeft < 0) {
        secondsLeft = 0
    }
    finalScoreEL.textContent = "Your final score is " + secondsLeft;
    
}

var startTime;

var secondsLeft = 30;


var startTimer = function () {

    startTime = setInterval(function() {
         secondsLeft--;
         timerEl.textContent = secondsLeft;
 
         if (secondsLeft <= 0 ) {
             clearInterval(startTime);
             enterScore();
         }  
 
 
     }, 1000)
 }
 


// startTime = setInterval(function() {
//     secondsLeft--;
//     timerEl.textContent = secondsLeft;
    
//     if (secondsLeft <= 0) {
//         clearInterval(startTime);
//         enterScore();
//     }  
// }, 1000);





startQuizbtn.addEventListener('click', function() {

  

    startTimer();
    startEl.classList.add('hide');
    shuffledQuestions = questionArray.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove('hide');

    
    setNextQuestion();


}
);




var highScores = [];

function getHighScores () {
    var getPastScores = localStorage.getItem("highscore");

    if (getPastScores === null) {
        highScores = [];
    } else {
        highScores = JSON.parse(localStorage.getItem("highscore"));
    };
};



submitBtn.addEventListener("click", function () {

    var userInput = nameInputEl.value;
    var userScore = secondsLeft;

    getHighScores();

    highScores.push({name: userInput, score: userScore});

    localStorage.setItem("highscore", JSON.stringify(highScores));
    window.location.replace("./highscores.html")

});




var questionArray = [
    {
        question: "what is 2 + 2",
        answers: [
            { text: "4", correct: true },
            { text: "22", correct: false },
            { text: "33", correct: false },
            { text: "44", correct: false },
        ]
    },

    {
        question: "what is 4 + 4",
        answers: [
            { text: "8", correct: true },
            { text: "22", correct: false },
            { text: "33", correct: false },
            { text: "44", correct: false },
        ]
    },

    {
        question: "what is 5 + 5",
        answers: [
            { text: "10", correct: true },
            { text: "22", correct: false },
            { text: "33", correct: false },
            { text: "44", correct: false },
        ]
    },
];
