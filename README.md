# Javascript-quiz

OVERVIEW

This is a multiple choice JavaScript quiz written in HTML, JavaScript, and CSS. The quiz includes a start button, timer, questions with buttons for the answers, alerts if answers are right or wrong, a form to input initials and score when the game is over, and a final display that shows the top 10 scores. 

BUILDING THE GAME

This has been an arduous process to say the least, and as of this writing I still have a few more functionalities to figure out. 

Current elements to note:
- I stored the array of questions and answers in a separate JavaScript file to help with clarity 
- There is a mix of static and dynamic html in this game. Many of the game displays are dynamically created within html divs. 
- There are a few elements created in html such as the form submit button.
- I made use of a class "hide" to target <divs> to hide and display them by adding and removing the "hide" class, and giving the "hide" class a property of 'display: none' in the css.

Largest Challenges:
- Looping through the questions to display a current question was the first large challenge. I tried many iterations and it took a few days to settle on the version used. I had different input from the TA's, Instructor, and tutor and worked with the different suggestions to find one that seemed clear and worked.  
- Stoping the timer(!) - figuring out how to stop the timer had many variations before reaching success. I finally found the clearInterval() method and placed it in the gameOver function. 
- Storing the scores in local storage. First each new score over-wrote the last score stored; next I tried storeing scores in an object, and storing the object locally, but then I was missing a key for my object value; I also had one attempt where I had two objects stored. Finally I was able to extract the value of the form imputs to store in pairs and this worked without over-writing previous entries. 

- Retrieving the stored value pairs as an object that can be sorted was a huge challenge. There are lots of resources for retrieving keys, but not value pairs. My tutor helped me with this and we found some documentation on stack over flow that helped

-  Sort the value pairs by highest score was another brain teaser that with the help of my tutor and stack overflow I was able to accomplish
    

RESOURCES:
* questions and answers for game: https://jaxenter.com/know-your-javascript-trivia-134924.html
* creating buttons for each question https://stackoverflow.com/questions/48977848/how-do-i-create-different-button-for-each-item-in-an-array-javascript

* Stop countdown https://www.dreamincode.net/forums/topic/235222-how-to-stop-that-countdown/

* Stop timer https://stackoverflow.com/questions/17087636/how-to-save-data-from-a-form-with-html5-local-storage

* Storing to local storage https://www.taniarascia.com/how-to-use-local-storage-with-javascript/

* Retrieving from local storage https://stackoverflow.com/questions/8419354/get-html5-localstorage-keys

* Retrieving key value pairs from local storage https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance/51647623

* Sorting value pairs in objects https://stackoverflow.com/questions/1069666/sorting-object-property-by-values

* * * * * * * *
  SKETCHBOOK:
* * * * * * * *

VERSIONS OF CODE THAT I AM WORKING WITH IN ATTEMPTING TO STORE AND RETRIEVE SCORES BELOW:    

//ATTEMPT TO STORE SCORES IN AN OBJECT AND STORE OBJECT TO LOCAL STORAGE

    var scores = [];
    localStorage.setItem('initials', JSON.stringify(scores))
    var data = JSON.parse(localStorage.getItem('items'));

    function storeInitials() {
    Stringify and set "initials" key in localStorage to todos array
    localStorage.setItem("initials", JSON.stringify(scores));
    }
    
    Attempt to store form responses in array
    var initialsText = initials.value.trim();
    
    return form early if submitted test is blank
    if(initialsText === ""){
        return;
    }

    Add new initials to scores array
    scores.push(initialsText);
    
    Store updated initials in localStorage, re-render the list
    storeinitials();

    Attempts to retrieve stored items
    document.getElementById("score-rank").innerHTML = localStorage.getItem("initals");
    document.getElementById("score-rank").innerHTML = localStorage.getItem("score");#

    localStorage.setItem("initials", finitials.value);
    localStorage.setItem("score", fscore.value);
