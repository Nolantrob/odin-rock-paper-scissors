const getComputerChoice = () => {
    const compNum = (Math.floor(Math.random() * 3) + 1);
    let choice;

    if (compNum == 1){
        choice = 'Rock';
    }
    else if (compNum == 2){
        choice = 'Paper';
    }
    else if (compNum == 3){
        choice = 'Scissors';
    }

    console.log(choice);
}