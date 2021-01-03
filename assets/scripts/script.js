// ---------------------------------------------------------------- House variables

let houseChosen;
let answers = document.getElementById("answer-overlay");

// ---------------------------------------------------------------- Page variables

const homepage = document.getElementById("js-choose-house-page");
const quizpage = document.getElementById("js-quiz-page");
const goodScorePage = document.getElementById("js-good-page");
const badScorePage = document.getElementById("js-bad-page");
const howToPlay = document.getElementById("js-how-to-play-page");
const settings = document.getElementById("js-settings-page");

// ---------------------------------------------------------------- Counter variables

let questionsAnswered = 0;
let currentScore = 0;
let counter;

// ---------------------------------------------------------------- Navigations

function toHomePage() {
    homepage.classList.remove("hide");
    quizpage.classList.add("hide");
    goodScorePage.classList.add("hide");
    badScorePage.classList.add("hide");
    howToPlay.classList.add("hide");
    settings.classList.add("hide");
    counter = "";
}

function toInstructionsPage() {
    homepage.classList.add("hide");
    quizpage.classList.add("hide");
    goodScorePage.classList.add("hide");
    badScorePage.classList.add("hide");
    howToPlay.classList.remove("hide");
    settings.classList.add("hide");
    counter = "";
}

function toSettingsPage() {
    homepage.classList.add("hide");
    quizpage.classList.add("hide");
    goodScorePage.classList.add("hide");
    badScorePage.classList.add("hide");
    howToPlay.classList.add("hide");
    settings.classList.remove("hide");
    counter = "";
}

// ---------------------------------------------------------------- Questions sets

