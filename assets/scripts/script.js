// ----------------------------------------------------------------------------------------------------------------------------------------- Global variables

// ---------------------------------------------------------------- House variables

let houseChosen;
let answers = document.getElementById("answer-overlay");

// ---------------------------------------------------------------- Page variables

const bodyPage = document.getElementById("body");
const solemnlyPage = document.getElementById("js-solemnly-swear");
const fullPage = document.getElementById("main-section");
const navbar = document.getElementById("js-navbar");
const homepage = document.getElementById("js-choose-house-page");
const quizpage = document.getElementById("js-quiz-page");
const scorePage = document.getElementById("js-score-page");
const howToPlay = document.getElementById("js-how-to-play-page");
const footerPage = document.getElementById("footer");

// ---------------------------------------------------------------- Counter variables

let questionsAnswered = 0;
let currentScore = 0;
let scoreArea = document.getElementById("score");
let counter = document.getElementById("counter");
let seconds;
let countTimer;

// ---------------------------------------------------------------- Questions variables

let questionsSet;
let currentQuestion;
let questionPool = 10;

// ---------------------------------------------------------------- Results variables

let resultImage = document.getElementById("result-image");
let resultQuote = document.getElementById("result-quote");

// ---------------------------------------------------------------- Audio variables

let music = "off";
const solemnlyAudio = new Audio('assets/audio/solemnly.mp3');
const fireAudio = new Audio('assets/audio/fire-sound.mp3');
const quizAudio = new Audio('assets/audio/quiz-music.mp3');

// ----------------------------------------------------------------------------------------------------------------------------------------- Page functions

// ---------------------------------------------------------------- Navigations

function toHomePage() {
    solemnlyPage.classList.add("hide");
    homepage.classList.remove("hide");
    howToPlay.classList.add("hide");
    navbarMovement();
}

function toInstructionsPage() {
    homepage.classList.add("hide");
    howToPlay.classList.remove("hide");
    navbarMovement();
}

function toSettingsPage() {
    homepage.classList.add("hide");
    howToPlay.classList.add("hide");
    navbarMovement();
}

function navbarMovement() {
    scorePage.classList.add("hide");
    quizpage.classList.add("hide");
    clearInterval(countTimer);
    seconds = 120;
    whichMusic();
}

// ---------------------------------------------------------------- Fading in front page

solemnlyAudio.play();

function enterQuiz() {
    navbar.classList.remove("hide"); // Show navbar
    bodyPage.classList.add("background-image"); // Add normal background image
    bodyPage.classList.remove("black-background"); // Remove black background
    footerPage.classList.remove("hide"); // Show footer
    toHomePage();
    navbarMovement();
    whichMusic();
}

// ----------------------------------------------------------------------------------------------------------------------------------------- Quiz functions

// ---------------------------------------------------------------- Questions sets

