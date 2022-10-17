let randomNumber = Math.floor(Math.random() * 100) +1;

function getComputerChoice(){
    if(randomNumber >= 1 && randomNumber <= 33){
      console.log("Rock");
      return;  
    } else if(randomNumber >= 34 && randomNumber <= 67){
        console.log("Paper");
        return;
    }
    console.log("Scissors");  
}