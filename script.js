
// // Function for random computer choice//
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





// Function for 1 round of game//
function playRound(playerSelection, computerSelection) {

    let result;
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result = 'You win scissors beats paper!';
        playerScore++
        round++
        return result;
        
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result = 'You lose rock beats scissors!';
        computerScore++
        round++
        return result;
    
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors' ) {
        result = "It's a tie!";
        playerScore++
        computerScore++
        round++
        return result; 
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result = 'Paper beats rock you win!';
        playerScore++
        round++
        return result;
        
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result = 'You lose Scissors beats paper!';
        computerScore++
        round++
        return result;
        
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        result = "It's a tie!";
        playerScore++
        computerScore++
        round++
        return result;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result = 'Rock beats scissors you win!'
        playerScore++
        round++
        return result;
        
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        result = 'Paper beats rock you lose!';
        computerScore++
        round++
        return result;
        
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        result = "It's a tie!"; 
        playerScore++
        computerScore++
        round++
        return result;
    }  
    }



// let playerSelection = prompt('Choose Paper,Rock, or Scissors').toLowerCase ();
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let round = 1;
// console.log(playerSelection);
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));


//Function for 5 rounds of Paper, Rock, Scissors//
function game() {
while (round <= 5) {
    let playerSelection = prompt ('Choose Paper,Rock,or Scissors').toLowerCase ();
    console.log(playerSelection);
    getComputerChoice ();
    computerSelection = getComputerChoice ();
    console.log(computerSelection);
    console.log(playRound(playerSelection,computerSelection));
} if (playerScore > computerScore || computerScore < playerScore) {
    return 'You won!\n' + 'Your Score: ' + playerScore + ' Computer score: ' + computerScore;
}else if (computerScore > playerScore || playerScore < computerScore) {
    return 'You lost!\n' + 'Your Score: ' + playerScore + ' Computer score: ' + computerScore;
} else if (playerScore === computerScore || computerScore === playerScore){
    return "It's a tie game!\n" + 'Your Score:' + playerScore + ' Computer Score: ' + computerScore;
}
}



console.log(game());











