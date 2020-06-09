//var
let playerMove;
let scorePlayer = 0;
let scoreComputer = 0;
let whichRound = 1;
const roundH1 = document.querySelector('welcom-in-game');
const scorePlayerH3 = document.querySelector('player-score');
const scoreComputerH3 = document.querySelector('computer-score');
const computerCsPlayerH4 = document.querySelector('computer-vs-player');

//start
document.querySelector('click-start').addEventListener('click', function () {
    document.querySelector('computer-vs-player').hidden = true;
    document.querySelector('click-start').hidden = true;
    document.querySelector('click-stone').hidden = false;
    document.querySelector('click-Paper').hidden = false;
    document.querySelector('click-scissors').hidden = false;
    document.querySelector('player-score').hidden = false;
    document.querySelector('computer-score').hidden = false;
    document.querySelector('img-all').hidden = true;
    roundH1.innerHTML = 'Runda : ' + whichRound;
    scorePlayerH3.innerHTML = 'Gracz : ' + scorePlayer;
    scoreComputerH3.innerHTML = 'Komputer : ' + scoreComputer;
});
//ruchy
document.querySelector('click-stone').addEventListener('click', function () {
    playerMove = 'kamień';
    document.querySelector('click-Paper').hidden = true;
    document.querySelector('click-scissors').hidden = true;
    movePKN();

});
document.querySelector('click-Paper').addEventListener('click', function () {
    playerMove = 'papier';
    document.querySelector('click-stone').hidden = true;
    document.querySelector('click-scissors').hidden = true;
    movePKN();
});

document.querySelector('click-scissors').addEventListener('click', function () {
    playerMove = 'nożyce';
    document.querySelector('click-Paper').hidden = true;
    document.querySelector('click-stone').hidden = true;
    movePKN();
});

//nowa gra
document.querySelector('click-new-game').addEventListener('click', function () {
    document.querySelector('computer-vs-player').hidden = true;
    document.querySelector('click-start').hidden = false;
    document.querySelector('click-stone').hidden = true;
    document.querySelector('click-Paper').hidden = true;
    document.querySelector('click-scissors').hidden = true;
    document.querySelector('player-score').hidden = true;
    document.querySelector('computer-score').hidden = true;
    document.querySelector('click-new-game').hidden = true;
    roundH1.innerHTML = 'Cześć witaj ponownie';
    scorePlayerH3.innerHTML = 'Gracz : 0';
    scoreComputerH3.innerHTML = 'Komputer : 0';
    computerCsPlayerH4.innerHTML = '-';
    scorePlayer = 0;
    scoreComputer = 0;
    whichRound = 1;
})
