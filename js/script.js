//var
let playerMove;
let scorePlayer = 0;
let scoreComputer = 0;
let whichRound = 1;
const roundH1 = document.querySelector( '#welcom-in-game');
const scorePlayerH3 = document.querySelector('#player-score');
const scoreComputerH3 = document.querySelector('#computer-score');
const computerCsPlayerH4 = document.querySelector('#computer-vs-player');
const clickStartId = document.querySelector('#click-start');
const clickStoneId = document.querySelector('#click-stone');
const clickPaperId = document.querySelector('#click-paper');
const clickScissorsId = document.querySelector('#click-scissors');
const clickNewGameId = document.querySelector('#click-new-game');

//start
clickStartId.addEventListener('click', function () {
    document.querySelector('button').hidden = false;
    document.querySelector('#computer-vs-player').hidden = false;
    document.querySelector('#click-start').hidden = true;
    document.querySelector('#click-stone').hidden = false;
    document.querySelector('#click-paper').hidden = false;
    document.querySelector('#click-scissors').hidden = false;
    document.querySelector('#player-score').hidden = false;
    document.querySelector('#computer-score').hidden = false;
    document.querySelector('#img-all').hidden = true;
    roundH1.innerHTML = 'Runda : ' + whichRound;
    scorePlayerH3.innerHTML = 'Gracz : ' + scorePlayer;
    scoreComputerH3.innerHTML = 'Komputer : ' + scoreComputer;
});
//move
clickStoneId.addEventListener('click', function () {
    playerMove = 'kamień';
    document.querySelector('#click-paper').hidden = true;
    document.querySelector('#click-scissors').hidden = true;
    movePKN();

});
clickPaperId.addEventListener('click', function () {
    playerMove = 'papier';
    document.querySelector('#click-stone').hidden = true;
    document.querySelector('#click-scissors').hidden = true;
    movePKN();
});

clickScissorsId.addEventListener('click', function () {
    playerMove = 'nożyce';
    document.querySelector('#click-paper').hidden = true;
    document.querySelector('#click-stone').hidden = true;
    movePKN();
});

//new game
clickNewGameId.addEventListener('click', function () {
    document.querySelector('#computer-vs-player').hidden = true;
    document.querySelector('#click-start').hidden = false;
    document.querySelector('#click-stone').hidden = true;
    document.querySelector('#click-paper').hidden = true;
    document.querySelector('#click-scissors').hidden = true;
    document.querySelector('#player-score').hidden = true;
    document.querySelector('#computer-score').hidden = true;
    document.querySelector('#click-new-game').hidden = true;
    roundH1.innerHTML = 'Cześć witaj ponownie';
    scorePlayerH3.innerHTML = 'Gracz : 0';
    scoreComputerH3.innerHTML = 'Komputer : 0';
    computerCsPlayerH4.innerHTML = '';
    scorePlayer = 0;
    scoreComputer = 0;
    whichRound = 1;
});
