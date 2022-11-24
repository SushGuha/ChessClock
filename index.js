let timeStr1 = "00:30:00";
let timeStr2 = "00:30:00";
let time1 = 30 * 60;
let time2 = 30 * 60;
let act1 = false;
let act2 = false;

let showIps = true;
let increment = 0;

let prevPause = -1;

function setIncr() {
  let inIncr = document.getElementById("increment").value;
  if (isNaN(inIncr)) {
    document.getElementById("increment").value = "";
    window.alert("Must input numbers");
    return;
  }
  if (1 * inIncr < 0) {
    document.getElementById("increment").value = "";
    window.alert("Must input positives numbers");
    return;
  }
  increment = 1 * inIncr;

  if (increment % 0.5 !== 0) {
    window.alert("Only increments of multiples of 0.5 are allowed.");
    increment = Math.round(increment);
  }

  document.getElementById("incrText").innerHTML = `${increment} s`;
  document.getElementById("increment").value = "";
}

function setTime(id) {
  if (id === "clock1") {
    //
    let hours = document.getElementById("player-1-hours").value;
    let minutes = document.getElementById("player-1-mins").value;
    let seconds = document.getElementById("player-1-secs").value;
    if (hours === "") {
      hours = 0;
    }
    if (minutes === "") {
      minutes = 0;
    }
    if (seconds === "") {
      seconds = 0;
    }
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
      document.getElementById("player-1-hours").value = "";
      document.getElementById("player-1-mins").value = "";
      document.getElementById("player-1-secs").value = "";
      window.alert("Must input numbers");
      return;
    }
    if (seconds < 0 || minutes < 0 || hours < 0) {
      document.getElementById("player-1-hours").value = "";
      document.getElementById("player-1-mins").value = "";
      document.getElementById("player-1-secs").value = "";
      window.alert("Must input positive numbers");
      return;
    }

    if (seconds % 0.5 !== 0) {
      window.alert("Only multiples of 0.5 are allowed.");
      seconds = Math.round(seconds);
    }
    if (minutes % 0.5 !== 0) {
      window.alert("Only multiples of 0.5 are allowed.");
      minutes = Math.round(minutes);
    }
    if (hours % 0.5 !== 0) {
      window.alert("Only multiples of 0.5 are allowed.");
      hours = Math.round(hours);
    }

    time1 = seconds * 1 + minutes * 60 + hours * 3600;

    minutes = Math.floor(time1 / 60);
    hours = Math.floor(time1 / 3600);
    if (hours < 0) {
      hours = 0;
    }
    minutes = minutes % 60;
    seconds = time1 % 60;
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      if ((seconds * 10) % 10 === 0) {
        seconds = `0${seconds}`;
      }
    }
    timeStr1 = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock1").innerHTML = timeStr1;
    document.getElementById("player-1-hours").value = "";
    document.getElementById("player-1-mins").value = "";
    document.getElementById("player-1-secs").value = "";
  } else {
    let hours = document.getElementById("player-2-hours").value;
    let minutes = document.getElementById("player-2-mins").value;
    let seconds = document.getElementById("player-2-secs").value;

    if (hours === "") {
      hours = 0;
    }
    if (minutes === "") {
      minutes = 0;
    }
    if (seconds === "") {
      seconds = 0;
    }
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
      document.getElementById("player-2-hours").value = "";
      document.getElementById("player-2-mins").value = "";
      document.getElementById("player-2-secs").value = "";
      window.alert("Must input numbers");
      return;
    }

    if (seconds < 0 || minutes < 0 || hours < 0) {
      document.getElementById("player-2-hours").value = "";
      document.getElementById("player-2-mins").value = "";
      document.getElementById("player-2-secs").value = "";
      window.alert("Must input positive numbers");
      return;
    }
    if (seconds % 0.5 !== 0) {
      window.alert("Only multiples of 0.5 are allowed.");
      seconds = Math.round(seconds);
    }
    if (minutes % 0.5 !== 0) {
      window.alert("Only multiples of 0.5 are allowed.");
      minutes = Math.round(minutes);
    }
    if (hours % 0.5 !== 0) {
      window.alert("Only multiples of 0.5 are allowed.");
      hours = Math.round(hours);
    }

    time2 = seconds * 1 + minutes * 60 + hours * 3600;

    minutes = Math.floor(time2 / 60);
    hours = Math.floor(time2 / 3600);
    if (hours < 0) {
      hours = 0;
    }
    minutes = minutes % 60;
    seconds = time2 % 60;
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      if ((seconds * 10) % 10 === 0) {
        seconds = `0${seconds}`;
      }
    }
    timeStr2 = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock2").innerHTML = timeStr2;
    document.getElementById("player-2-hours").value = "";
    document.getElementById("player-2-mins").value = "";
    document.getElementById("player-2-secs").value = "";
  }
}

