
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

function resetScores () {
        if (playerScore === 5 || computerScore === 5) {
            if (playerScore === 5) {
                liveScore.textContent = 'You won!';
                
            } else if (computerScore === 5) {
                liveScore.textContent = 'You lost!'; 
            }
            
            playerScore = 0;
            myScore.textContent = 'My score:' + 0;
            computerScore = 0;
            compScore.textContent = 'Computer Score:' + 0;
            newGame();        
        }
} 


function newGame () {
        buttons.forEach(button => button.classList.add('hide'));
        playAgainBtn.classList.add('show');
        playAgainBtn.addEventListener('click', (e)=> {
            liveScore.textContent = "";
            playAgainBtn.classList.remove('show');
            e.currentTarget.classList.add('hide');
            buttons.forEach(button => button.classList.remove('hide'));
        });
        
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
        compScore.textContent = 'Computer Score:' + `${computerScore}`;
        myScore.textContent = 'My score:' + `${playerScore}`;
    }  resetScores();
}
     
    


let playerScore = 0;
let computerScore = 0;





// Events for buttons on UI
let buttons = document.querySelectorAll('.game-btns');
let paperBtn = document.getElementById ('btn-paper');
let rockBtn = document.getElementById('btn-rock');
let scissorsBtn = document.getElementById ('btn-scissors');
let myScore = document.getElementById ('my-score');
let compScore = document.getElementById('comp-score');
let playAgainBtn = document.getElementById ('play-again');
let liveScore = document.getElementById('update');





paperBtn.addEventListener('click', (e) => { 
    console.log(playRound('paper', getComputerChoice()));

}); 
   


rockBtn.addEventListener('click', (e) => { 
        console.log(playRound('rock', getComputerChoice()));
        
        }); 
        


scissorsBtn.addEventListener('click', (e) => { 
            console.log(playRound('scissors', getComputerChoice()));
            
            });