const questions = [
    [ // Gryffindor
        ["Which animal represents your house?", "Lion", "Snake", "Badger", "Eagle", "Lion"],
        ["What are your house colours?", "Scarlet and Gold", "Silver and Green", "Yellow and Black", "Blue and Silver", "Scarlet and Gold"],
        ["Who was Hermione's date at the Yule Ball?", "A", "B", "Viktor Krum", "D", "Viktor Krum"],
        ["Which character served as Quiddich commentator?", "A", "B", "C", "Lee Jordan", "Lee Jordan"],
        ["Which insect is Rom most scared of?", "A", "Spiders", "C", "D", "Spiders"],
        ["What is the name of Hermione's cat?", "A", "B", "Crookshanks", "D", "Crookshanks"],
        ["How did Neville help to defeat Voldemort?", "A", "Killed Nagini", "C", "D", "Killed Nagini"],
        ["How does Harry catch his first snitch?", "In his mouth", "B", "C", "D", "In his mouth"],
        ["How does Hermione take extra classes in third year?", "Weekend classes", "Made a clone", "Penseive", "Time Turner", "Time Turner"],
        ["Other than Harry, who else could have been the object of the prophecy regarding Voldemort's downfall?", 
            "Hermione Granger", "Luna Lovegood", "Neville Longbottom", "Dean Thomas", "Neville Longbottom"]
    ],
    [ // Slytherin
        ["Which animal represents your house?", "Lion", "Snake", "Badger", "Eagle", "Snake"],
        ["What are your house colours?", "Scarlet and Gold", "Silver and Green", "Yellow and Black", "Blue and Silver", "Silver and Green"],
        ["How many horcruxes did Voldemort make?", "Six", "Seven", "Eight", "Nine", "Eight"],
        ["Finish the quote. “After all this time?”", "Always.", "Maybe.", "I guess...", "No!", "Always."],
        ["What was the name of Voldemort's snake?", "Sid", "Basilisk", "Medusa", "Nagini", "Nagini"],
        ["Who killed Dobby by throwing a knife at him?", "Draco Malfoy", "Severus Snape", "Voldemort", "Bellatrix Lestrange", "Bellatrix Lestrange"],
        ["Which medieval wizard was in Slytherin?", "A", "B", "Merlin", "D", "Merlin"],
        ["Where is the common room of your house?", "In the dungeons", "In the kitchen", "C", "D", "In the dungeons"],
        ["Who is the resident ghost of Slytherin?", "Nearly Headless Nick", "The Bloody Baron", "The Fat Friar", "The Grey Lady", "The Bloody Baron"],
        ["What qualities does a Slytherin possess?", "Patience and Loyalty", "Wit and Learning", "Cunning and Deceit", "Daring and Nerve", "Cunning and Deceit"]
    ],
    [ // Hufflepuff
        ["Which animal represents your house?", "Lion", "Snake", "Badger", "Eagle", "Badger"],
        ["What are your house colours?", "Scarlet and Gold", "Silver and Green", "Yellow and Black", "Blue and Silver", "Yellow and Black"],
        ["What colour ink are Hogwarts invitation letters written in?", "Red", "Blue", "Green", "Black", "Green"],
        ["Which Quiddich position did Captain Cedric Diggory play?", "Keeper", "Seeker", "C", "D", "Seeker"],
        ["Which dragon did Cedric Diggory face in the Triwizard Tournament?", "A", "B", "C", "D", "D"],
        ["What was the password to the prefect's bathroom?", "A", "B", "C", "Sherbet lemons", "Sherbet lemons"],
        ["Who is the head of Hufflepuff house?", "Professor McGonegal", "Professor Flitwick", "Professor Snape", "Professor Sprout", "Professor Sprout"],
        ["Where is the common room of your house?", "In the dungeons", "In the kitchen", "C", "D", "In the kitchen"],
        ["Who is the resident ghost of Hufflepuff?", "Nearly Headless Nick", "The Bloody Baron", "The Fat Friar", "The Grey Lady", "The Fat Friar"],
        ["How do you get into the Hufflepuff common room?", "Hum a tune", "Tap out a rhythm", "Perform a poem", "Dance", "Tap out a rhythm"]
    ],
    [ // Ravenclaw
        ["Which animal represents your house?", "Lion", "Snake", "Badger", "Eagle", "Eagle"],
        ["What are your house colours?", "Scarlet and Gold", "Silver and Green", "Yellow and Black", "Blue and Silver", "Blue and Silver"],
        ["What qualities does a Slytherin possess?", "Patience and Loyalty", "Wit and Learning", "Cunning and Deceit", "Daring and Nerve", "Wit and Learning"],
        ["Which gem is contained in the Ravenclaw house points hourglass?", "Amythests", "Emeralds", "Sapphires", "Rubies", "Sapphires"],
        ["What does Felix Felicis do?", "Poisons you", "Gives you good luck", "Makes you fall in love", "Ressurects someone", "Gives you good luck"],
        ["Who is the Seeker of the Ravenclaw Quiddich team?", "A", "B", "C", "Cho Chang", "Cho Chang"],
        ["Who is the resident ghost of Hufflepuff?", "Nearly Headless Nick", "The Bloody Baron", "The Fat Friar", "The Grey Lady", "The Grey Lady"],
        ["Q8", "A", "B", "C", "D", "A"],
        ["Q9", "A", "B", "C", "D", "A"],
        ["Q10", "A", "B", "C", "D", "A"]
    ]
];

// ---------------------------------------------------------------- Choose your house

// Sets color scheme and question set depending on which House is chosen on index.html

function setHouse(house) {

    resetHouse(houseChosen); // Reset which house was chosen for repeated

    houseChosen = house;
    answers.classList.add(`${house}`);

    homepage.classList.add("hide"); // Hide home page
    quizpage.classList.remove("hide"); // Show quiz page

    startQuiz();
}

function resetHouse(house) { // Reset the house at the start, so if the user is playing a second time, they're not stuck with the same house
    answers.classList.remove(house);
}

//
//
// Quiz
// functions
//
//

// ---------------------------------------------------------------- Chooses question set depending on which house was chosen

let questionsSet;

function chooseQuestionSet() {
    if (houseChosen === "gryffindor") {
        questionsSet = questions[0];
    } else if (houseChosen === "slytherin") {
        questionsSet = questions[1];
    } else if (houseChosen === "hufflepuff") {
        questionsSet = questions[2];
    } else if (houseChosen === "ravenclaw") {
        questionsSet = questions[3];
    } else {

    }
    // questionsSet = questions[houseChosen];
}

// ---------------------------------------------------------------- Randomises the order of the questions

let currentQuestion;
let questionPool = 10;

function randomiseQuestionOrder() {
    let randomNumber = Math.floor(Math.random() * questionPool); // Gets a random number between 1 and the total number of questions in the question pool
    console.log(randomNumber);
    currentQuestion = questionsSet[`${randomNumber}`]; // Finds a question in the question set with that index number
    console.log(currentQuestion); // SPLICE IS LEAVING AN UNDEFINED INSTEAD OF MOVING EVERYTHING OVER
}

