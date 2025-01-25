function getComputerChoice(one, two, three) {
    const choices = ["Rock", "Paper", "Scissors"];
    const result = choices[Math.floor(Math.random()*choices.length)];
    console.log(result);
    return result;
}
getComputerChoice();

function getHumanChoice() {
    let user = prompt("Please enter your choice: rock, paper or scissors");
    user = user.toLowerCase();
    if (user != "rock" && user != "paper" && user != "scissors" ){
        return "Error";
    }
    console.log(user);
    return user;
}
getHumanChoice()

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        console.log("It's a tie!");
    }
    else if
            ((humanChoice == 'paper' && computerChoice == 'rock') ||
            (humanChoice == 'rock' &&  computerChoice == 'scissors') ||
            (humanChoice == 'scissors' && computerChoice == 'paper')) {
                console.log("You win!");
                humanScore++;
            }
    else {
            console.log("You Lose!");
            computerScore++;
    }               
}        

function playgame() {
    for(let i=0; i<5; i++) {
        const humanChoice = getHumanChoice();
        if (humanChoice == "Error") {
            console.log("Invalid input. Round skipped.");
            i--;
            continue;
        }
        const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log(`YOU WIN! Your Score: ${humanScore}, Computer Score: ${computerScore}.`);
    } else if (humanScore < computerScore) {
        console.log(`YOU LOSE! Your Score: ${humanScore}, Computer Score: ${computerScore}.`);
    } else {
        console.log(`It's a tie! Your Score: ${humanScore}, Computer Score: ${computerScore}.`);
    }
}
    
playgame();