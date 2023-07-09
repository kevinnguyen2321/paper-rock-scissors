function getComputerChoice(params) {
    const Choice = Math.floor(Math.random() * 4);
    if (Choice === 0 || Choice ===1) {
        return 'Paper';
    } else if (Choice === 2) {
        return 'Rock';
    } else {
        return 'Scissors';
    }
}




