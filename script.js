//create computer play
//returns 'rock', 'paper', or 'scissors' randomly

function winGame(playerSel, computerSel) {
	return `You win! ${playerSel} beats ${computerSel}`;
}
function loseGame(playerSel, computerSel) {
	return `You lose! ${computerSel} beats ${playerSel}`;
}
function draw() {
	return "No one wins, play again!";
}

function computerPlay() {
	const randomNum = Math.ceil(Math.random() * 3);
	return randomNum === 1 ? "Rock" : randomNum === 2 ? "Paper" : "Scissors";
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();

	if (playerSelection === "rock") {
		if (computerSelection === "rock") {
			return draw();
		} else if (computerSelection === "paper") {
			return loseGame(playerSelection, computerSelection);
		} else if (computerSelection === "scissors") {
			return winGame(playerSelection, computerSelection);
		}
	} else if (playerSelection === "paper") {
		if (computerSelection === "rock") {
			return winGame(playerSelection, computerSelection);
		} else if (computerSelection === "paper") {
			return draw();
		} else if (computerSelection === "scissors") {
			return loseGame(playerSelection, computerSelection);
		}
	}
}

const playerSelection = "paper";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
