//var
let playerMove;
let randomNumber;
let computerMove;
let scorePlayer = 0;
let scoreComputer = 0;
let whichRound = 1;
const roundH1 = document.getElementById('welcom-in-game');
const scorePlayerH3 = document.getElementById('player-score');
const scoreComputerH3 = document.getElementById('computer-score');
const playerH4 = document.getElementById('player-move');
const computerH4 = document.getElementById('computer-move');

//start
document.getElementById('click-start').addEventListener('click', function () {
    document.getElementById('player-move').hidden = false;
    document.getElementById('computer-move').hidden = false;
    document.getElementById('click-start').hidden = true;
    document.getElementById('click-stone').hidden = false;
    document.getElementById('click-Paper').hidden = false;
    document.getElementById('click-scissors').hidden = false;
    document.getElementById('player-score').hidden = false;
    document.getElementById('computer-score').hidden = false;
    roundH1.innerHTML = 'Runda : ' + whichRound;
    scorePlayerH3.innerHTML = 'Gracz : ' + scorePlayer;
    scoreComputerH3.innerHTML = 'Komputer : ' + scoreComputer;
});
//ruchy
document.getElementById('click-stone').addEventListener('click', function () {
    playerMove = 'kamień';
    movePKN();

});
document.getElementById('click-Paper').addEventListener('click', function () {
    playerMove = 'papier';
    movePKN();
});

document.getElementById('click-scissors').addEventListener('click', function () {
    playerMove = 'nożyce';
    movePKN();
});

//nowa gra
document.getElementById('click-new-game').addEventListener('click', function () {
    document.getElementById('player-move').hidden = true;
    document.getElementById('computer-move').hidden = true;
    document.getElementById('click-start').hidden = false;
    document.getElementById('click-stone').hidden = true;
    document.getElementById('click-Paper').hidden = true;
    document.getElementById('click-scissors').hidden = true;
    document.getElementById('player-score').hidden = true;
    document.getElementById('computer-score').hidden = true;
    document.getElementById('click-new-game').hidden = true;
    roundH1.innerHTML = 'Cześć witaj ponownie';
    scorePlayerH3.innerHTML = 'Gracz : 0';
    scoreComputerH3.innerHTML = 'Komputer : 0';
    scorePlayer = 0;
    scoreComputer = 0;
    whichRound = 1;
})
