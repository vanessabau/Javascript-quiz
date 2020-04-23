console.log(quizQuestions);
//VARIABLES

//TARGET START SCREEN
var startScreen = document.getElementById("start-screen");

//TARGET START BUTTON AND TIMER
var startButton = document.getElementById("start-button");
var timer;
var time = 60;
var timerEl = document.getElementById("time");

//TARGET QUESTIONS ARRAY ** how to link to array?
var questionsContainer = document.getElementById("questions");
//var questions = questionsContainer.children;
var questionIndex = 0;

//FUNCTIONS
//START TIMER
function countDown(){
    time--;
    timerEl.textContent = time;
}
//START QUIZ
function startQuiz() {
    // start the timer
    timer = setInterval(countDown, 1000)
    // Hide the start screen
    startScreen.classList.add("hide");
    showCurrentQuestion();
}

//FUNCTION TO HIDE PREVIOUS QUESTION AND SHOW CURRENT ONE
function showCurrentQuestion(){
    var currentQuestion = quizQuestions[questionIndex];
    var questionTitleEl = document.getElementById("question-title");
    var choicesEl = document.getElementById("choices");
    questionsContainer.classList.remove("hide");
    questionTitleEl.textContent = currentQuestion.question;
    currentQuestion.answers.forEach( function (choice, i) {
        console.log(choice);
        console.log(i);
        //to create buttons

        //target the elemnt where you want your buttons to appear

        //append thos buttons to that element


        //an onclick event that launches another function that  is going ot see if the answer is correct?
        
    } )

}


//EVENT LISTENERS
//startButton.onclick = startQuiz
startButton.addEventListener("click", startQuiz);