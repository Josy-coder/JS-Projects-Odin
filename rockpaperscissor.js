//function to get a random choice for computer

function getComputerChoice () {
  const choices = ["rock", "paper", "scissors"];
  const randomOutput = Math.floor(Math.random() * choices.length);
  return choices[randomOutput];
}

//a function to play a round of Rock Paper Scissor

function roundOne (computerSelection, playerSelection) {
let computerSelection = choices[randomOutput];
let playerSelection = playerSelection.toLowerCase()

if (playerSelection === computerSelection) {
  return "Game tied";
} else if (playerSelection === choices[0] && computerSelection === choices[1]) {
return "Paper Beats Rock, Computer Wins";
}
