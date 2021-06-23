
var tableEl = document.querySelector(".highscores");
var highScoreTable = JSON.parse(localStorage.getItem("highscore"));
var goBackBtn = document.querySelector(".go-back");
var clearHighScoresEl = document.querySelector(".clear-highscores");

for (var i = 0; i < highScoreTable.length; i++) {
    console.log(highScoreTable[i].name + " - " + highScoreTable[i].score);
    var trTag = document.createElement("tr");
    var tdTag = document.createElement("td");

    tableEl.appendChild(trTag);
    trTag.appendChild(tdTag);

    tdTag.textContent = i + 1 + ". " + highScoreTable[i].name + " - " + highScoreTable[i].score;

};

goBackBtn.addEventListener("click", function () {
    window.location.replace("./index.html")
});

clearHighScoresEl.addEventListener("click", function () {
    var highScores = [];
    localStorage.setItem("highscore", JSON.stringify(highScores));
    location.reload();
});