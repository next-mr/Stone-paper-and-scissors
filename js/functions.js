function getMoveName(argMoveId) {

    if (argMoveId == 1) {
        document.querySelector('img-stone-pc').hidden = false;
        return 'kamień';
    } else if (argMoveId == 2) {
        document.querySelector('img-paper-pc').hidden = false;
        return 'papier';
    } else if (argMoveId == 3) {
        document.querySelector('img-scissors-pc').hidden = false;
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

       const randomNumber = Math.floor(Math.random() * 3 + 1);
       const computerMove = getMoveName(randomNumber);

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
        document.querySelector('img-user-vs-cpu').hidden = false;

        whichRound++;
        setTimeout(() => {
            roundH1.innerHTML = 'Runda : ' + whichRound;
            document.querySelector('click-stone').hidden = false;
            document.querySelector('click-Paper').hidden = false;
            document.querySelector('click-scissors').hidden = false;
            document.querySelector('img-stone-pc').hidden = true;
            document.querySelector('img-paper-pc').hidden = true;
            document.querySelector('img-scissors-pc').hidden = true;
            document.querySelector('img-user-vs-cpu').hidden = true;
            if (whichRound >= 4) {
                document.querySelector('computer-vs-player').hidden = false;
                document.querySelector('click-stone').hidden = true;
                document.querySelector('click-Paper').hidden = true;
                document.querySelector('click-scissors').hidden = true;
                document.querySelector('click-new-game').hidden = false;
                document.querySelector('img-all').hidden = false;
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