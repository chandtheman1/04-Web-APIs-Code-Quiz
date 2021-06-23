
var tableEl = document.querySelector(".highscores");
var highScoreTable = JSON.parse(localStorage.getItem("highscore"));



// function listHighScores (name, score) {
 
//     var tagRow = document.createElement("tr");
//     var tagTD = document.createElement("td")

//     tableEl.appendChild(tagTD);
//     .textContent(highScoreTable.name + " - " + highScoreTable.score);
// };

for (var i = 0; i < highScoreTable.length; i++) {
    console.log(highScoreTable[i].name + " - " + highScoreTable[i].score);
};

var goBackBtn = document.querySelector(".go-back");


goBackBtn.addEventListener("click", function () {
    window.location.replace("./index.html")
});