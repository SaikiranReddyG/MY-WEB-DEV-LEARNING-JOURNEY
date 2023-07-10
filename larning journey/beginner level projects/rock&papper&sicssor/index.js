const buttons = document.querySelectorAll("button");
/*
queryselectorall--used to select and retrive multiple elements from document based
on a specified CSS selector 
it returns a static "nodelist" similar to an array, that contains all the elements that
match the specified selector in the order they appear
 */

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", ()=> {
        const result = playRound(button.id, computerPlay());
        resultEl.textContent = result;
        /*
        textcontent--used to retrieve or set the text content of an element 
        it represents the combined text of an element and all its decendents
        */
    });
});

function computerPlay() {
    const choices = ['rock', 'papper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return  choices[randomChoice];
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection===computerSelection) {
        return "it is a TIE!!! try again";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'papper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'papper')
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "your win     " + playerSelection + "  beat  " + computerSelection; 
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "you lose    " +   computerSelection + "  beat  " + playerSelection;
    }

}