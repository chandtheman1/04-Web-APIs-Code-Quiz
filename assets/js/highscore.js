
var tableEl = document.querySelector(".highscores");
var highScoreTable = JSON.parse(localStorage.getItem("highscore"));
var goBackBtn = document.querySelector(".go-back");
var clearHighScoresEl = document.querySelector(".clear-highscores");


var newHighScoreTable = highScoreTable.sort((a, b) => {
    return b.score - a.score;
});

for (var i = 0; i < newHighScoreTable.length; i++) {
    var divTag = document.createElement("div");
    var tdTag = document.createElement("td");

    tableEl.appendChild(divTag);

    divTag.textContent = i + 1 + ". " + newHighScoreTable[i].name + " - " + newHighScoreTable[i].score;

};

goBackBtn.addEventListener("click", function () {
    window.location.replace("./index.html")
});

clearHighScoresEl.addEventListener("click", function () {
    var highScores = [];
    localStorage.setItem("highscore", JSON.stringify(highScores));
    location.reload();
});




