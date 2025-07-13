 const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const countdown = document.getElementById("countdown");

function setLight(activeLight) {
  red.classList.remove("active");
  yellow.classList.remove("active");
  green.classList.remove("active");

  if (activeLight === "red") red.classList.add("active");
  else if (activeLight === "yellow") yellow.classList.add("active");
  else if (activeLight === "green") green.classList.add("active");
}

function startSignal() {
  let count = parseInt(document.getElementById("vehicleCount").value) || 0;

  // formula: greenTime = 3s + (0.5s * count)
  let greenTime = 3000 + count * 500;
  let yellowTime = 2000;
  let redTime = 3000;

  console.log(`Vehicle count: ${count}`);
  console.log(`Green light duration: ${greenTime / 1000}s`);

  setLight("green");
  startCountdown(greenTime / 1000);

  setTimeout(() => {
    setLight("yellow");
    startCountdown(yellowTime / 1000);
  }, greenTime);

  setTimeout(() => {
    setLight("red");
    startCountdown(redTime / 1000);
  }, greenTime + yellowTime);
}

function startCountdown(seconds) {
  countdown.innerText = `Time Left: ${seconds}s`;
  let remaining = seconds;

  const timer = setInterval(() => {
    remaining--;
    if (remaining <= 0) {
      clearInterval(timer);
      countdown.innerText = "";
    } else {
      countdown.innerText = `Time Left: ${remaining}s`;
    }
  }, 1000);
}
