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


//Buttons
startBtn.addEventListener('click', function (event) {
    event.preventDefault();
    startQuiz();
});

//Start Quiz & Timer
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


//Pans through questions
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

questions = [
    {
        prompt: "In JavaScript, what is a block of code called that is used to perform a specific task?",
        choices: ["String", "Variable", "Declaration", "Function"],
        answer: "Function"
    },
    {
        prompt: "In JavaScript, what element is used to store multiple values in a single variable?",
        choices: ["Array", "Variable", "String", "Function"],
        answer: "Array"
    },
    {
        prompt: "What is a JavaScript element that represents either TRUE or FALSE values?",
        choices: ["Event", "Condition", "Boolean", "String"],
        answer: "Boolean"
    },
    {
        prompt: "What is the name of the statement that is used to exit or end a loop?",
        choices: ["Close statement", "Conditional statement", "Break statement", "Falter statement"],
        answer: "Break statement"
    }
];

//Evaluates selections & gives score
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
    setTimeout(function () {
        resultEl.setAttribute("class", "hidden");
    }, 600);

    questionList++;


    if (questionList === questions.length) {
        endQuiz();
        totalScore = (score / questions.length) * 100;
        document.getElementById("total-score").innerHTML = totalScore;
        saveScores(totalScore);

    } else {
        showQuestion();
    }

};

//End of Quiz 
function endQuiz() {
    clearInterval(timeInterval);
    endScreen.setAttribute("class", "show");
    quizScreen.setAttribute("class", "hidden");
}



function saveScores() {
    if (initials != '') {
        var initials = initialsInput.value.trim();
        var userScore = {
            initials: initials,
            score: totalScore
        };
    }
    var user = userScore.initials;
    var highScore = userScore.score;
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("highScore", JSON.stringify(highScore));
    console.log(user);
    
    
};


submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    saveScores();
    location.href = "highscore.html"
}
);












