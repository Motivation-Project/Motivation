const motivations = [
  {
    name: "However difficult life may seem, there is always something you can do and succeed at.",
    creator: "Creator: Stephen Hawking"
  },
  {
    name: "The future belongs to those who believe in the beauty of their dreams.",
    creator: "Creator: Eleanor Roosevelt"
  }
];

// set this to null when not being tested
const currentmotivationIndexOverride = null;

function getmotivationOfTheDay() {
  if (
    currentmotivationIndexOverride !== null &&
    currentmotivationIndexOverride >= 0 &&
    currentmotivationIndexOverride < motivations.length
  ) {
    return motivations[currentmotivationIndexOverride];
  }

  const now = new Date();
  const gmtMidnight = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );

  const daysSinceEpoch = Math.floor(
    gmtMidnight.getTime() / (1000 * 60 * 60 * 24)
  );

  const motivationIndex = daysSinceEpoch % motivations.length;
  return motivations[motivationIndex];
}

function displaymotivationOfTheDay() {
  const motivation = getmotivationOfTheDay();
  const motivationDisplay = document.getElementById("motivation-display");

  motivationDisplay.innerHTML = `
    <h3>${motivation.name}</h3>
    <p>${motivation.creator}</p>
  `;
}

window.addEventListener("DOMContentLoaded", displaymotivationOfTheDay);
