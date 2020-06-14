//VAR

let scorePlayer = 0;
let scoreComputer = 0;
let whichRound = 1;
const welcomeInGameId = document.querySelector('#welcome-in-game');
const imgAllId = document.querySelector('#img-all');
const btnClickStartId = document.querySelector('#btn-click-start');
const btnClickNewGameId = document.querySelector('#btn-click-new-game');
const btnClickStoneId = document.querySelector('#btn-click-stone');
const btnClickPaperId = document.querySelector('#btn-click-paper');
const btnClickScissorsId = document.querySelector('#btn-click-scissors');
const imgUserVsCpuId = document.querySelector('#img-user-vs-cpu');
const imgStonePcId = document.querySelector('#img-stone-pc');
const imgPaperPcId = document.querySelector('#img-paper-pc');
const imgScissorsPcId = document.querySelector('#img-scissors-pc');
const computerVsPlayerId = document.querySelector('#computer-vs-player');
const scoresOfId = document.querySelector('#scores-of');
const playerScoreId = document.querySelector('#player-score');
const computerScoreId = document.querySelector('#computer-score');


//START

btnClickStartId.addEventListener('click', function () {
    allOff();
    startGame();
});
//move
btnClickStoneId.addEventListener('click', function () {
    btnClickPaperId.classList.toggle('off');
    btnClickScissorsId.classList.toggle('off');
    moveGame('kamień');
    nextRound();
});
btnClickPaperId.addEventListener('click', function () {
    btnClickStoneId.classList.toggle('off');
    btnClickScissorsId.classList.toggle('off');
    moveGame('papier');
    nextRound();
});
btnClickScissorsId.addEventListener('click', function () {
    btnClickStoneId.classList.toggle('off');
    btnClickPaperId.classList.toggle('off');
    moveGame('nożyce');
    nextRound();
});

//new game
btnClickNewGameId.addEventListener('click', function () {
    allOff();
    resetGame();
    startGame();
});

//FUNCTION

function allOff() {
    welcomeInGameId.classList.add('off');
    imgAllId.classList.add('off');
    btnClickStartId.classList.add('off');
    btnClickNewGameId.classList.add('off');
    btnClickStoneId.classList.add('off');
    btnClickPaperId.classList.add('off');
    btnClickScissorsId.classList.add('off');
    imgUserVsCpuId.classList.add('off');
    imgStonePcId.classList.add('off');
    imgPaperPcId.classList.add('off');
    imgScissorsPcId.classList.add('off');
    computerVsPlayerId.classList.add('off');
    scoresOfId.classList.add('off');
}

function startGame() {
    welcomeInGameId.classList.remove('off');
    welcomeInGameId.innerHTML = 'Runda : ' + whichRound;
    btnClickStoneId.classList.remove('off');
    btnClickPaperId.classList.remove('off');
    btnClickScissorsId.classList.remove('off');
    scoresOfId.classList.remove('off');
    playerScoreId.innerHTML = 'Gracz : ' + scorePlayer;
    computerScoreId.innerHTML = 'Komputer : ' + scoreComputer;
}

function getMoveComp(argMoveComp) {
    imgUserVsCpuId.classList.toggle('off');
    if (argMoveComp == 1) {
        imgStonePcId.classList.toggle('off');
        return 'kamień';
    } else if (argMoveComp == 2) {
        imgPaperPcId.classList.toggle('off');
        return 'papier';
    } else if (argMoveComp == 3) {
        imgScissorsPcId.classList.toggle('off');
        return 'nożyce';
    }
}

function moveGame(argPlayerMove) {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveComp(randomNumber);
    scoreUserOrComp(computerMove, argPlayerMove);
}

function scoreUserOrComp(argComputerMove, argPlayerMove) {
    if (displayResult(argComputerMove, argPlayerMove) === 'Wygrałeś!') {
        scorePlayer++;
    } else if (displayResult(argComputerMove, argPlayerMove) === 'Przegrałeś!') {
        scoreComputer++;
    } else {
        scorePlayer++;
        scoreComputer++;
    }
}

function displayResult(argComputerMove, argPlayerMove) {
    if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
        (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
        (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
        return 'Wygrałeś!';
    } else if ((argComputerMove == 'papier' && argPlayerMove == 'kamień') ||
        (argComputerMove == 'nożyce' && argPlayerMove == 'papier') ||
        (argComputerMove == 'kamień' && argPlayerMove == 'nożyce')) {
        return 'Przegrałeś!';

    } else {
        return 'Remis!';
    }
}

function nextRound() {
    welcomeInGameId.innerHTML = 'Runda : ' + whichRound;
    playerScoreId.innerHTML = 'Gracz : ' + scorePlayer;
    computerScoreId.innerHTML = 'Komputer : ' + scoreComputer;
    setTimeout(() => {
        whichRound++;
        if (whichRound <= 3) {
            welcomeInGameId.innerHTML = 'Runda : ' + whichRound;
            imgUserVsCpuId.classList.toggle('off');
            imgStonePcId.classList.add('off');
            imgPaperPcId.classList.add('off');
            imgScissorsPcId.classList.add('off');
            btnClickStoneId.classList.remove('off');
            btnClickPaperId.classList.remove('off');
            btnClickScissorsId.classList.remove('off');
        } else endGame();
    }, 1000);
}

function endGame() {
    allOff();
    welcomeInGameId.classList.remove('off');
    welcomeInGameId.innerHTML = 'Koniec gry';
    computerVsPlayerId.classList.remove('off');
    if (scorePlayer < scoreComputer) {
        computerVsPlayerId.innerHTML = 'Wygrał ! Komputer !';
    } else if (scorePlayer > scoreComputer) {
        computerVsPlayerId.innerHTML = 'Wygrał ! Gracz !';
    } else {
        computerVsPlayerId.innerHTML = '! R E M I S !';
    }
    scoresOfId.classList.remove('off');
    btnClickNewGameId.classList.remove('off');
}

function resetGame() {
    scorePlayer = 0;
    scoreComputer = 0;
    whichRound = 1;
}