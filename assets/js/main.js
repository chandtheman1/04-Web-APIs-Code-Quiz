var startQuizbtn = document.querySelector("#start-quiz");
var questionContainerEl = document.querySelector("#question-container");
var startEl = document.querySelector(".start");
var questionEl = document.querySelector("#question");
var answerButtonsEl = document.querySelector("#answer-buttons");

var incorrectEl = document.querySelectorAll(".incorrect");

var timerEl = document.querySelector(".timer");

var enterScoreEL = document.querySelector(".score");
var finalScoreEL = document.querySelector(".final-score");


var submitBtn = document.querySelector(".submit");
var nameInputEl = document.querySelector(".name");


var shuffledQuestions, currentQuestionIndex

var startTime;

var secondsLeft = 30;

var highScores = [];

//randomize the question
var setNextQuestion = function() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

//removes the default question and answer template from the index.html
function resetState () {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
}


function nextQuestion () {
    currentQuestionIndex++;
    setNextQuestion();
}

// display the question and assigns buttons to the answers 

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


// Captures the click and determines if the answer does/does not have the dataset.correct = true


function selectAnswer (e) {
    var selectedButton = e.target;
    if (selectedButton.dataset.correct == "true") {

        const correctEL = document.createElement("correct");
        correctEL.textContent = "Correct";
        answerButtonsEl.appendChild(correctEL);
        

    } else {

        const wrongEL = document.createElement("wrong");
        wrongEL.textContent = "Wrong";
        answerButtonsEl.appendChild(wrongEL);
        
        if (secondsLeft < 5) {
            secondsLeft = 0;
            timerEl.innerHTML = secondsLeft;
        } else {
            secondsLeft -= 10;
            timerEl.innerHTML = secondsLeft;
        }
         
    }
    
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        setTimeout(nextQuestion, 500);
    } else {
        setTimeout(enterScore(), 500);
        
    }
    
};

//Enter Score that starts the ending screen

function enterScore () {

    questionContainerEl.classList.add("hide");
    enterScoreEL.classList.remove("hide2");
    clearInterval(startTime);
 
    if (secondsLeft < 0) {
        secondsLeft = 0
    }
    finalScoreEL.textContent = "Your final score is " + secondsLeft;
    
}

// Timer function 

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
 
// Start button that initialises the timer and randomizing the question array
startQuizbtn.addEventListener('click', function() {

    startTimer();
    startEl.classList.add('hide');
    shuffledQuestions = questionArray.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove('hide');
    setNextQuestion();
    return
}
);

// function prevents the localstorage being reset from var highScores = []; that was declared in the beginning

function getHighScores () {
    var getPastScores = localStorage.getItem("highscore");

    if (getPastScores === null) {
        highScores = [];
    } else {
        highScores = JSON.parse(localStorage.getItem("highscore"));
    };

};

// function that stores scores into LocalStorage 

submitBtn.addEventListener("click", function () {

    var userInput = nameInputEl.value;
    var userScore = secondsLeft;

    getHighScores();

    highScores.push({name: userInput, score: userScore});

    localStorage.setItem("highscore", JSON.stringify(highScores));
    window.location.replace("./highscores.html")

});


// Question array so that the quiz can be expanded by simply adding more into the object


var questionArray = [
    {
        question: "String Values must be enclosed within ______ when being assigned to variables.",
        answers: [
            { text: "quotes", correct: true },
            { text: "commas", correct: false },
            { text: "curly brackets", correct: false },
            { text: "parentheses", correct: false },
        ]
    },

    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: "strings", correct: false },
            { text: "booleans", correct: false },
            { text: "alerts", correct: true },
            { text: "numbers", correct: false },
        ]
    },

    {
        question: "The condition in an if / else statement is enclosed within _____.",
        answers: [
            { text: "quotes", correct: false },
            { text: "curly brackets", correct: false },
            { text: "parentheses", correct: true },
            { text: "square brackets", correct: false },
        ]
    },
];
