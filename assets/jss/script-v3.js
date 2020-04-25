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
var time = 30;
var questionIndex = 0;
var count = 0;
var score = 0;
var timer;

//FUNCTIONS////////////////////////////////////////////////

//TIMER
function countDown() {
    time--;
    timerEl.textContent = time;
    //If timer reaches 0 run gameOver functino
    if(time==0){
       gameOver();
    }
}

//START QUIZ
function startQuiz() {
    //Hide start screen, call first question, start timer
    startScreen.classList.add("hide"); 
    renderQuestion(); 
    timer = setInterval(countDown, 1000); 
}

//GAME OVER DISPLAY
function gameOver() {
    //Hide questions and timer
    timerDiv.classList.add("hide");
    questionTitleEl.classList.add("hide");
    timerEl.classList.add("hide");
    questionsDiv.classList.add("hide");

    //Display form
    gameOverEl.classList.remove("hide");
    form.innerHTML = "<h2>GAME OVER</h2><br>" +
        "<form 'action=/action_page.php'>" +
        "<label for='initials'>YOUR INITIALS</label><br>" +
        "<input type='text' id='finitials' name='Initials' value='ENTER INITIALS'><br>" +
        "<label for='Score'>YOUR SCORE: " + score + "</label><br>" +
        "<input type='text' id='fscore' name='Score' value='ENTER SCORE'><br>" +
        "</form>";
    
    //Stop timer
    clearInterval(timer);
}

//RENDER QUESTIONS
function renderQuestion() {

    //Display next question
    questionsDiv.classList.remove("hide");
    questionTitleEl.textContent = quizQuestions[questionIndex].question;

    //Render answers inside buttons
    quizQuestions[questionIndex].answers.forEach(function (choice) {
        console.log(choice)
        choicesEl.innerHTML += "<button id='choices'>" + choice + "</button>";
    })
}

//COMPARE USER SELECTION AND CORRECT ANSWER
function checkAnswer(target) {

    //Check user answer
    if (target.textContent == quizQuestions[questionIndex].correctAnswer) {
        //answer is correct, increment score
        score++;
        alert("You're right! NEW SCORE: " + score);
    }
    else {
        //answer is wrong
        alert("You're wrong!");
    }
    //Increase question index to target next question
    choicesEl.innerHTML = "";
    questionIndex++;

    //if else logic to end game or ask next question
    if (questionIndex >= quizQuestions.length) {
        gameOver();
    }
    else {
        renderQuestion();
    }
}

//DISPLAY SCORE SCREEN
function displayScore() {
    event.preventDefault();
    //Hide previous screen, display current one
    gameOverEl.classList.add("hide");
    topScores.classList.remove("hide");

    //Store form submission in local storage
    var finitials = document.getElementById("finitials");
    var fscore = document.getElementById("fscore");
    localStorage.setItem("initials", finitials.value);
    localStorage.setItem("score", fscore.value);

    //Display ranked scores (not done yet)
    scoreRank.innerHTML = "<p>YOUR INITALS AND SCORE: " + score + "</p>";
    
    //Stop timer
    //clearInterval(timer);
}

//EVENT LISTENERS/////////////////////////////////////

//ON CLICK EVENT TO START QUIZ
startButton.addEventListener("click", startQuiz);

//ON CLICK EVENT TO LAUNCH COMPARE ANSWERS FUNCTION
choicesEl.onclick = function (event) {
    //Target event
    var target = event.target;
    //Call checkAnswers function
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




