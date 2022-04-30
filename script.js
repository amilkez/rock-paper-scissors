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
	const btns = document.querySelectorAll(".btn");
	let playerScore = 0;
	let computerScore = 0;
	btns.forEach((btn) => {
		btn.addEventListener("click", () => {
			const playerSelection = btn.innerText;
			const computerSelection = computerPlay();
			const output = playRound(playerSelection, computerSelection);
			if (output === "win") {
				playerScore++;
			} else if (output === "lose") {
				computerScore++;
			}
			if (playerScore >= 5) {
				return `You have won! Your Score:${playerScore} vs ${computerScore}`;
			} else if (computerScore >= 5) {
				return `You have lost! Your Score:${playerScore} vs ${computerScore}`;
			}
		});
	});
}

game();
