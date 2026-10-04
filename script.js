// Keep track of attendance
let attendeeCount = 0;
let waterCount = 0;
let zeroCount = 0;
let powerCount = 0;

// Attendance goal
const attendanceGoal = 50;

// Get elements from the HTML
const checkInForm = document.getElementById("checkInForm");
const attendeeName = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

const greeting = document.getElementById("greeting");
const attendeeCountDisplay = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");

const waterCountDisplay = document.getElementById("waterCount");
const zeroCountDisplay = document.getElementById("zeroCount");
const powerCountDisplay = document.getElementById("powerCount");

// Run when someone checks in
checkInForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = attendeeName.value;
  const team = teamSelect.value;

  // Add to total attendance
  attendeeCount++;

  // Update the selected team's attendance
  if (team === "water") {
    waterCount++;
    waterCountDisplay.textContent = waterCount;
    greeting.textContent = `🎉 Welcome, ${name} from Team Water Wise!`;
  } else if (team === "zero") {
    zeroCount++;
    zeroCountDisplay.textContent = zeroCount;
    greeting.textContent = `🎉 Welcome, ${name} from Team Net Zero!`;
  } else if (team === "power") {
    powerCount++;
    powerCountDisplay.textContent = powerCount;
    greeting.textContent = `🎉 Welcome, ${name} from Team Renewables!`;
  }

  greeting.classList.add("success-message");

  // Update total attendance
  attendeeCountDisplay.textContent = attendeeCount;

  // Update progress bar
  const progressPercent = (attendeeCount / attendanceGoal) * 100;
  progressBar.style.width = `${progressPercent}%`;

  // Clear the form for the next attendee
  attendeeName.value = "";
  teamSelect.selectedIndex = 0;
});
