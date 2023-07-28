
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
     console.log(playerSelection);
     console.log(computerSelection);
   
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        myScore.textContent = 'My score:' + `${playerScore}`;
        compScore.textContent = 'Computer Score:' + `${computerScore}`;
        
        
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        myScore.textContent = 'My score:' + `${playerScore}`;
        compScore.textContent = 'Computer Score:' + `${computerScore}`;
        
        
    
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors' ) {
        computerScore++
        playerScore++
        myScore.textContent = 'My score:' + `${playerScore}`;
        compScore.textContent = 'Computer Score:' + `${computerScore}`;
        
         
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        myScore.textContent = 'My score:' + `${playerScore}`;
        compScore.textContent = 'Computer Score:' + `${computerScore}`;
        
    
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        myScore.textContent = 'My score:' + `${playerScore}`;
        compScore.textContent = 'Computer Score:' + `${computerScore}`;
        
    
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        computerScore++
        playerScore++
        myScore.textContent = 'My score:' + `${playerScore}`;
        compScore.textContent = 'Computer Score:' + `${computerScore}`;
        
        
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        compScore.textContent = 'Computer Score:' + `${computerScore}`;
        myScore.textContent = 'My score:' + `${playerScore}`;

    
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerScore++
        compScore.textContent = 'Computer Score:' + `${computerScore}`;
        myScore.textContent = 'My score:' + `${playerScore}`;

    
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        computerScore++
        playerScore++
        compScore.textContent = 'Computer Score:' + `${computerScore}`;
        myScore.textContent = 'My score:' + `${playerScore}`;
    }  
    }


let playerScore = 0;
let computerScore = 0;





// Events for buttons on UI

let paperBtn = document.getElementById ('btn-paper');
let rockBtn = document.getElementById('btn-rock');
let scissorsBtn = document.getElementById ('btn-scissors');
let myScore = document.getElementById ('my-score');
let compScore = document.getElementById('comp-score');




paperBtn.addEventListener('click', (e) => { 
    console.log(playRound('paper', getComputerChoice()));
    
    });

rockBtn.addEventListener('click', (e) => { 
        console.log(playRound('paper', getComputerChoice()));
        
        }); 
        


scissorsBtn.addEventListener('click', (e) => { 
            console.log(playRound('paper', getComputerChoice()));
            
            });











