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

var allScores = {
    ab: 2,
    bc: 3,
}

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

function allStorage() {
    //Pulls key/value pairs from local storage and saves them to an object
    var archive = {}, // Notice change here
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        archive[ keys[i] ] = localStorage.getItem( keys[i] );
    }

    return archive;
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
    console.log(finitials.value);
    console.log(fscore.value);
    allScores[finitials.value] = fscore.value;
    console.log(allScores);
    localStorage.setItem(finitials.value, fscore.value);
    

    //Attempting to retrieve key/value pairs (not working yet)
    var localStorageContent = allStorage();
    console.log(localStorageContent);

    var keyValuePairs = [];
    for (var record in localStorageContent){
        keyValuePairs.push([record, localStorageContent[record]]);
    }

    keyValuePairs.sort(function(a, b){
        return b[1]- a[1];
    });
    console.log(keyValuePairs);

    for(i=0; i<10; i++){
        var newElement = document.createElement("p");
        newElement.innerHTML = keyValuePairs[i];
        document.getElementById("score-rank").append(newElement);
    }
    
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





