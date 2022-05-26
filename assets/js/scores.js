
// function renderHighscores(saveScores) {
//   var highScore = [] ||JSON.parse(localStorage.getItem("highScore"));

//   highScore.sort(function (x, y) {
//     return y.score - x.score;
//   });

//   highScore.forEach(function (score) {
//     var listTag = document.createElement("li");
//     listTag.textContent = score.initials + ": " + score.score;

//     var orderedLiEl = document.getElementById("highScore");
//     orderedLiEl.appendChild(listTag);
//   });
// }

// function clearScores() {
//   localStorage.removeItem("highScore");
// }

// document.getElementById("clear").onclick = clearScores;

// renderHighscores();

function renderHighscores(saveScores) {
  console.log(userScore);
}