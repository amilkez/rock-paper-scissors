function computerPlay() {
	const randomNum = Math.ceil(Math.random() * 3);
	return randomNum === 1 ? "Rock" : randomNum === 2 ? "Paper" : "Scissors";
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();

	if (playerSelection === "rock") {
		if (computerSelection === "rock") {
			return "draw";
		} else if (computerSelection === "paper") {
			return "lose";
		} else if (computerSelection === "scissors") {
			return "win";
		}
	} else if (playerSelection === "paper") {
		if (computerSelection === "rock") {
			return "win";
		} else if (computerSelection === "paper") {
			return "draw";
		} else if (computerSelection === "scissors") {
			return "lose";
		}
	} else if (playerSelection === "scissors") {
		if (computerSelection === "rock") {
			return "lose";
		} else if (computerSelection === "paper") {
			return "win";
		} else if (computerSelection === "scissors") {
			return "draw";
		}
	}
}

function game() {
	let score = 0;
	const playerSelection = prompt();
	for (let i = 0; i < 5; i++) {
		const computerSelection = computerPlay();
		let output = playRound(playerSelection, computerSelection);
		if (output === "win") {
			score++;
		} else if (output === "lose") {
			score--;
		}
	}
	if (score > 0) {
		return "You win!";
	} else {
		return "Better luck next time!";
	}
}