function clockReset() {
  timeStr1 = "0:30:00";
  timeStr2 = "0:30:00";
  time1 = 30 * 60;
  time2 = 30 * 60;
  prevPause = -1;
  act1 = false;
  act2 = false;
  document.getElementById("clock1").innerHTML = timeStr1;
  document.getElementById("clock2").innerHTML = timeStr2;
  showIps = true;
  changeInputs();
  increment = 0;
  document.getElementById("pause").innerHTML = "Pause";
  document.getElementById("incrText").innerHTML = ``;
  document.getElementById("clock1").className = "clock";
  document.getElementById("clock2").className = "clock";
}

function changeInputs() {
  if (showIps) {
    document.getElementById("inputs").hidden = false;
  } else {
    document.getElementById("inputs").hidden = true;
  }
}

function pause() {
  if (document.getElementById("pause").innerHTML !== "Unpause") {
    document.getElementById("pause").innerHTML = "Unpause";
    if (act1) {
      prevPause = 1;
    } else {
      prevPause = 2;
    }
    act1 = false;
    act2 = false;
  } else {
    document.getElementById("pause").innerHTML = "Pause";
    if (prevPause === 1) {
      act1 = true;
    } else {
      act2 = true;
    }
    prevPause = -1;
  }
}

function switchClk([input, source]) {
  if (showIps) {
    showIps = false;
    changeInputs();
  }
  if (input === "btn" && !act1 && !act2) {
    if (prevPause === -1) {
      window.alert("PLEASE CLICK ONE OF THE CLOCKS TO START");
    } else {
      window.alert("PLEASE CLICK ONE OF THE CLOCKS TO UNPAUSE");
    }
    return;
  }
  if (prevPause !== -1) {
    return;
  }
  // Make sound here.
  let audio = new Audio("clock.wav");
  audio.loop = false;
  audio.play();
  if (act1) {
    time1 += increment * 1;
    act1 = false;
    act2 = true;
    document.getElementById("clock1").innerHTML = getTimeString(time1);
  } else if (act2) {
    time2 += increment * 1;
    act1 = true;
    act2 = false;
    document.getElementById("clock2").innerHTML = getTimeString(time2);
  } else {
    // Starting the game for the first time
    if (source === "clock1") {
      act1 = false;
      act2 = true;
    } else {
      act1 = true;
      act2 = false;
    }
  }
}

window.addEventListener(
  "keydown",
  function (e) {
    if (e.key == " ") {
      switchClk("space");
    } else if (e.key == "p") {
      pause();
    } else if (e.key == "r") {
      clockReset();
    }
  },
  false
);

let countT1 = 0;
let countT2 = 0;

function updateClk() {
  if (!act1 && !act2) {
    return;
  }
  if (act1) {
    time1--;
    if (time1 < 60) {
      if (time1 % 2 === 0) {
        document.getElementById("clock1").className = "clockTimeOut";
      } else {
        document.getElementById("clock1").className = "clockFlashing";
      }
    } else {
      document.getElementById("clock1").className = "clock";
    }
    let minutes = Math.floor(time1 / 60);
    let hours = Math.floor(time1 / 3600);
    if (hours < 0) {
      hours = 0;
    }
    minutes = minutes % 60;
    let seconds = time1 % 60;
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      if ((seconds * 10) % 10 === 0) {
        seconds = `0${seconds}`;
      }
    }
    timeStr1 = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock1").innerHTML = timeStr1;
    if (time1 <= 0) {
      timesup();
      document.getElementById("clock1").className = "clockTimeOut";
      window.alert("PLAYER-1 OUT OF TIME. PLAYER-2 WINS!!");
      act1 = false;
      act2 = false;
    }
    return;
  }
  if (act2) {
    time2--;
    if (time2 < 60) {
      if (time2 % 2 === 0) {
        document.getElementById("clock2").className = "clockTimeOut";
      } else {
        document.getElementById("clock2").className = "clockFlashing";
      }
    } else {
      document.getElementById("clock2").className = "clock";
    }
    let minutes = Math.floor(time2 / 60);
    let hours = Math.floor(time2 / 3600);
    if (hours < 0) {
      hours = 0;
    }
    minutes = minutes % 60;
    let seconds = time2 % 60;
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      if ((seconds * 10) % 10 === 0) {
        seconds = `0${seconds}`;
      }
    }
    timeStr2 = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock2").innerHTML = timeStr2;
    if (time2 <= 0) {
      timesup();
      document.getElementById("clock2").className = "clockTimeOut";
      window.alert("PLAYER-2 OUT OF TIME. PLAYER-1 WINS!!");
      act1 = false;
      act2 = false;
    }
    return;
  }
}

setInterval(updateClk, 1000);

function getTimeString(timeIpt) {
  let minutes = Math.floor(timeIpt / 60);
  let hours = Math.floor(timeIpt / 3600);
  if (hours < 0) {
    hours = 0;
  }
  minutes = minutes % 60;
  let seconds = timeIpt % 60;
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
  //   document.getElementById("clock1").innerHTML = timeStr1;
}

function timesup() {
  let audio = new Audio("timeupscut.mp3");
  audio.loop = false;
  audio.play();
}
