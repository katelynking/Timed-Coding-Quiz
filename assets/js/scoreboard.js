//Clears scores
function clear() {
  localStorage.removeItem("highScore");
}

var clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', function(event) {
    event.preventDefault();
    clear();
})

//Retrieve scores
function renderHighscore() {
  localStorage.getItem("user", JSON.stringify(user));
  localStorage.getItem("highScore", JSON.stringify(highScore));
  console.log(user);
  console.log(highScore);
  
  var userScore;

  userScore.sort(function (a, b) {
    return b.highScore - a.highScore;
  });

  userScore.forEach(function (userScore) {
    var list = document.createElement("li");
    list.textContent = userScore.initials+ ": " + userScore.score;

    var inOrder = document.querySelector("#highScore");
    inOrder.appendChild(list);
  });
}



//renderHighscores();

