





let humScore = 0;
let compScore = 0;




function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    

    if(randNum == 0) {
        return "rock";
    }
    else if(randNum == 1) {
        return "paper";
    }
    else if(randNum == 2) {
        return "scissors";
    }
}


function getHumanChoice() {
    let humChoice = prompt();

    if(humChoice.toLowerCase() !== "rock" && humChoice.toLowerCase() !== "paper" &&  humChoice.toLowerCase() !== "scissor") {
        return 0;
    }

    return humChoice;
}


function playRound(humChoice, compChoice) {

    let human = humChoice();
    let computer = compChoice();
    if(human == "rock" && computer == "Paper") {
        compScore += 1;
        return "Computer Wins!!!!";
    }
    
    else if(human == "rock" && computer == "scissors") {
        humScore += 1;
        return "Player Wins!!";
    }
    else if(human == "paper" && computer == "rock") {
        humScore += 1;
        return "Player Wins!!";
    }
    else if(human == "paper" && computer == "scissors") {
        compScore += 1;
        return "Computer Wins!!";
    }
    else if(human == "scissors" && computer == "rock") {
        compScore += 1;
        return "Computer Wins";
    }
    else if(human == "scissors" && computer == "paper") {
        humScore += 1;
        return "Player Wins!!";
    }
    else {
        return "Tie!!";
    }
}

function playGame() {
    
    for(let i = 0; i < 5; i++) {
        let round = playRound(getHumanChoice, getComputerChoice);
        console.log(round);
    }

    console.log(`Player won: ${humScore} games.` );
    console.log(`Computer won: ${compScore} games.`);
}

playGame();