let playerScore = 0;
let computerScore = 0;
let playerName;

function player() {
  playerName = prompt("What is your name?");
  alert(`Welcome ${playerName}!`);
}

function computerPlay () {
  const choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
  }

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Its a tie!";
  } 


else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "paper") || 
    (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") ||
    (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors")) {
    playerScore++;
    computerScore++; 
    return "You lost!" + computerSelection + "beats" + playerSelection;
    } else {
      return "You won!" + playerSelection + "beats" + computerSelection;
    }
  }
function game(playSelection) {
  const computerSelection = computerPlay();
  const result = playRound(playSelection, computerSelection);

  const resultsDiv = document.querySelector("#results");
  resultsDiv.textContent = result;

  const scoreDiv = document.querySelector("#score");
  scoreDiv.textContent ="playerName: " + playerName + playerScore + "| Computer: " + computerScore;

  if (playerScore === 5 || computerScore === 5) {
    let winner;
    if (playerScore > computerScore) {
      winner = playerName;
    } else {
      winner = "Computer";
    }
    resultsDiv.textContent = "Game over!" + winner + "Wins!";


  document.querySelectorAll("button").forEach((button) => { button.disabled = true
    });
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {button.addEventListener("click", () => { const playerSelection = button.id;
  game(playerSelection);
});
});
