function printHighscores() {
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function (score) {
    var newScore = document.createElement("li");
    newScore.textContent = score.initials + " - " + score.score;
    var listScore = document.getElementById("highscores");
    listScore.appendChild(newScore);
  });
}

function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;

printHighscores();
