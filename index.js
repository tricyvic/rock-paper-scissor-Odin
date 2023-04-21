//console.log("hi there");
const btn = document.querySelectorAll('.choose');
const gameChar = ["rock","paper","scissors"];
let playerWins = 0;
let computerWins = 0;
const winMessage = "";


//computer chooses between the gameChoises
function getComputerChoise(){
    const random = Math.floor(Math.random()*3);
    //console.log(gameChar[random])
    return gameChar[random];
}



btn.forEach((button) =>{button.addEventListener('click',()=>{
        let ans = []
    ans.push(getComputerChoise(),button.value);
    if(ans[0] == ans[1]){
        winMessage = "It's a draw!"
        computerWins += 1;
    }

    //display results
    console.log(`Cruise ; ${playerWins}: computer ; ${computerWins}`);

    //display winner

    if(playerWins===5){
        console.log("player Wins");
        playerWins=0;
        computerWins=0;
    }else if(computerWins === 5){
        console.log("computerWins");
        playerWins=0;
        computerWins=0;
    }
    
})})





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

