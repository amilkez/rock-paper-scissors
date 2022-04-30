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
