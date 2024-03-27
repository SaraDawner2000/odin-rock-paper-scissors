function getComputerChoice() {
    game_options = {0:"rock", 1:"paper", 2:"scissors"};
    computer_selection = Math.floor(Math.random() * 3);
    return game_options[computer_selection];
}
