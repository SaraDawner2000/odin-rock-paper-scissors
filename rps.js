function getComputerChoice() {
    gameOptions = {0:"rock", 1:"paper", 2:"scissors"};
    computerSelection = Math.floor(Math.random() * 3);
    return gameOptions[computerSelection];
}
function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase()
    if (computerChoice === "rock"){
        if (playerChoice === "scissors"){
            return -1;
        } else if (playerChoice === "paper"){
            return 1;
        } else {
            return 0;
        }
    } else if (computerChoice === "paper"){
        if (playerChoice === "scissors"){
            return 1;
        } else if (playerChoice === "rock"){
            return -1;
        } else {
            return 0;
        }
    } else {
        if (playerChoice === "paper"){
            return -1;
        } else if (playerChoice === "rock"){
            return 1;
        } else {
            return 0;
        }
    }
}

function playGame(){
    score = 0;
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Rock, paper or scissors: ").toLowerCase();
        computerSelection = getComputerChoice();
        console.log(`You played ${playerSelection} vs ${computerSelection}`);
        score += playRound(playerSelection, computerSelection);
    }
    if (score > 0){
        return "You won!"
    } else if (score < 0){
        return "You lost!"
    } else {
        return "It's a tie!"
    }
}
console.log(playGame())