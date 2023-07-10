function getComputerChoice(params) {
    const Choice = Math.floor(Math.random() * 3);
    if (Choice === 0) {
        return 'paper';
    } else if (Choice === 1) {
        return 'rock';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win scissors beats paper!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose rock beats scissors!';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors' ) {
        return "It's a tie!";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win paper beats rock!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose scissors beats paper!';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return "It's a tie!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win rock beats scissors!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose paper beats rock!';
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return "It's a tie!"
    }
    }


const computerSelection = getComputerChoice ();
const userChoice = prompt("Choose Paper, Rock, or Scissors");
const playerSelection = userChoice.toLowerCase ();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));



