// variable that will allow us to update the human score
let humanScore = document.getElementById("hScore")

// variable that will allow us to update the computer score
let computerScore = document.getElementById("compScore")

// variable that will store a human or player choice

let humanChoice;

// variable that will update the computer's choice

let computerChoice;

// Variable to explain result on screen 

let resultLogic = document.getElementById('resultLogic');



// Function to determine the computer's choice 

function computerChoose(){
    const choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1){
        computerChoice = "Rock"
    }

    else if (choice ===2){
        computerChoice = "Paper"
    }
    else{
        computerChoice = "Scissors"
    }
}

function playGame(){ 


//storing button elements to variable and adding event listener 
const rockButton = document.getElementById("rockBtn");
const paperButton = document.getElementById("paperBtn");
const scissorsButton = document.getElementById("scissorBtn");



rockButton.addEventListener("click", function(){
    humanChoice = "Rock";
    computerChoose();

    if (computerChoice == "Rock"){
        resultLogic.textContent = "its a Draw";
    }

    else if (computerChoice == "Paper"){
        resultLogic.textContent = "Computer wins, Paper covers rock";
        

        
    }

    else if (computerChoice == "Scissors"){
        resultLogic.textContent = "Human wins Rock breaks scissors";
    }
    console.log(computerChoice);
    console.log(humanChoice);
})

paperButton.addEventListener("click", function(){
    humanChoice = "Paper";
    computerChoose();

    if (computerChoice == "Paper"){
        resultLogic.textContent = "its a Draw";
    }

    else if (computerChoice == "Rock"){
        resultLogic.textContent = "Human wins, Paper covers rock";
        
    }

    else if (computerChoice == "Scissors"){
        resultLogic.textContent = "computer wins, scissors break paper";
    }
    console.log(computerChoice);
    console.log(humanChoice);
})

scissorsButton.addEventListener("click", function(){
    humanChoice = "Scissors";
    computerChoose();

    if (computerChoice == "Scissors"){
        resultLogic.textContent = "its a Draw";
    }

    else if (computerChoice == "Paper"){
        resultLogic.textContent = "Human wins, scissors cut paper";
        
    }

    else if (computerChoice == "Rock"){
        resultLogic.textContent = "computer wins Rock breaks scissors";
    }
    console.log(computerChoice);
    console.log(humanChoice);
})




}

playGame();