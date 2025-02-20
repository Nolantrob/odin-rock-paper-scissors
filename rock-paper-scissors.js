const choiceButtons = document.querySelectorAll('.choice-button');

let gameHasBegun = false;

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id);
    })
})

const score = {
    humanWins: 0,
    computerWins: 0,
    draws: 0
}
// Begin the game using the player's chosen hand
function playRound(humanChoice) {

    let computerChoice;

    const getComputerChoice = () => {
        const options = ['rock', 'paper', 'scissors'];
        return options[Math.floor(Math.random() * (options.length))];
    }   
    computerChoice = getComputerChoice();

    // Compare both player's hands and determine a winner
    function determineWinner() {
        console.log(`Human choice: ${humanChoice}\nComputer choice: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            itsADraw();
            return;
        }

        switch (humanChoice) {
            case 'rock':
                computerChoice === 'paper' ? computerWins(computerChoice) : humanWins(humanChoice);
                break;
            case 'paper':
                computerChoice === 'scissors' ? computerWins(computerChoice) : humanWins(humanChoice);
                break;
            case 'scissors':
                computerChoice === 'rock' ? computerWins(computerChoice) : humanWins(humanChoice);
                break;
            default:
                break;
        }

    }

    // Functions for displaying round results
    function itsADraw() {
        console.log(`It's a draw!`);
    }

    let winningHandVerb;

    const humanWins = (winningHand) => {
        score.humanWins++;
        getWinningHandVerb(winningHand);
        console.log(`You won! ${capitalize(humanChoice)} ${winningHandVerb} ${computerChoice}!`);
    }

    const computerWins = (winningHand) => {
        score.computerWins++;
        getWinningHandVerb(winningHand);
        console.log(`You lost! ${capitalize(computerChoice)} ${winningHandVerb} ${humanChoice}!`);
    }

    // Set the proper verb for whatever hand won in the round result sentence
    function getWinningHandVerb(winningHand) {

        switch (winningHand) {
            case 'rock':
                winningHandVerb = 'crushes'
                break;
            case 'paper':
                winningHandVerb = 'covers'
                break;
            case 'scissors':
                winningHandVerb = 'cuts'
                break;
            default:
                break;
        }

        return winningHandVerb;
    }

    function capitalize(s) {
        return String(s[0]).toUpperCase() + String(s).slice(1);
    }

    determineWinner();

    // Display the current score
    console.log(`Score: Human: ${score.humanWins} Computer: ${score.computerWins}`);

}
