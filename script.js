
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
// Function to reset score and start new game //
function resetScores () {
        if (playerScore === 5 || computerScore === 5) {
            if (playerScore === 5) {
                liveScore.textContent = 'You won!';
                
            } else if (computerScore === 5) {
                liveScore.textContent = 'You lost!'; 
            }
            newGame();        
        }
} 


function newGame () {
        buttons.forEach(button => button.classList.remove('chosen'));
        buttons.forEach(button => button.classList.add('hide'));
            playAgainBtn.classList.add('show');
            playAgainBtn.addEventListener('click', (e)=> {
            liveScore.textContent = "";
            playerScore = 0;
            myScore.textContent = 'My score:' + 0;
            computerScore = 0;
            compScore.textContent = 'Computer Score:' + 0;
            playAgainBtn.classList.remove('show');
            e.currentTarget.classList.add('hide');
            buttons.forEach(button => button.classList.remove('hide'));
            rockBtn.classList.remove('chosen');
            paperBtn.classList.remove('chosen');
            scissorsBtn.classList.remove('chosen');
        });
}


function displayCompChoice (computerSelection) {
    if (computerSelection === 'paper') {
        paperBtn.classList.add('chosen');
    } else if (computerSelection === 'scissors') {
        scissorsBtn.classList.add('chosen');
    } else {
        rockBtn.classList.add('chosen')
    }
}




// Function for rock,paper,scissors game//
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
     console.log(playerSelection);
     console.log(computerSelection);
     
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        myScore.textContent = 'My score:' + `${playerScore}`;
        compScore.textContent = 'Computer Score:' + `${computerScore}`;
        liveScore.textContent = "Nice!"
        displayCompChoice ('paper');
        
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        myScore.textContent = 'My score:' + `${playerScore}`;
        compScore.textContent = 'Computer Score:' + `${computerScore}`;
        liveScore.textContent = "Oh no :("
        displayCompChoice ('rock');
    
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors' ) {
        
        myScore.textContent = 'My score:' + `${playerScore}`;
        compScore.textContent = 'Computer Score:' + `${computerScore}`;
        liveScore.textContent = "Tie!"
        
    
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        myScore.textContent = 'My score:' + `${playerScore}`;
        compScore.textContent = 'Computer Score:' + `${computerScore}`;
        liveScore.textContent = "Nice one!"
        displayCompChoice ('rock');
        
    
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        myScore.textContent = 'My score:' + `${playerScore}`;
        compScore.textContent = 'Computer Score:' + `${computerScore}`;
        liveScore.textContent = "Scissors cuts paper!"
        displayCompChoice ('scissors');
        
    
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        myScore.textContent = 'My score:' + `${playerScore}`;
        compScore.textContent = 'Computer Score:' + `${computerScore}`;
        liveScore.textContent = "Tie!"
        
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        compScore.textContent = 'Computer Score:' + `${computerScore}`;
        myScore.textContent = 'My score:' + `${playerScore}`;
        liveScore.textContent = "Nice! You crushed the scissors!"
        displayCompChoice ('scissors');

    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerScore++
        compScore.textContent = 'Computer Score:' + `${computerScore}`;
        myScore.textContent = 'My score:' + `${playerScore}`;
        liveScore.textContent = "Oh no!"
        displayCompChoice ('paper');

    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        compScore.textContent = 'Computer Score:' + `${computerScore}`;
        myScore.textContent = 'My score:' + `${playerScore}`;
        liveScore.textContent = "Tie!"
    }  resetScores();
}
     
    // DOM Events for buttons on UI
const buttons = document.querySelectorAll('img');
const paperBtn = document.getElementById ('btn-paper');
const rockBtn = document.getElementById('btn-rock');
const scissorsBtn = document.getElementById ('btn-scissors');
const myScore = document.getElementById ('my-score');
const compScore = document.getElementById('comp-score');
const playAgainBtn = document.getElementById ('play-again');
const liveScore = document.getElementById('update');



paperBtn.addEventListener('click', (e) => { 
    console.log(playRound('paper', getComputerChoice ()));
    e.target.classList.add('chosen');
   
}); 
   

rockBtn.addEventListener('click', (e) => { 
    console.log(playRound('rock', getComputerChoice()));
    e.target.classList.add ('chosen');
}); 
        

scissorsBtn.addEventListener('click', (e) => { 
    console.log(playRound('scissors', getComputerChoice()));
    e.target.classList.add('chosen');

});


buttons.forEach(button => button.addEventListener ('transitionend', (e) => {
    if (e.propertyName !== 'transform') return 
    e.target.classList.remove('chosen');
    
}));









