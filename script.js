// Get the start, stop, and reset buttons by their IDs
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

// Initialize the hour, minute, second, and count variables to zero
let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

// Add an event listener to the start button
startBtn.addEventListener("click", function () {
  // Set the timer variable to true
  timer = true;
  // Call the stopWatch function
  stopWatch();
});

// Add an event listener to the stop button
stopBtn.addEventListener("click", function () {
  // Set the timer variable to false
  timer = false;
});

// Add an event listener to the reset button
resetBtn.addEventListener("click", function () {
  // Set the timer variable to false
  timer = false;
  // Reset the hour, minute, second, and count variables to zero
  hour = 0;
  minute = 0;
  second = 0;
  count = 0;
  // Set the inner HTML of the hour, minute, second, and count spans to zero
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
});

// Define the stopWatch function
function stopWatch() {
  // If the timer variable is true
  if (timer) {
    // Increment the count variable
    count++;

    // If the count variable is equal to 100
    if (count == 100) {
      // Increment the second variable
      second++;
      // Reset the count variable to zero
      count = 0;
    }

    // If the second variable is equal to 60
    if (second == 60) {
      // Increment the minute variable
      minute++;
      // Reset the second variable to zero
      second = 0;
    }

    // If the minute variable is equal to 60
    if (minute == 60) {
      // Increment the hour variable
      hour++;
      // Reset the minute and second variables to zero
      minute = 0;
      second = 0;
    }

    // Convert the hour, minute, second, and count variables to strings
    let hrString = hour;
    let minString = minute;
    let secString = second;
    let countString = count;

    // If the hour variable is less than 10, add a leading zero to the hour string
    if (hour < 10) {
      hrString = "0" + hrString;
    }

    // If the minute variable is less than 10, add a leading zero to the minute string
    if (minute < 10) {
      minString = "0" + minString;
    }

    // If the second variable is less than 10, add a leading zero to the second string
    if (second < 10) {
      secString = "0" + secString;
    }

    // If the count variable is less than 10, add a leading zero to the count string
    if (count < 10) {
      countString = "0" + countString;
    }
    // Set the inner HTML of the hour, minute, second, and count spans to their corresponding string values
    // Update the HTML elements with the new values
    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;

    // Set a timer to call stopWatch function again after 10 milliseconds
    setTimeout(stopWatch, 10);
  }
}
