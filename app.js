


const btn = document.querySelector("#btn");
const results = document.querySelector(".results");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const score = document.createElement("p");
const compSc = document.createElement("p");
const p = document.createElement("p");
results.appendChild(p);
results.appendChild(score);
results.appendChild(compSc);
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


function getHumanChoice(selection) {
    let humChoice = selection;
   
    if(humChoice.toLowerCase() !== "rock" && humChoice.toLowerCase() !== "paper" &&  humChoice.toLowerCase() !== "scissor") {
        return 0;
    }

    return humChoice;
}


function playRound(humChoice, compChoice, selection) {

    let human = humChoice(selection);
    let computer = compChoice();
    if(human == "rock" && computer == "Paper") {
        compScore += 1;
        p.innerText = "Computer Wins!!!!";
    }
    
    else if(human == "rock" && computer == "scissors") {
        humScore += 1;
        p.innerText = "Player Wins!!";
    }
    else if(human == "paper" && computer == "rock") {
        humScore += 1;
        p.innerText = "Player Wins!!";
    }
    else if(human == "paper" && computer == "scissors") {
        compScore += 1;
        p.innerText = "Computer Wins!!";
    }
    else if(human == "scissors" && computer == "rock") {
        compScore += 1;
        p.innerText = "Computer Wins";
    }
    else if(human == "scissors" && computer == "paper") {
        humScore += 1;
        p.innerText = "Player Wins!!";
    }
    else {
        p.innerText = "Tie!!";
    }
    score.textContent = "Player Score: " + humScore;
    compSc.textContent = "Computer Score: " + compScore
}

// function playGame() {
    
    
//     let round = playRound(getHumanChoice, getComputerChoice);
//     console.log(round);
    

//     console.log(`Player won: ${humScore} games.` );
//     console.log(`Computer won: ${compScore} games.`);
    
// }



rock.addEventListener('click', (e) => playRound(getHumanChoice, getComputerChoice, "rock"));
paper.addEventListener('click', (e) => playRound(getHumanChoice, getComputerChoice, "paper"));
scissors.addEventListener('click', (e) => playRound(getHumanChoice, getComputerChoice, "scissors"));