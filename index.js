//console.log("hi there");

const gameChar = ["rock","paper","scissors"];
const winner = [];


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
        winner.push("draw")
        console.log( "Its a draw")

    }else if(ans[0]==="rock"&& ans[1]==="paper" ||ans[0]==="paper" && ans[1]==="scissors" || ans[0] === "scissors"&& ans[1]==="rock"){
        winner.push("computer")
        console.log( "***You won!!!***")
        
    }else {
        winner.push("player")
        console.log( "You lost")
    }
}

function gameAll () {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    console.log(winner)

}
gameAll()

//code from  stackoverflow to check which checks which element occurs more in an array
function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}

console.log(`the winner is ${mode(winner)}`);

