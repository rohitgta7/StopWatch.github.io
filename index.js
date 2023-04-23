const startStopButton = document.getElementById("pauseButton");
const resetButton = document.querySelector("#resetButton");
const timer = document.getElementById("timer");

let hour = 0;
let minute = 0;
let second = 0;
let timeInterval = null;
let timeStatus = 'stopped';

function convertNumberIntoTime() {
  if (second == 60) {
    second = 0;
    minute++;
  } else if (minute == 60) {
    minute = 0;
    second = 0;
    hour++;
  }
}

function addProperStyling() {
  let mainSec = `0${second}`
  if (second >= 10) {
    mainSec = second
  }
  let mainMinute = `0${minute}`
  if (minute >= 10) {
    mainMinute = minute
  }
  let mainHour = `0${hour}`
  if (hour >= 10) {
    mainHour = hour
  }
  timer.innerText = `${mainHour}:${mainMinute}:${mainSec}`;
}

function startTimer() {
  second++;
  convertNumberIntoTime();
  addProperStyling();
}

startStopButton.addEventListener("click", function() {
  if(timeStatus === "stopped") {
    timeInterval = window.setInterval(startTimer, 1000);
    startStopButton.innerHTML =
      `<span class="material-icons" id="play">
        pause
      </span>`;
    timeStatus = "started";
  } else {
    window.clearInterval(timeInterval);
    startStopButton.innerHTML =
      `<span class="material-icons" id="pause">
        play_arrow
      </span>`;
    timeStatus = "stopped";
  }
});

function resetTimer() {
  second = 0;
  minute = 0;
  hour = 0;
  addProperStyling();
  console.log("timeStatus", timeStatus)
  if (timeStatus == "started") {
    window.clearInterval(timeInterval);
    startStopButton.innerHTML =
      `<span class="material-icons" id="pause">
        play_arrow
      </span>`;
    timeStatus = "stopped";
  } else {
    console.log("enter")
    window.clearInterval(timeInterval);
  }
}
resetButton.addEventListener("click", resetTimer)