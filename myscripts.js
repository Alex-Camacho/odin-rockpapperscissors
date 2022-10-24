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
        playerScore += 1;
        document.getElementById("roundResult").textContent = "You win! Rock beats scissors.";
    } else if (playerSelection == computerSelection){
        document.getElementById("roundResult").textContent = "It's a tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore += 1;
        document.getElementById("roundResult").textContent = "You lose! Paper beats rock."
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore += 1;
        document.getElementById("roundResult").textContent = "You win! Paper beats rock."
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore += 1;
        document.getElementById("roundResult").textContent = "You lose! Scissors beats paper."
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        alert("You win! Scissors beats paper.");
        playerScore += 1;
        document.getElementById("roundResult").textContent = "You win! Scissors beats paper."
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore += 1;
        document.getElementById("roundResult").textContent = "You lose! Rock beats scissors."
    }
    update();
}

//Función update scores
function update(){
    document.getElementById("playerScore").textContent = `Player score: ${playerScore}`;
    document.getElementById("computerScore").textContent = `Computer score: ${computerScore}`;
    if(playerScore == 5){
        alert("You reached 5 points. You win!")
    }
    else if(computerScore == 5){
        alert("Computer reached 5 points. You lose!")
    }
}

let playerScore = 0;
let computerScore = 0;

document.getElementById("playerScore").textContent = `Player score: ${playerScore}`;
document.getElementById("computerScore").textContent = `Computer score: ${computerScore}`;
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

document.getElementById("roundResult").textContent = "Let's play!";