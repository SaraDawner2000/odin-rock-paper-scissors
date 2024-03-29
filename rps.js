function getComputerChoice() {
    gameOptions = ["rock","paper","scissors"];
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
const playerDiv = document.querySelector("#player-selection");
let playerScore = [0,0]
playerDiv.addEventListener("click", (event)=>{
    const target = event.target;
    const playerChoice = target.id;
    console.log(playerChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice)
    result = playRound(playerChoice, computerChoice);
    const para = document.createElement("p");
    if (result == 1){
        playerScore[0] += 1;
    } else if(result == -1){
        playerScore[1] += 1;
    } else{
        playerScore[0] += 1;
        playerScore[1] += 1;
    }
    let endGame = false;
    if (playerScore[0] === 5 && playerScore[1] === 5){
        para.textContent = `${playerChoice} vs ${computerChoice}. It's a tie!`
        para.style.color = 'blue';
        para.style.fontWeight = 'bold';
        playerScore = [0,0];
        endGame = true;
    } else if(playerScore[0] === 5){
        para.textContent = `${playerChoice} vs ${computerChoice}. You won! Final score is ${playerScore[0]}:${playerScore[1]}`;
        para.style.color = 'green';
        para.style.fontWeight = 'bold';
        playerScore = [0,0];
        endGame = true;
    } else if (playerScore[1] === 5){
        para.textContent = `${computerChoice} vs ${playerChoice}. You lost! Final score is ${playerScore[0]}:${playerScore[1]}`;
        para.style.color = 'red';
        para.style.fontWeight = 'bold';
        playerScore = [0,0];
        endGame = true;
    } else {
        para.textContent = `You played ${playerChoice} against ${computerChoice}. Your score is ${playerScore[0]}:${playerScore[1]}`
    }
    
    playerDiv.appendChild(para);
    
})