const questions = [
    [ // Gryffindor
        ["Which animal represents your house?", "Lion", "Snake", "Badger", "Eagle", "Lion"],
        ["What are your house colours?", "Scarlet and Gold", "Silver and Green", "Yellow and Black", "Blue and Silver", "Scarlet and Gold"],
        ["Who was Hermione's date at the Yule Ball?", "Ron Weasley", "Harry Potter", "Viktor Krum", "Draco Malfoy", "Viktor Krum"],
        ["Which character served as Quiddich commentator?", "Neville Longbottom", "Dean Thomas", "Lavender Brown", "Lee Jordan", "Lee Jordan"],
        ["Which insect is Ron most scared of?", "Worms", "Spiders", "Ladybugs", "Caterpillars", "Spiders"],
        ["What is the name of Hermione's cat?", "Paws", "Mittens", "Crookshanks", "Sebastian", "Crookshanks"],
        ["How did Neville help to defeat Voldemort?", "Sacrificed himself", "Killed Nagini", "Cast Avada Kedavra", "Found a horcrux", "Killed Nagini"],
        ["How does Harry catch his first snitch?", "In his mouth", "In his hand", "In his pocket", "In a pokeball", "In his mouth"],
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
        ["Which medieval wizard was in Slytherin?", "Magnus", "Flamel", "Merlin", "Donnubáin", "Merlin"],
        ["Where is the common room of your house?", "In the dungeons", "In the kitchen", "Under the stairs", "In the gardens", "In the dungeons"],
        ["Who is the resident ghost of Slytherin?", "Nearly Headless Nick", "The Bloody Baron", "The Fat Friar", "The Grey Lady", "The Bloody Baron"],
        ["What qualities does a Slytherin possess?", "Patience and Loyalty", "Wit and Learning", "Cunning and Deceit", "Daring and Nerve", "Cunning and Deceit"]
    ],
    [ // Hufflepuff
        ["Which animal represents your house?", "Lion", "Snake", "Badger", "Eagle", "Badger"],
        ["What are your house colours?", "Scarlet and Gold", "Silver and Green", "Yellow and Black", "Blue and Silver", "Yellow and Black"],
        ["What colour ink are Hogwarts invitation letters written in?", "Red", "Blue", "Green", "Black", "Green"],
        ["Which Quiddich position did Captain Cedric Diggory play?", "Keeper", "Seeker", "Chaser", "Beater", "Seeker"],
        ["Which dragon did Cedric Diggory face in the Triwizard Tournament?", "Hungarian Horntail", "Swedish Short-Snout", "Chinese Fireball", "Common Welsh Green", "Swedish Short-Snout"],
        ["What was the password to the prefect's bathroom?", "A", "B", "C", "Sherbet lemons", "Sherbet lemons"],
        ["Who is the head of Hufflepuff house?", "Professor McGonegal", "Professor Flitwick", "Professor Snape", "Professor Sprout", "Professor Sprout"],
        ["Where is the common room of your house?", "In the dungeons", "In the kitchen", "Under the stairs", "In a tower", "In the kitchen"],
        ["Who is the resident ghost of Hufflepuff?", "Nearly Headless Nick", "The Bloody Baron", "The Fat Friar", "The Grey Lady", "The Fat Friar"],
        ["How do you get into the Hufflepuff common room?", "Hum a tune", "Tap out a rhythm", "Perform a poem", "Answer a riddle", "Tap out a rhythm"]
    ],
    [ // Ravenclaw
        ["Which animal represents your house?", "Lion", "Snake", "Badger", "Eagle", "Eagle"],
        ["What are your house colours?", "Scarlet and Gold", "Silver and Green", "Yellow and Black", "Blue and Silver", "Blue and Silver"],
        ["What qualities does a Slytherin possess?", "Patience and Loyalty", "Wit and Learning", "Cunning and Deceit", "Daring and Nerve", "Wit and Learning"],
        ["Which gem is contained in the Ravenclaw house points hourglass?", "Amythests", "Emeralds", "Sapphires", "Rubies", "Sapphires"],
        ["What does Felix Felicis do?", "Poisons you", "Gives you good luck", "Makes you fall in love", "Ressurects someone", "Gives you good luck"],
        ["Who is the Seeker of the Ravenclaw Quiddich team?", "Padma Patil", "Luna Lovegood", "Terry Boot", "Cho Chang", "Cho Chang"],
        ["Who is the resident ghost of Hufflepuff?", "Nearly Headless Nick", "The Bloody Baron", "The Fat Friar", "The Grey Lady", "The Grey Lady"],
        ["Where is the common room of your house?", "In the dungeons", "In the kitchen", "Under the stairs", "In a tower", "In a tower"],
        ["How do you get into the Ravenclaw common room?", "Hum a tune", "Tap out a rhythm", "Perform a poem", "Answer a riddle", "Answer a riddle"],
        ["Who is the head of Ravenclaw house?", "Professor McGonegal", "Professor Flitwick", "Professor Snape", "Professor Sprout", "Professor Flitwick"],
    ]
];

// ---------------------------------------------------------------- Choose your house

// Sets color scheme and question set depending on which House is chosen on index.html

function setHouse(house) {

    resetQuiz(houseChosen); // Reset which house was chosen for repeated

    houseChosen = house;
    answers.classList.add(`${house}`);

    homepage.classList.add("hide"); // Hide home page
    quizpage.classList.remove("hide"); // Show quiz page

    startQuiz();
}

function resetQuiz(house) { // Reset the house at the start, so if the user is playing a second time, they're not stuck with the same house
    answers.classList.remove(house);
    currentScore = 0;
}

// ---------------------------------------------------------------- Chooses question set depending on which house was chosen

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
        alert("That's not a valid house. Please return to the home page and choose again.");
    }
}

// ---------------------------------------------------------------- Randomises the order of the questions

