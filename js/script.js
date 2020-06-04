//player
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let playerMove = getMoveName (playerInput);

printMessage('Twój ruch to : ' + playerMove);

let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = getMoveName (randomNumber);

printMessage('Mój ruch to : ' + computerMove);

// let whoWins = displayResult (computerMove, playerMove)
//
// printMessage('Wynik gry to  : ' + whoWins);

printMessage('Wynik gry to  : ' +  displayResult (computerMove, playerMove));
