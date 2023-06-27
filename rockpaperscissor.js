let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

function game(playerSelection) {
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  
  const resultDiv = document.querySelector("#result");
  resultDiv.textContent = result;
  
  const scoreDiv = document.querySelector("#score");
  scoreDiv.textContent = "Player: " + playerScore + " | Computer: " + computerScore;
  
  if (playerScore === 5 || computerScore === 5) {
    let winner;
    if (playerScore > computerScore) {
      winner = "Player";
    } else {
      winner = "Computer";
    }
    resultDiv.textContent = "Game over! " + winner + " wins!";
    
    // Disable the buttons after the game is over
    document.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    game(playerSelection);
  });
});
