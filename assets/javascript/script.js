// Declare variables for player and computer scores and ties
// Create an array with options rock, paper, scissors
// Use random number generator for the computer's choice of r, p, s
// Use conditionals to determine who wins
//    if player's choice === computer's choice, we have a tie
//    if player selects rock and computer selects paper, then computer wins
//    else if player selects rock and computer selects scissors, then player wins
//    else if player selects paper and computer selects scissors, then player wins
//    etc...
// After each round, ask if the player wants to do another round
// Keep track of player wins, losses and ties


var startButton = document.querySelector("#start-game");
startButton.addEventListener("click", playGame);

const options = ["R", "P", "S"];
var numWins = 0;
var numLosses = 0;
var numTies = 0;

function playGame() {
	startButton.innerHTML = "Continue";

  var userChoice = promptUser();
  if(!userChoice) return;

  var computerChoice = options[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  alert(`Computer chose ${computerChoice}`);
  displayWinner(userChoice, computerChoice);
  displayScore();
  if(confirm("Play Again?")){
  	playGame();
  }

}

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

function displayScore() {
	alert("Current Score:\nWins: " + numWins +
  			"\nLosses: " + numLosses + 
        "\nTies: " + numTies);
}
