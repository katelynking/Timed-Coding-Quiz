
function renderHighscores() {
  var highScore = JSON.parse(localStorage.getItem("highscores")) || [];

  highScore.sort(function (x, y) {
    return y.score - x.score;
  });

  highScore.forEach(function (score) {
    var listTag = document.createElement("li");
    listTag.textContent = score.initials + ": " + score.score;

    var olEl = document.getElementById("highScore");
    olEl.appendChild(listTag);
  });
}

function clearScores() {
  localStorage.removeItem("highScore");
}

document.getElementById("clear").onclick = clearScores;

renderHighscores();