function populateQuestion() { // Fills in the text for question and answer chosen by the randomiseQuestionOrder function
    let questionText = document.getElementById("question-text");
    questionText.innerText = currentQuestion[0];

    let answerOne = document.getElementById("answer-one");
    answerOne.innerText = currentQuestion[1];

    let answerTwo = document.getElementById("answer-two");
    answerTwo.innerText = currentQuestion[2];

    let answerThree = document.getElementById("answer-three");
    answerThree.innerText = currentQuestion[3];

    let answerFour = document.getElementById("answer-four");
    answerFour.innerText = currentQuestion[4];
}

// ---------------------------------------------------------------- To end the quiz and timer

function showScorePage() {
    if (currentScore <= 5) {
        quizpage.classList.add("hide");
        badScorePage.classList.remove("hide");
        homepage.classList.add("hide");
        settings.classList.add("hide");
        howToPlay.classList.add("hide");
    } else if (currentScore > 5) {
        quizpage.classList.add("hide");
        goodScorePage.classList.remove("hide");
        homepage.classList.add("hide");
        settings.classList.add("hide");
        howToPlay.classList.add("hide");
    }
}

function endQuiz() {
    counter = "";
    showScorePage();
}

function endTimer() {
    alert("Oh no! You're out of time!");
    endQuiz();
}

// ---------------------------------------------------------------- Check the answer given by the user and move to the next question

function pushScore() {
    let scoreArea = document.getElementById("score"); // Gets the score area
    scoreArea.innerText = `${currentScore}/10`; // Pushes the updated score to the score area for the user to see
}

function pushProgress() {
    document.getElementById("progress-bar").value = questionsAnswered;
}

function checkAnswer(num) {
    if (currentQuestion[num] == currentQuestion[5]) { // if content of index of clicked answer is equal to the question correct answer
       currentScore++; // Add to the score
       questionsAnswered++; // Increment how many questions are answered
       pushScore();
    } else {
        questionsAnswered++;
    }
    newQuestion();
    pushProgress();
}

function newQuestion() {
    if (questionsAnswered < 10) { // if the current question isn't the final question
        questionPool--; // Decrement the question pool for the RNG
        removeOldQuestion();
        randomiseQuestionOrder();
        populateQuestion();
    } else if (questionsAnswered === 10) {
       endQuiz();
    } else {
        alert("Oh no! Something went wrong! Please return to the homepage and try again.");
    }
}

function removeOldQuestion() { // THIS IS REMOVING INDEX 0, NOT THE CURRENT QUESTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let questionIndex = currentQuestion.indexOf();
    questionsSet.splice(`${questionIndex}`); // Remove the question from the set of questions

}

// ---------------------------------------------------------------- Creates the 180 second timer for the full quiz

function startTimer() {    // Start the timer counting down from 180 seconds
    let counter = document.getElementById("counter");
    let seconds = 120;
    setInterval(function() { // Count down from 180 seconds in seconds
        seconds--;
        counter.innerText = `${seconds} seconds`; // Fill in the user-facing timer
        if (seconds === 0) {
            endTimer(); // If the timer runs out, end the timer
        }
        if (counter === "") {
            return;
        }
    }, 1000);
}

// ---------------------------------------------------------------- Start the quiz

function startQuiz() {
    chooseQuestionSet();
    randomiseQuestionOrder();
    populateQuestion();
    startTimer();
}

// ---------------------------------------------------------------- Decides which results page to show the user, and displays their score

function showScorePage() {
    if (currentScore > 5) {
        quizpage.classList.add("hide");
        goodScorePage.classList.remove("hide");
        document.getElementById("js-good-score").innerText = `${currentScore} / 10`; // Populate their score
    } else {
        quizpage.classList.add("hide");
        badScorePage.classList.remove("hide");
        document.getElementById("js-bad-score").innerText = `${currentScore} / 10`; // Populate their score
    }
}

//
//
// Audio settings
//
//
//

// ---------------------------------------------------------------- Toggle

function backgroundMusicToggle() {
    // Toggle the background music on or off
}

function soundEffectsToggle() {
    // Toggle the sound effects on or off
}