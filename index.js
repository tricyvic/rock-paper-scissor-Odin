//console.log("hi there");

const gameChar = ["rock","paper","scissors"]

function getComputerChoise(){
    const random = Math.floor(Math.random()*3);
    //console.log(gameChar[random])
    return gameChar[random];
}

function getPlayerChoise(){
    const getPlayerChoises = prompt("To play the game choose between : rock , paper or scissors");
    if(getComputerChoise != "rock" ||getComputerChoise != "paper" ||getComputerChoise != "scissors"){
        
    }
    return getPlayerChoises
}

function playRound() {
    let ans = []
    ans.push(getComputerChoise(),getPlayerChoise());
    if(ans[0] == ans[1]){
        console.log( "Its a draw")
    }else if(ans[0]==="rock"&& ans[1]==="paper" ||ans[0]==="paper" && ans[1]==="scissors" || ans[0] === "scissors"&& ans[1]==="rock"){
        console.log( "***You won!!!***")
    }else console.log( "You lost")
}

playRound()

