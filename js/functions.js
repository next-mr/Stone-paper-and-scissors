function getMoveName(argMoveId) {

    if (argMoveId == 1) {
        document.getElementById('img-stone-pc').hidden = false;
        return 'kamień';
    } else if (argMoveId == 2) {
        document.getElementById('img-paper-pc').hidden = false;
        return 'papier';
    } else if (argMoveId == 3) {
        document.getElementById('img-scissors-pc').hidden = false;
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

        randomNumber = Math.floor(Math.random() * 3 + 1);
        computerMove = getMoveName(randomNumber);

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
        document.getElementById('img-user-vs-cpu').hidden = false;

        whichRound++;
        setTimeout(() => {
            roundH1.innerHTML = 'Runda : ' + whichRound;
            document.getElementById('click-stone').hidden = false;
            document.getElementById('click-Paper').hidden = false;
            document.getElementById('click-scissors').hidden = false;
            document.getElementById('img-stone-pc').hidden = true;
            document.getElementById('img-paper-pc').hidden = true;
            document.getElementById('img-scissors-pc').hidden = true;
            document.getElementById('img-user-vs-cpu').hidden = true;
            if (whichRound >= 4) {
                document.getElementById('computer-vs-player').hidden = false;
                document.getElementById('click-stone').hidden = true;
                document.getElementById('click-Paper').hidden = true;
                document.getElementById('click-scissors').hidden = true;
                document.getElementById('click-new-game').hidden = false;
                document.getElementById('img-all').hidden = false;
                roundH1.innerHTML = 'Koniec gry';
                if (scorePlayer < scoreComputer) {
                    computerCsPlayerH4.innerHTML = 'Wygrał ! Komputer !';
                } else if (scorePlayer > scoreComputer) {
                    computerCsPlayerH4.innerHTML = 'Wygrał ! Gracz !';
                } else {
                    computerCsPlayerH4.innerHTML = '! R E M I S !';
                }
            }
        }, 2000);
    }

}