var startBtn = document.querySelector(".btn-start");
var submitBtn = document.querySelector(".btn-submit");

var initialsInput = document.querySelector("#initials");
var timerEl = document.getElementById('countdown');
var highScoreEl = document.querySelector('#user-scores');

var homeScreen = document.querySelector("#title");
var quizScreen = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");

var question = document.getElementById("questions");
var questionIndex = 0;
var questionPrompt = document.querySelector("#question-prompt");
var choicesEl = document.querySelector("#choices");
var resultEl = document.getElementById("result");
var timeLeft = 75;





startBtn.addEventListener('click', function (event) {
    event.preventDefault();
    startQuiz();
});

function countdown() {
    timeLeft;
    timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
    if (timeLeft < 0) {
        endQuiz(); 
    }
    

};

function startQuiz() {
    homeScreen.setAttribute("class", "hidden");
    quizScreen.setAttribute("class", "show");
    countdown();
    getQuestion();
};



function getQuestion() {
    var questionDisplayed = questions[questionIndex];
    questionPrompt.textContent = questionDisplayed.prompt;

    choicesEl.textContent = " ";

    questionDisplayed.choices.forEach(function (qChoices, i) {
        var choice = document.createElement("button");
        choice.setAttribute("class", "choice");
        choice.setAttribute("class", "btn");
        choice.setAttribute("value", qChoices);
        
        choice.textContent = i + 1 + ". " + qChoices;
        choice.onclick = selectionClick;
        choicesEl.append(choice);

    })
};


var score = 0; 

function selectionClick() {
    if (this.value !== questions[questionIndex].answer) {
        timeLeft -= 10;
        resultEl.textContent = "\nIncorrect!";
    } else {
        resultEl.textContent = "\nCorrect!";
        score++;
    }

    resultEl.setAttribute("class", "result");
    setTimeout(function() {
        resultEl.setAttribute("class", "hidden");
    }, 500);

    questionIndex++;

    if (questionIndex === questions.length) {
        endQuiz();
    } else {
        getQuestion();
    }
    
    var totalScore = (score/questions.length) * 100;
    console.log(totalScore);
    document.getElementById("total-score").innerHTML = totalScore;
    
};


function endQuiz() {
    clearInterval(timeInterval);
    endScreen.setAttribute("class", "show");
    quizScreen.setAttribute("class", "hidden");
}



function saveScores() {
    var initials = initialsInput.value.trim();
    if (initials !== "") {
        var highScore = JSON.parse(localStorage.getItem("highScore"));
        var userScore = {
            score: totalScore,
            initials: initials
        };

        highScore.push(userScore);
        localStorage.setItem("highScore", JSON.stringify(highScore));
        
        location.href = "highscore.html";
    }
};

submitBtn.onclick = saveScores;

function enterBtnSub(event) {
    if (event.key === "Enter") {
        saveScores();
    }
};











