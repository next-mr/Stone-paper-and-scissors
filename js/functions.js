function getMoveName(argMoveId) {

    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
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

function movePKN() {

    if (whichRound <= 3) {
        roundH1.innerHTML = 'Runda : ' + whichRound;

        playerH4.innerHTML = 'Ruch gracz : ' + playerMove;

        randomNumber = Math.floor(Math.random() * 3 + 1);
        computerMove = getMoveName(randomNumber);
        computerH4.innerHTML = 'Ruch komputer : ' + computerMove;

        if (displayResult(computerMove, playerMove) === 'Wygrałeś!') {
            scorePlayer++;
        } else if (displayResult(computerMove, playerMove) === 'Przegrałeś!') {
            scoreComputer++;
        } else {
            scorePlayer++;
            scoreComputer++;
        }
        scorePlayerH3.innerHTML = 'Gracz : ' + scorePlayer;
        scoreComputerH3.innerHTML = 'Komputer : ' + scoreComputer;

        whichRound++;
        setTimeout(() => {
            roundH1.innerHTML = 'Runda : ' + whichRound;
            playerH4.innerHTML = 'Ruch gracz : Wybierz';
            computerH4.innerHTML = 'Ruch komputer : losuję';
            if (whichRound >= 4) {
                document.getElementById('click-stone').hidden = true;
                document.getElementById('click-Paper').hidden = true;
                document.getElementById('click-scissors').hidden = true;
                document.getElementById('click-new-game').hidden = false;
                roundH1.innerHTML = 'Koniec gry';
                playerH4.innerHTML = 'Wynik gry :';
                if (scorePlayer < scoreComputer) {
                    computerH4.innerHTML = 'Wygrał ! Komputer !';
                } else if (scorePlayer > scoreComputer) {
                    computerH4.innerHTML = 'Wygrał ! Gracz !';
                } else {
                    computerH4.innerHTML = '! REMIS !';
                }
            }
        }, 2000);
    }

}