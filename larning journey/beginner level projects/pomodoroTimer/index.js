const startEL = document.getElementById("start");
const stopEL = document.getElementById("stop");
const resetEL = document.getElementById("reset");
const timerEL = document.getElementById("timer");

let interval;
let timeLeft = 1500;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:
       ${seconds.toString().padStart(2, "0")}`;
       /*
       tostring--convert a value used to convert  a value to its coressponding string repersentation,
       
        */
    
    timerEL.innerHTML = formattedTime;
}

function startTimer () {
    interval = setInterval(()=> {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval);
            alert ("time's UP!!!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000)
}

function stopTimer () {
    clearInterval(interval);
}

function resetTimer () {
    clearInterval(interval);
    timeLeft= 1500;
    updateTimer();
}

startEL.addEventListener("click", startTimer);
stopEL.addEventListener("click", stopTimer);
resetEL.addEventListener("click", resetTimer);