function randomiseQuestionOrder() {
    let randomNumber = Math.floor(Math.random() * questionPool); // Gets a random number between 1 and the total number of questions in the question pool
    currentQuestion = questionsSet[`${randomNumber}`]; // Finds a question in the question set with that index number
    console.log(currentQuestion); // undefined the second time around!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

function populateQuestion() { // Fills in the text for question and answer chosen by the randomiseQuestionOrder function
    let questionText = document.getElementById("question-text");
    console.log(questionText);
    questionText.innerText = currentQuestion[0]; // THIS IS THE PROBLEM LINE
    console.log(currentQuestion);

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

function endQuiz() {
    clearInterval(countTimer);
    showScorePage();
    document.getElementById("progress-bar").value = 0;
    scoreArea.innerText = "";
    questionsSet = 0;
}

function endTimer() {
    alert("Oh no! You're out of time!");
    endQuiz();
}

// ---------------------------------------------------------------- Check the answer given by the user and move to the next question

function pushScore() {
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
        questionsAnswered++; // If the answer is incorrect, just increment the question total
    }
    newQuestion();
    pushProgress();
}

function newQuestion() {
    if (questionsAnswered < 10) { // If the current question isn't the final question
        questionPool--; // Decrement the question pool for the RNG
        removeOldQuestion();
        randomiseQuestionOrder();
        populateQuestion();
    } else if (questionsAnswered === 10) { // If the current question is the final question, end the quiz
       endQuiz();
    } else {
        alert("Oh no! Something went wrong! Please return to the homepage and try again.");
    }
}

function removeOldQuestion() {
    let questionIndex = questionsSet.indexOf(currentQuestion);
    questionsSet.splice(questionIndex,1); // Remove the question from the set of questions
}

// ---------------------------------------------------------------- Creates the 120 second timer for the full quiz

function startTimer() {    // Start the timer counting down from 120 seconds
    counter.innerText = "120 seconds";
    seconds = 120;
    countTimer = setInterval(timerFunction, 1000);
}

function timerFunction() { // Count down from 120 seconds in seconds
    seconds--;
    counter.innerText = `${seconds} seconds`; // Fill in the user-facing timer
    if (seconds === 0) {
        endTimer(); // If the timer runs out, end the timer
    }
}

// ---------------------------------------------------------------- Start the quiz

function startQuiz() { // Starts the quiz from scratch, resetting all required variables
    clearInterval(timerFunction);
    currentScore = 0;
    questionsAnswered = 0;
    pushScore();
    pushProgress();
    chooseQuestionSet();
    randomiseQuestionOrder();
    populateQuestion();
    startTimer();
    whichMusic();
}

// ---------------------------------------------------------------- Decides which results page to show the user, and displays their score

function pageSwap() {
    homepage.classList.add("hide");
    howToPlay.classList.add("hide");
    quizpage.classList.add("hide");
}

function showScorePage() { // Sets the result image and text depending on what score the user achieves
    scorePage.classList.remove("hide");
    quizpage.classList.add("hide");
    document.getElementById("js-score").innerText = `${currentScore} / 10`; // Populate their score
    if (currentScore <= 2) {
        resultImage.src = "assets/images/galleons.jpg";
        resultQuote.innerText = "Well, I suppose you can always buy your acceptance to Hogwarts?";
        resultImage.alt = "An image of a pile of galleons, the currency in the wizarding world";
    } else if (currentScore <= 5 && currentScore > 2) {
        resultImage.src = "assets/images/remembrall.jpg";
        resultQuote.innerText = "Oh no! It looks like you could do with a Remembrall!";
        resultImage.alt = "A remembrall, a spherical object from the Harry Potter universe that tells you if you've forgotten something";
    } else if (currentScore <= 8 && currentScore > 5) {
        resultImage.src = "assets/images/letters.jpg";
        resultQuote.innerText = "Congratulations, your Hogwarts acceptance letter is here! You could still do with a bit more revision before you go, though.";
        resultImage.alt = "An image of the Dursley's living room with the Hogwarts acceptance letters flying around";
    } else if (currentScore <= 10 && currentScore > 8) {
        resultImage.src = "assets/images/ticket.jpg";
        resultQuote.innerText = "Here's your ticket for the Hogwarts express! You'll fit in just fine!";
        resultImage.alt = "An image of a ticket for the Hogwards Express, from platform 9 3/4";
    } else {
        alert("Oh no! Something went wrong! Please try again.");
    };
    whichMusic();
}

// ----------------------------------------------------------------------------------------------------------------------------------------- Audio settings

// ---------------------------------------------------------------- Toggle

fireAudio.loop = true;
quizAudio.loop = true;

function whichMusic() { // Decide which audio to play depending on if they're on the quiz page or not

    if (music === "on") {
        if (quizpage.classList.contains("hide")) {
            fireAudio.play();
            quizAudio.pause();
        } else {
            quizAudio.play();
            fireAudio.pause();
        }

    } else {
        fireAudio.pause();
        quizAudio.pause();
    }
}

function toggleMusic() { // So that the user can toggle the music off or on
    if (music === "off") {
        music = "on";
        document.getElementById("audio").innerHTML = `<i class="fas fa-volume-mute"></i><br>Audio off`; // Changes the text of the button once clicked
    } else {
        music = "off";
        document.getElementById("audio").innerHTML = `<i class="fas fa-volume-up"></i><br>Audio on`; // Changes the text of the button once clicked
    }
    whichMusic();
}