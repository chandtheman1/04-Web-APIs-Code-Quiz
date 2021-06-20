var startQuizbtn = document.querySelector("#start-quiz");
var questionContainerEl = document.querySelector("#question-container");
var startEl = document.querySelector(".start");
var questionEl = document.querySelector("#question");
var answerButtonsEl = document.querySelector("#answer-buttons");
// var startQuizbtn2 = document.querySelector("#start-quiz2");
var timerEl = document.querySelector(".timer");


var shuffledQuestions, currentQuestionIndex

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
];


startQuizbtn.addEventListener('click', function() {
        startTimer()
        startEl.classList.add('hide');
        shuffledQuestions = questionArray.sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
        questionContainerEl.classList.remove('hide');
        setNextQuestion();
    }
     
    );

// startQuizbtn2.addEventListener('click', function() { reduceTimer()});

var secondsLeft = 20;

var startTimer = function () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;
    }, 1000)
}

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
        console.log("true");
        const correctEL = document.createElement("correct");
        correctEL.textContent = "Correct";
        answerButtonsEl.appendChild(correctEL);
        setNextQuestion();

    } else {
        console.log("wrong");
        const wrongEL = document.createElement("wrong");
        wrongEL.textContent = "Wrong";
        answerButtonsEl.appendChild(wrongEL);
    }

    // if (shuffled)
    nextQuestion();

};


// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         element.classList.add("correct")
//     } else {
//         element.classList.add("wrong")
//     }
// }

// function clearStatusClass (element) {
//     element.classList.remove('correct')
//     element.classList.remove("wrong")
// }