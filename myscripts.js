//Function generar random piedra-papel-tijera
let randomNumber = Math.floor(Math.random() * 100) +1;

function getComputerChoice(){
    if(randomNumber >= 1 && randomNumber <= 33){
        return computerSelection = "rock"; 
    } else if(randomNumber >= 34 && randomNumber <= 67){
        return computerSelection = "paper";
    }
    computerSelection = "scissors";  
}

//Fuction jugar una ronda, que compare 2 parametros (playerSelection y 
//computerSelection) y return string de ganador o perdedor.
let promptPlayer = prompt("Rock, paper or scissors?");
let playerSelection = promptPlayer.toLowerCase();
let computerSelection;

getComputerChoice();
playRound();

function playRound(){
    if(playerSelection == "rock" && computerSelection == "scissors"){
        alert("You win! Rock beats scissors.");
    } else if (playerSelection == "rock" && computerSelection == "rock"){
        alert("It's a tie!");
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        alert("You lose! Paper beats rock.");
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        alert("You win! Paper beats rock.");
    } else if (playerSelection == "paper" && computerSelection == "paper"){
        alert("It's a tie!");
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        alert("You lose! Scissors beats paper.");
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        alert("You win! Scissors beats paper.");
    } else if (playerSelection == "scissors" && computerSelection == "scissors"){
        alert("It's a tie!");
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        alert("You lose! Rock beats scissors.");
    }

}