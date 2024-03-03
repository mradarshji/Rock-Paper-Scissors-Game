 let userScore = 0;
 let compScore = 0;

 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");

 const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#comp-score");


 choices.forEach ((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
 });




 const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
 };



 const playGame = (userChoice) => {

    //Generate Computer Choice
    const compChoice = genCompChoice();

    //Logic for draw and winner..
    if (userChoice === compChoice) {
        drawGame();
    } 
    else if ((userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

 };



 const drawGame = () => {
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";
 };
