const startPom = document.querySelector('#start');
const stopPom = document.querySelector('#stop');
const resetPom = document.querySelector('#reset');
const timerPom = document.querySelector('#timer');

let interval;
let timeLeft = 1500;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    timerPom.innerHTML = formattedTime;
}

function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000)
    startPom.disabled = true;
};

function stopTimer() {
    clearInterval(interval);
};

function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
    startPom.disabled = false;
};

startPom.addEventListener("click", startTimer);
stopPom.addEventListener("click", stopTimer);
resetPom.addEventListener("click", resetTimer);