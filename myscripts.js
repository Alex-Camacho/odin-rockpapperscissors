//Function generar random piedra-papel-tijera
function getComputerChoice(){
    let computerSelection;
    let randomNumber = Math.floor(Math.random() * 100) +1;
    if(randomNumber >= 1 && randomNumber <= 33){
        return computerSelection = "rock"; 
    } else if(randomNumber >= 34 && randomNumber <= 67){
        return computerSelection = "paper";
    }
    return computerSelection = "scissors";  
}
//Función de ronda
function playRound(){
    let computerSelection = getComputerChoice();
    if(playerSelection == "rock" && computerSelection == "scissors"){
        alert("You win! Rock beats scissors.");
        playerScore += 1;
    } else if (playerSelection == computerSelection){
        alert("It's a tie!");
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        alert("You lose! Paper beats rock.");
        computerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        alert("You win! Paper beats rock.");
        playerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        alert("You lose! Scissors beats paper.");
        computerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        alert("You win! Scissors beats paper.");
        playerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        alert("You lose! Rock beats scissors.");
        computerScore += 1;
    }
}

let playerScore = document.getElementsByClassName("playerScore");
playerScore.textContent = playerScore;
let computerScore = document.getElementsByClassName("computerScore");

let playerSelection;

let buttonrock = document.getElementById("btnrock");
let buttonpaper = document.getElementById("btnpaper");
let buttonsci = document.getElementById("btnsci");

buttonrock.addEventListener("click", () => {
    playerSelection = "rock";
    playRound();
});
buttonpaper.addEventListener("click", () => {
    playerSelection = "paper";
    playRound();
});

buttonsci.addEventListener("click", () => {
    playerSelection = "scissors";
    playRound();
});
