const lightIds = {
  north: document.getElementById('northLight'),
  east: document.getElementById('eastLight'),
  south: document.getElementById('southLight'),
  west: document.getElementById('westLight')
};

const countdown = document.getElementById('countdown');
const directions = ['north', 'east', 'south', 'west'];
let current = 0;
let vehicleCounts = {};

function startCycle() {
  vehicleCounts = {
    north: parseInt(document.getElementById('north').value) || 0,
    east: parseInt(document.getElementById('east').value) || 0,
    south: parseInt(document.getElementById('south').value) || 0,
    west: parseInt(document.getElementById('west').value) || 0
  };

  current = 0;
  runCycle();
}

function runCycle() {
  let dir = directions[current];
  let baseTime = 3000;
  let multiplier = 500;
  let duration = Math.max(4000, baseTime + vehicleCounts[dir] * multiplier);

  for (let d in lightIds) {
    lightIds[d].classList.remove('green');
    lightIds[d].classList.add('red');
  }

  lightIds[dir].classList.remove('red');
  lightIds[dir].classList.add('green');

  

  startCountdown(duration / 1000);

  setTimeout(() => {
    current = (current + 1) % directions.length;
    runCycle();
  }, duration);
}

function startCountdown(seconds) {
  countdown.innerText = `⏱️ ${seconds}s remaining`;
  let remaining = seconds;
  const timer = setInterval(() => {
    remaining--;
    if (remaining <= 0) {
      clearInterval(timer);
      countdown.innerText = '';
    } else {
      countdown.innerText = `⏱️ ${remaining}s remaining`;
    }
  }, 1000);
}
