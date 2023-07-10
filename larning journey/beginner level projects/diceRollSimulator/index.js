const buttonEl = document.getElementById("roll-button");

const diceEl = document.getElementById("dice");

const rollHistoryEL = document.getElementById("roll-history");

let historyList = [];

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    
    diceEl.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
}

function updateRollHistory() {
    rollHistoryEL.innerHTML = "";
    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `roll ${i + 1} <span>${getDiceFace(historyList[i])}</span>`;

        rollHistoryEL.appendChild(listItem);
    }
}

function getDiceFace(rollResult) {
    switch (rollResult) {
    /* switch-- it is a control flow statment, allows to execute different code blocks 
    based on the value of an expression
    it provides easy way to write multiple if-else statments when you need to compare single 
    expression against multiple possible values
    case--if a match is founc between the switch value and the value specified in the case, the code inside the 
    case is executed 
    default--if none of the case values match with the switch the defalult value is executed */
        case 1 :
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3 :
            return "&#9858;";
        case 4 :
            return "&#9859;";
        case 5 :
            return "&#9860;";
        case 6 :
            return "&#9861;";
        default :
            return " ";
    }
}

buttonEl.addEventListener("click", ()=> {  //"()=>" it is an arrow function/lambda function & is a short way of defining a function in JS
    diceEl.classList.add('roll-animation');
    setTimeout(() => {              //setTimeout--allows to schedule the evaluation of an expression after a specified delay
       diceEl.classList.remove("rollanimtion");
       rollDice(); 
    }, 1000);
});
