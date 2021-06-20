var startQuizbtn = document.querySelector("#start-quiz");
var questionContainerEl = document.querySelector("#question-container");
var startEl = document.querySelector(".start");
var questionEl = document.querySelector("#question");
var answerButtonsEl = document.querySelector("#answer-buttons");

var incorrectEl = document.querySelectorAll(".incorrect");

var timerEl = document.querySelector(".timer");

var startQuizbtn2 = document.querySelector("#start-quiz2");

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
        secondsLeft -= 5;
        timerEl.innerHTML = secondsLeft;
        
    

    }

   

    setTimeout(nextQuestion, 500);

};


var secondsLeft = 50;

var startTimer = function () {
    setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;
    }, 1000)



}





// function startTime() {
//     var sec = 60;
//     function startTimer(){
//         console.log('timer suppose to go')
//         var timer = setInterval(function(){
//             sec--;
//             timerEl.innerHTML='00:'+sec;
//             if (sec < 0) {
//                 clearInterval(timer);
//                 alert("Time is up!")
//             }
//         }, 1000);
//     }

//     if (console.log("wrong")) {
//         sec -= 5;
//         timerEl.innerHTML='00:'+sec;
//     }
//     // document.getElementById('incorrect').addEventListener('click', function() {
//     //     sec -= 5;
//     //     timerEl.innerHTML='00:'+sec;
// };