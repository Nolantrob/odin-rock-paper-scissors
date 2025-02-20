const choiceButtons = document.querySelectorAll('.choice-button');

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        playGame(button.id);
    })
})

const playGame = (humanChoice) => {

    // This function generates rock, paper, or scissors randomly for the computer and returns the computer's choice.
    const getComputerChoice = () => {
        const options = ['rock', 'paper', 'scissors'];
        const compNum = Math.floor(Math.random() * (options.length));
        computerChoiceHolder = options[compNum];
        return options[compNum];
    }

    const computerChoice = getComputerChoice();

    let victoryStatement = '';
    let humanScore = 0;
    let computerScore = 0;


    function determineWinner() {
        switch (humanChoice) {
            case humanChoice === computerChoice:
                itsADraw();
            case rock:
                computerChoice === 'paper' ? computerWins() : humanWins();
                break;
            case paper:
                computerChoice === 'scissors' ? computerWins() : humanWins();
                break;
            case scissors:
                computerChoice === 'rock' ? computerWins() : humanWins();
                break;
            default:
                break;
        }
    }


    function sayGameChoices() {
        // victoryStatement = `You picked... ${humanChoice}!\nComputer picked... ${computerChoice}!`;
        console.log(`You picked... ${humanChoice}!\nComputer picked... ${computerChoice}!`);
    }

    // Helper functions for clarity
    function itsADraw() {
        console.log(`It's a draw!`)
    }

    function humanWins() {
        console.log(`You win! ${capitalize(humanChoice)} beats ${computerChoice}!`);
    }

    function computerWins() {
        console.log(`You lose! ${capitalize(computerChoice)} beats ${humanChoice}!`);
    }

    function capitalize(s) {
        return String(s[0]).toUpperCase() + String(s).slice(1);
    }

}
