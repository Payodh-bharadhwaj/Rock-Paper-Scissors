let userscore=0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIx = Math.floor(Math.random()*3);
    return options[randIx];
};  

const drawGame = () =>{
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor  = "#081b31";
};

const showWinner = (userWin,UserChoice,compChoice) =>{
    if(userWin){
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText = `You Win! ${UserChoice} beats ${compChoice}`;
        msg.style.backgroundColor  = "green";
    }else{
        compscore++;
        compscorePara.innerText = compscore;
        msg.innerText = `You lost! ${compChoice} beats ${UserChoice}`;
        msg.style.backgroundColor  = "red";
    }
};
const playGame= (UserChoice)=>{
    const compChoice = genCompChoice();
    if(UserChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(UserChoice === "rock"){           
            userWin = compChoice === "paper" ?false : true;
        }else if(UserChoice === "paper"){
            userWin = compChoice === "scissors" ?false : true;
        }else{
            userWin = compChoice === "rock" ?false : true;
        }
        showWinner(userWin,UserChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const UserChoice = choice.getAttribute("id");
        playGame(UserChoice);
    });
});
