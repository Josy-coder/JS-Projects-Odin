function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection.toLowerCase()) {
    return "It's a tie!";
  } else if (playerSelection === 'rock') {
    if (computerSelection.toLowerCase() === 'paper') {
      return "You lose! Paper beats Rock";
    } else {
      return "You win! Rock beats Scissors";
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection.toLowerCase() === 'scissors') {
      return "You lose! Scissors beat Paper";
    } else {
      return "You win! Paper beats Rock";
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection.toLowerCase() === 'rock') {
      return "You lose! Rock beats Scissors";
    } else {
      return "You win! Scissors beat Paper";
    }
  } else {
    return "Invalid input. Please choose either Rock, Paper, or Scissors.";
  }
}

// Testing the functions
const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
const computerSelection = getComputerChoice();

const result = playRound(playerSelection, computerSelection);
console.log(result);
