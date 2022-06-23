// script.js
// By Sean Oh and Ada Chika

// Event listener for start button press
var startButton = document.querySelector("#start-game");
startButton.addEventListener("click", playGame);

// Score counter and options array
const options = ["R", "P", "S"];
var numWins = 0;
var numLosses = 0;
var numTies = 0;

// Main game logic
function playGame() {
	startButton.innerHTML = "Continue";

  var userChoice = promptUser();
  if(!userChoice) return;

  // Generate a random choice out of the options for the computer
  var computerChoice = options[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  alert(`Computer chose ${computerChoice}`);

  displayWinner(userChoice, computerChoice);
  displayScore();

  // Confirm to run another round
  if(confirm("Play Again?")){
  	playGame();
  }

}

// Prompt for user choice and ensure it is valid
function promptUser() {
  var userChoice = prompt("Enter R, P, or S to select your choice.");
  userChoice = userChoice.toUpperCase();
  if (options.indexOf(userChoice) === -1) {
    var tryAgain = confirm("Invalid input! Try again?");
    if (tryAgain) {
      promptUser();
    } else{
    	return;
    }
  }
  return userChoice;
}

// Display the winner and increment score based on rock paper scissor logic
function displayWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    alert("You tie!");
    numTies++;
    return;
  } else if ((userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
  ) {
    alert("You win!");
    numWins++;
    return;
  } else {
    alert("You lose :(");
    numLosses++;
    return;
  }
}

// Display total scores at end of round
function displayScore() {
	alert("Current Score:\nWins: " + numWins +
  			"\nLosses: " + numLosses + 
        "\nTies: " + numTies);
}
