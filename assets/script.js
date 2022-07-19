var quizStart = document.getElementById("startButton");
var timerEl = document.getElementById("timer");
var viewHigh = document.getElementById("view-high-scores");
var quizScores = document.getElementById("scores");
var quizQuestion = document.getElementById("question");
var multChoice = document.getElementById("choices");
var quizResult = document.getElementById("result");
var quizButtons = document.getElementById("buttons");

function startQuiz({ })
quizStart.addEventListener("click",)

function timer() { var timeLeft = 33; var timeInterval = setInterval(function () { if (timeLeft > 1) { timerEl.textContent = timeLeft + " seconds remaing"; timeLeft--; } else if (timeLeft === 1) { timerEl.textContent = timeLeft + " second remaining"; timeLeft--; } else { timerEl.textContent = ""; clearInterval(timeInterval); displayMessage(); } }, 1000); }

timer();


// Timer starts with start button Push
// first question appears with start button push 
// When I answer a question, a new question takes its place
// I am given a message at the bottom of the application that gives feedback if I was correct or incorrect
// When I get a question wrong, time is deducted from the timer
// When all questions are answered OR the timer has run out, the game is over 
// Once the game is over I can enter my initials to be associated with my score
// My new score with my initials are displayed on the high score page
// Have page with buttons either to go back to the beginning or to clear the high scores