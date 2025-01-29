let countdownDuration = 36030; //this is in seconds

function updateCountdown() {
  // Calculate hours, minutes, and seconds
  const hours = Math.floor(countdownDuration / 3600);
  const minutes = Math.floor((countdownDuration % 3600) / 60);
  const seconds = countdownDuration % 60;

  // Update the countdown display
  document.querySelector(
    ".countdown"
  ).innerHTML = `${hours}h : ${minutes}m : ${seconds}s`;

  // Decrement the duration
  countdownDuration--;

  // Stop when it reaches 0
  if (countdownDuration < 0) {
    clearInterval(interval);
    document.querySelector(".countdown").innerHTML = "Offer Expired!";
  }
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);
