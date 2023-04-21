const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return "win";
  } else {
    computerScore++;
    return "lose";
  }
}

function updateScoreboard() {
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScoreboard();
}

function game() {
  resetGame();

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (button.id !== "reset") {
      button.addEventListener("click", () => {
        const playerSelection = button.id;
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);

        alert(`You chose ${playerSelection}. Computer chose ${computerSelection}. You ${result}!`);

        updateScoreboard();
      });
    } else {
      button.addEventListener("click", () => {
        resetGame();
      });
    }
  });
}

game();