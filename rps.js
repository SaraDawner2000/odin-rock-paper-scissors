function getComputerChoice() {
    game_options = {0:"rock", 1:"paper", 2:"scissors"};
    computer_selection = Math.floor(Math.random() * 3);
    return game_options[computer_selection];
}
function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase()
    if (computerChoice === "rock"){
        if (playerChoice === "scissors"){
            return "You Lose! Rock beats Scissors";
        } else if (playerChoice === "paper"){
            return "You Win! Paper beats Rock";
        } else {
            return "It's a Tie!";
        }
    } else if (computerChoice === "paper"){
        if (playerChoice === "scissors"){
            return "You Win! Scissors beat Paper";
        } else if (playerChoice === "rock"){
            return "You Lose! Paper beats Rock";
        } else {
            return "It's a Tie!";
        }
    } else {
        if (playerChoice === "paper"){
            return "You Lose! Scissors beat Paper";
        } else if (playerChoice === "rock"){
            return "You Win! Rock beats Scissors";
        } else {
            return "It's a Tie!";
        }
    }
}
