const choiceButtons = document.querySelectorAll('.choice-button');

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        // playGame(button.id);
        console.log(button.id);
    })
})

const playGame = () => {

    // This function generates rock, paper, or scissors randomly for the computer and returns the computer's choice.

    let victoryStatement = '';
    let humanChoiceHolder = '';
    let computerChoiceHolder = '';

    const getComputerChoice = () => {
        const options = ['rock', 'paper', 'scissors'];
        const compNum = Math.floor(Math.random() * (options.length));
        computerChoiceHolder = options[compNum];
        return options[compNum];
    }

    victoryStatement = '';
    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanChoice, computerChoice) => {
        /*  If computer wins, increment 'scoreTracker' down.
            If human wins, increment 'scoreTracker' up. 
            If it's a positive number, human wins round. 
            If it's negative, computer wins round. 
            If 0, it's a draw. */

        let scoreTracker = 0;

        // condition if user inputs 'rock'
        if (humanChoice === 'rock') {
            if (computerChoice === 'paper') {
                scoreTracker--;
            }
            else if (computerChoice === 'scissors') {
                scoreTracker++;
            }
            // condition if user inputs 'paper'
        } else if (humanChoice === 'paper') {
            if (computerChoice === 'scissors') {
                scoreTracker--;
            } else if (computerChoice === 'rock') {
                scoreTracker++;
            }
            // condition if user inputs 'scissors'
        } else if (humanChoice === 'scissors') {
            if (computerChoice === 'rock') {
                scoreTracker--;
            } else if (computerChoice === 'paper') {
                scoreTracker++;
            }
        }

        // Determine winner via scoreTracker
        if (scoreTracker === 0) {
            itsADraw();
        } else if (scoreTracker > 0) {
            humanWins();
        } else {
            computerWins();
        }

        function sayGameChoices() {
            victoryStatement = `You picked... ${humanChoiceHolder}!\nComputer picked... ${computerChoice}!\n\n`;
        }

        // Helper functions for clarity
        function itsADraw() {
            sayGameChoices();
            victoryStatement += "DRAW! Let's go again!";
            sayCurrentGameScore();
        }

        function humanWins() {
            sayGameChoices();
            victoryStatement += `You win! ${capitalize(humanChoice)} beats ${computerChoice}!`;
            humanScore++;
            sayCurrentGameScore();
        }

        function computerWins() {
            sayGameChoices();
            victoryStatement += `You lose! ${capitalize(computerChoice)} beats ${humanChoice}!`;
            computerScore++;
            sayCurrentGameScore();
        }

        function sayCurrentGameScore() {
            victoryStatement += `\n\nHuman Score: ${humanScore}\nComputer Score: ${computerScore}\n----------------------------------\n`;
        }

        function capitalize(s) {
            return String(s[0]).toUpperCase() + String(s).slice(1);
        }
    }


    while (humanScore < 5 && computerScore < 5) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    // alert(`You picked... ${humanChoiceHolder}!\nComputer picked... ${computerChoiceHolder}!\n\n${(humanScore > computerScore) ? 'Victory' : 'Better luck next time'}! ${(humanScore > computerScore) ? 'Human' : 'Computer'} wins the game!
    // \nYour Score: ${humanScore}\nComputer Score: ${computerScore}\n\nPress the button below to play again!`);

}