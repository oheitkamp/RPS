const choices = ["rock", "paper", "scissors"]; // an array of choices available for both player and computer
let playerScore = 0; // keeps track of the player's score
let computerScore = 0; // keeps track of the computer's score

function computerPlay() { // a function that randomly selects a choice from the choices array for the computer
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) { // a function that plays one round of the game and returns the result
  if (playerSelection === computerSelection) { // if the player and computer choose the same thing, it's a tie
    return "tie";
  } else if ( // if the player wins, increment their score and return "win"
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return "win";
  } else { // if the computer wins, increment their score and return "lose"
    computerScore++;
    return "lose";
  }
}

function updateScoreboard() { // a function that updates the scoreboard in the HTML with the current scores
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function resetGame() { // a function that resets the game by setting both scores to 0 and updating the scoreboard
  playerScore = 0;
  computerScore = 0;
  updateScoreboard();
}

function game() { // a function that runs the game
  resetGame(); // reset the game before starting

  const buttons = document.querySelectorAll("button"); // get all buttons in the HTML
  buttons.forEach((button) => { // add a click event listener to each button
    if (button.id !== "reset") { // if the button is not the reset button
      button.addEventListener("click", () => { // add a click event listener
        const playerSelection = button.id; // get the player's selection from the button id
        const computerSelection = computerPlay(); // get the computer's selection using the computerPlay function
        const result = playRound(playerSelection, computerSelection); // play one round of the game and get the result

        alert(`You chose ${playerSelection}. Computer chose ${computerSelection}. You ${result}!`); // show the result to the user using an alert box

        updateScoreboard(); // update the scoreboard with the current scores
      });
    } else { // if the button is the reset button
      button.addEventListener("click", () => { // add a click event listener
        resetGame(); // reset the game
      });
    }
  });
}

game(); // call the game function to start the game
