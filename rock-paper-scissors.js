const getComputerChoice= () => {
    const options = ['Rock','Paper','Scissors'];
    const compNum = Math.floor(Math.random() * (options.length));
    console.log(options[compNum]);
}