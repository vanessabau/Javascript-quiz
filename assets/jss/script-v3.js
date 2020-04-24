console.log(quizQuestions);
//VARIABLES

//TARGET START SCREEN
var startScreen = document.getElementById("start-screen");

//TARGET START BUTTON AND TIMER
var startButton = document.getElementById("start-button");
var timer;
var time = 60;
var timerEl = document.getElementById("time");

//TARGET QUESTIONS DIV 
var questionsDiv = document.getElementById("questions");
var questionTitleEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var progress = document.getElementById("progress");
//CREATE A VARIABLE TO HOLD QUESTION INDEX
var lastQuestion = quizQuestions.length-1;
var questionIndex = 0;
var count = 0;
var timer;
var score = 0;


//TARGET CURRENT QUESTION AND ANSWERS OBJECT
var quizQuestionsObject = quizQuestions[questionIndex];

//TARGET CORRECT ANSWER OF EACH QUESTION
var correctAnswer = quizQuestions[questionIndex].correctAnswer;


//FUNCTIONS////////////////////////////////////////////////

//TIMER
function countDown(){
    time--;
    timerEl.textContent = time;
}

//START QUIZ
function startQuiz() {
    timer = setInterval(countDown, 1000); // start the timer
    startScreen.classList.add("hide"); // Hide the start screen
    showCurrentQuestion(); //Call first question
}

    
}

//HIDE PREVIOUS QUESTION AND SHOW CURRENT ONE
function showCurrentQuestion(){
    //DISPLAY QUESTION
    questionsDiv.classList.remove("hide");
    questionTitleEl.textContent =  quizQuestionsObject.question;
    
    //RENDER ANSWERS INSIDE BUTTONS
    quizQuestionsObject.answers.forEach( function (choice) {
        console.log(choice)
        var btn = document.createElement("button");
        btn.innerHTML = "choices"
        choicesEl.innerHTML += "<button id='choices'>" + choice + "</button>";
    } )  
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

//COMPARE USER SELECTION AND CORRECT ANSWER
function compare(target){
    //CHECK USER ANSWER
    if (target.textContent == correctAnswer){
        //answer is correct
        score++;
        alert("You're right! NEW SCORE: " + score);
    }
    else{
        //answer is wrong
        alert("You're wrong!");
    }
    /*count=0;
    if(runningQuestion< lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        //end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }*/
    
    //Need to check if there are more questions or more time
    //If yes, show next question
    //If no, end game & show results
}

//FUNCTION TO SHOW RESULTS

//EVENT LISTENERS//////////////////////////////////////

//ON CLICK EVENT TO START QUIZ
startButton.addEventListener("click", startQuiz);

//ON CLICK EVENT TO LAUNCH COMPARE ANSWERS FUNCTION
choicesEl.onclick = function(event){
    //Target event
    var target = event.target;
    //CALL COMPARE ANSWERS FUNCTION
    compare(target);
}




