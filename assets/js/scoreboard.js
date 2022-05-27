//Clears scores
function clear() {
  localStorage.removeItem("highScore");
  localStorage.removeItem("user");
}

var clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', function(event) {
    event.preventDefault();
    clear();
})



//Retrieve scores
function renderHighscore() {
  var user = localStorage.getItem("user", JSON.stringify(user));
  var highScore = [parseInt(localStorage.getItem("highScore", JSON.stringify(highScore)))];

  highScore.sort (function (a, b) {
    return b.highScore - a.highScore;
  }); 

  highScore.forEach (function () {
    var list = document.createElement("li");
    var name = user.replaceAll('"', '');
    list.textContent = name + ": " + highScore;

    var displayList = document.querySelector("#highscores");
    displayList.appendChild(list);

  });
}



renderHighscore();
