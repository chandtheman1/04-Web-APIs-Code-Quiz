
var tableEl = document.querySelector(".highscores");
var highScoreTable = JSON.parse(localStorage.getItem("highscore"));
var goBackBtn = document.querySelector(".go-back");
var clearHighScoresEl = document.querySelector(".clear-highscores");

// newHighScoreTable sorts in descending order so that highest score starts with 0 index
var newHighScoreTable = highScoreTable.sort((a, b) => {
    return b.score - a.score;
});

// for loop that creates and appends the scores
for (var i = 0; i < newHighScoreTable.length; i++) {
    var divTag = document.createElement("div");
    var tdTag = document.createElement("td");

    tableEl.appendChild(divTag);

    divTag.textContent = i + 1 + ". " + newHighScoreTable[i].name + " - " + newHighScoreTable[i].score;

};

//button that goes back to main screen
goBackBtn.addEventListener("click", function () {
    window.location.replace("./index.html")
});
//button that clears cache
clearHighScoresEl.addEventListener("click", function () {
    var highScores = [];
    localStorage.setItem("highscore", JSON.stringify(highScores));
    location.reload();
});




