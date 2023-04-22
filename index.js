//console.log("hi there");
const player = prompt("Please input your name")
const btn = document.querySelectorAll('.choose');
const gameChar = ["rock","paper","scissors"];
let playerWins = 0;
let computerWins = 0;
const winMessage = "";
const display = document.querySelector(".display-winner");

document.querySelector(".computerChoice").innerHTML = `${player}'s Choice : _ `
document.querySelector(".greetings").innerHTML = `Welcome ${player}`

//reset game
const reset = (name) =>{
    playerWins=0;
    computerWins=0;
    alert(`${name} wins...Play again?`)
}

//computer chooses between the gameChoises
function getComputerChoise(){
    const random = Math.floor(Math.random()*3);
    //console.log(gameChar[random])
    return gameChar[random];
}



btn.forEach((button) =>{button.addEventListener('click',()=>{
        let ans = []
        let compAns = getComputerChoise()
    ans.push(compAns,button.value);

    if(ans[0] == ans[1]){
        display.innerHTML = "Its a draw";
    }else if(ans[0]==="rock"&& ans[1]==="paper" ||ans[0]==="paper" && ans[1]==="scissors" || ans[0] === "scissors"&& ans[1]==="rock"){
        
        playerWins += 1;
        display.innerHTML = `${player} won this round` ;


    }else{
        
        computerWins += 1;
        display.innerHTML = "you lost this round";
    }
  
    

    //display results
    console.log(`Cruise ; ${playerWins}: computer ; ${computerWins}`);
    document.querySelector(".computerChoice").innerHTML = `${player}'s Choice : ${compAns}`
    document.querySelector(".playersChoice").innerHTML = `Player's Choice : ${button.value}`

    document.querySelector(".compScore").innerHTML = `Computer<br> <p>${computerWins}</p> `
    document.querySelector(".playerScore").innerHTML = `Player<br> <p>${playerWins}</p>`

    //display winner

    if(playerWins===5){
       display.innerHTML="player Wins";
        reset(`${player}`)
    }else if(computerWins === 5){
       display.innerHTML="computer Wins";
        reset("computer")
    }if (playerWins==0) {
        return;
    }
    
})})


// if(ans[0] == ans[1]){
//     computerWins += 1;
//     console.log("it a draw");
//     // document.querySelector(".display-winner").innerHTML = "hi"
// }else if(ans[0]==="rock"&& ans[1]==="paper" ||ans[0]==="paper" && ans[1]==="scissors" || ans[0] === "scissors"&& ans[1]==="rock"){
//     winMessage = "***You won!!!***";
// }else {
//     winMessage = "You lost!"
// }





// function gameAll () {
//     for (let i = 0; i < 5; i++) {
//         playRound();
//     }
//     console.log(winner)

// }
// gameAll()

// //code from  stackoverflow to check which checks which element occurs more in an array
// function mode(arr){
//     return arr.sort((a,b) =>
//           arr.filter(v => v===a).length
//         - arr.filter(v => v===b).length
//     ).pop();
// }

// console.log(`the winner is ${mode(winner)}`);

