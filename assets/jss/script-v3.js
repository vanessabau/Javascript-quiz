//TEST/DEBUGGING
console.log(quizQuestions);

//VARIABLES/////////////////////////////////
var startScreen = document.getElementById("start-screen");
var startButton = document.getElementById("start-button");
var timerDiv = document.getElementById("timer-div");
var timerEl = document.getElementById("time");
var questionsDiv = document.getElementById("questions");
var questionTitleEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var gameOverEl = document.getElementById("game-over");
var form = document.getElementById("form");
var submitBtn = document.getElementById("submit-button");
var topScores = document.getElementById("top-scores");
var scoreRank = document.getElementById("score-rank");

var timer;
var time = 60;
var questionIndex = 0;
var count = 0;
var timer;
var score = 0;

//FUNCTIONS////////////////////////////////////////////////

//TIMER
function countDown() {
    time--;
    timerEl.textContent = time;
}

//START QUIZ
function startQuiz() {
    startScreen.classList.add("hide"); // Hide the start screen
    renderQuestion(); //Call first question
    timer = setInterval(countDown, 1000); // start the timer
}

//GAME OVER DISPLAY
function gameOver() {
    //HIDE QUESTIONS AND TIMER
    timerDiv.classList.add("hide");
    questionTitleEl.classList.add("hide");
    timerEl.classList.add("hide");

    //DISPLAY FORM
    gameOverEl.classList.remove("hide");
    form.innerHTML = "<h2>GAME OVER</h2><br>" +
        "<form 'action=/action_page.php'>" +
        "<label for='initials'>Your Initials</label><br>" +
        "<input type='text' id='finitials' name='Initials' value='ENTER INITIALS'><br>" +

        "<label for='Score'>Your Score: " + score + "</label><br>" +
        "<input type='text' id='fscore' name='Score' value='ENTER SCORE'><br>" +
        "</form>";
}

//RENDER QUESTION
function renderQuestion() {

    //DISPLAY QUESTION
    questionsDiv.classList.remove("hide");
    questionTitleEl.textContent = quizQuestions[questionIndex].question;

    //RENDER ANSWERS INSIDE BUTTONS
    quizQuestions[questionIndex].answers.forEach(function (choice) {
        console.log(choice)
        choicesEl.innerHTML += "<button id='choices'>" + choice + "</button>";
    })
}

//COMPARE USER SELECTION AND CORRECT ANSWER
function checkAnswer(target) {

    //CHECK USER ANSWER
    if (target.textContent == quizQuestions[questionIndex].correctAnswer) {
        //answer is correct
        score++;
        alert("You're right! NEW SCORE: " + score);
    }
    else {
        //answer is wrong
        alert("You're wrong!");
    }
    choicesEl.innerHTML = "";
    questionIndex++;

    //if else logic to end game or ask next question
    if ((timer <= 0) || (questionIndex >= quizQuestions.length)) {
        gameOver();
    }
    else {
        renderQuestion();
    }
}

function displayScore() {
    event.preventDefault();
    //HIDE PREVIOUS SCREEN, SHOW SCORE RANKING
    gameOverEl.classList.add("hide");
    topScores.classList.remove("hide");

    //STORE FORM IN LOCAL STORAGE
    var finitials = document.getElementById("finitials");
    var fscore = document.getElementById("fscore");
    localStorage.setItem("initials", finitials.value);
    localStorage.setItem("score", fscore.value);

    //DISPLAY RANKED SCORES
    scoreRank.innerHTML = "<p>INITALS & SCORE RANKINGS HERE</p>";
}

//EVENT LISTENERS/////////////////////////////////////

//ON CLICK EVENT TO START QUIZ
startButton.addEventListener("click", startQuiz);

//ON CLICK EVENT TO LAUNCH COMPARE ANSWERS FUNCTION
choicesEl.onclick = function (event) {
    //Target event
    var target = event.target;
    //CALL COMPARE ANSWERS FUNCTION
    checkAnswer(target);
}

//SUBMIT FORM
submitBtn.addEventListener("click", displayScore);

//ELEMENTS TO COMPLETE ///////////////////////////////

    //Create object to store form submissions
    //submit form to object
    //store object in local storage
    //Rank score/initial value pairs
    //retrieve top 10 value pairs
    //Display top 10 value pairs


//ATTEMPT TO STORE SCORES IN AN OBJECT AND STORE OBJECT TO LOCAL STORAGE

    //var scores = [];
    //localStorage.setItem('initials', JSON.stringify(scores))
    //var data = JSON.parse(localStorage.getItem('items'));

    //function storeInitials() {
    // Stringify and set "initials" key in localStorage to todos array
    //localStorage.setItem("initials", JSON.stringify(scores));
    //}
    
    //Attempt to store form responses in array
    //var initialsText = initials.value.trim();
    
    //return form early if submitted test is blank
    //if(initialsText === ""){
        //return;
    //}

    //Add new initials to scores array
    //scores.push(initialsText);
    
    //Store updated initials in localStorage, re-render the list
    //storeinitials();

    //Attempt to retrieve stored items
    //document.getElementById("score-rank").innerHTML = localStorage.getItem("initals");
    //document.getElementById("score-rank").innerHTML = localStorage.getItem("score");


