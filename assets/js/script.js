var startBtn = document.querySelector(".btn-start");
var submitBtn = document.querySelector(".btn-submit");

var initialsInput = document.querySelector("#initials");
var timerEl = document.getElementById('countdown');
var highScoreEl = document.querySelector('#user-scores');

var homeScreen = document.querySelector("#title");
var quizScreen = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");

var question = document.getElementById("questions");
var questionList = 0;
var questionPrompt = document.querySelector("#question-prompt");
var choicesShown = document.querySelector("#choices");
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
    showQuestion();
};



function showQuestion() {
    var questionDisplayed = questions[questionList];
    questionPrompt.textContent = questionDisplayed.prompt;

    choicesShown.textContent = " ";

    questionDisplayed.choices.forEach(function (qChoices, i) {
        var choice = document.createElement("button");
        choice.setAttribute("class", "choice");
        choice.setAttribute("class", "btn");
        choice.setAttribute("value", qChoices);
        
        choice.textContent = i + 1 + ". " + qChoices;
        choice.onclick = selectionMade;
        choicesShown.appendChild(choice);

    })
};


var score = 0;


function selectionMade() {
    if (this.value !== questions[questionList].answer) {
        timeLeft -= 10;
        resultEl.textContent = "\nIncorrect!";
    } else {
        resultEl.textContent = "\nCorrect!";
        score++;
    }

    resultEl.setAttribute("class", "result");
    setTimeout(function() {
        resultEl.setAttribute("class", "hidden");
    }, 600);

    questionList++;

    if (questionList === questions.length) {
        endQuiz();
    } else {
        showQuestion();
    }
    
    totalScore = (score/questions.length) * 100;
    
    document.getElementById("total-score").innerHTML = totalScore;
    saveScores(totalScore);
   
    
};




function endQuiz() {
    clearInterval(timeInterval);
    endScreen.setAttribute("class", "show");
    quizScreen.setAttribute("class", "hidden");
}



function saveScores() {
    var initials = initialsInput.value.trim();
    
    if (initials != '') {
        var userScore = {
            score: totalScore,
            initials: initials
        };
        var highScore = totalScore;
        
        localStorage.setItem("highScore", JSON.stringify(highScore));
        console.log(highScore);
        console.log(userScore.initials);
        
        //location.href = "highscore.html";
        
    }
};

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    saveScores();
}
);













