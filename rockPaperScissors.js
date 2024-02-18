
function getComputerChoice(){
        let choices=['Rock','Paper','Scissors']
        let picked=choices[Math.floor(Math.random() * choices.length)];
        return picked.toLowerCase()
}
let player=0;
let computer=0;

// function playRound(playerSelection,ComputerSelection){
//     playerSelection=playerSelection.toLowerCase()//Rock compiler aika ba rock rock===rock
//      ComputerSelection=ComputerSelection.toLowerCase()
//         if(playerSelection=='rock' && ComputerSelection=='paper'){
//                computer++;
//             return `You lose! ${ComputerSelection} beats ${playerSelection}`
            
//         }
//         else if(playerSelection=='paper' && ComputerSelection=='rock'){
//             player++;
//             return  `You win! ${playerSelection} beats ${ComputerSelection}`
//         }
//         else if(playerSelection=='scissors' && ComputerSelection=='rock'){
//                computer++;
//                return `You lose! ${ComputerSelection} beats ${playerSelection}`  
//         }
//           else if(playerSelection=='rock' && ComputerSelection=='scissors'){
//              player++;
//             return  `You win! ${playerSelection} beats ${ComputerSelection}`
//         }
//         else if(playerSelection=='scissors' && ComputerSelection=='paper'){
//              player++;
//              return  `You win! ${playerSelection} beats ${ComputerSelection}`
//         }
//        else if( playerSelection=='paper' && ComputerSelection=='scissors'){
//            computer++;
//          return  `You lose! ${playerSelection} beats ${ComputerSelection}`
//        }
//         else if(playerSelection===ComputerSelection){
//             return 'Tied'
//         }
//         else{
//           return "seems like you didn't write what I told you"    
//         } 
// }
function playRound(playerSelection,computerSelection){
    const winConditions={
        rock :{scissors: true },
        paper :{rock: true},
        scissors:{paper:true}
    }
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();
    if(playerSelection==computerSelection){
        return 'Tied'
    }
    else if(winConditions[playerSelection][computerSelection]){
        player++;
        return  `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        computer++;
        return `You lose! ${playerSelection} beats ${computerSelection}`;
    }
    
}
function playGame(playerSelection,computerSelection){
        return playRound(playerSelection,computerSelection) 
}
let x=1;
while(x<=5){
const playerSelection = prompt('Choose Your weapon(Rock,Paper,Scissors',`Rock,paper,scissors`);
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection));
x++
}
if(player>computer){
    console.log('The User has won the game')
}
else if(computer>player){
    console.log('The computer has won the game')
}
else{
    console.log('Its A Drawww')
}
Its