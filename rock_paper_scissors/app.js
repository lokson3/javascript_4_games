const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice").autocapitalize;
const resultDisplay  = document.getElementById("result");
const posssibleChoices = document.querySelectorAll("button");

let computerChoice;
let result;

let userChoices;

posssibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoices = e.target.id;
    userChoiceDisplay.innerHTML = userChoices;
    generateComputerChoice();
    getResult()

})) 

function generateComputerChoice() {
     const randomNumber = Math.floor(Math.random() * posssibleChoices.length) + 1
     if (randomNumber === 1) {
        computerChoice = "Rock"
     } else if (randomNumber === 2) {
        computerChoice = "Paper"
     }else {
        computerChoice = "Scissors"
     }
     computerChoiceDisplay.innerHTML = computerChoice;
     console.log(randomNumber)

}

function getResult() {
    if (computerChoice === userChoices) {
        result = "It's a draw!"
    }
    else if (computerChoice === "Rock" && userChoices === "Paper") {
        result = "You Lost!"
    }else if (computerChoice === "Rock" && userChoices === "Scissors") {
        result = "You Won!"
    }else if (computerChoice === "Scissors" && userChoices === "Paper") {
        result = "You Lost!"
    }else if (userChoices === "Paper" && computerChoice === "Scissors") {
        result = "You Won!"
    }else if (userChoices === "Rock" && computerChoice === "Paper") {
        result = "You Lost!"
    }else if (userChoices === "Scissors" && computerChoice === "Rock"){
        result = "You Lost!"
    }
    resultDisplay.innerHTML = result;
}

