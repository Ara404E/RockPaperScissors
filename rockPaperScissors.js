
    const rock=document.querySelector('#rock');
    const paper=document.querySelector('#paper');
    const scissors=document.querySelector('#scissors');
    const weaponDiv=document.querySelector('.weaponDiv');
    const outCome=document.querySelector('.outcome');
    const result=document.querySelector('.result');
    const computer=document.querySelector('.computerScore');
    const player=document.querySelector(".PlayerScore");
    
let playerScore=0;
let computerScore=0;



function getComputerChoice(){
        let choices=['Rock','Paper','Scissors']
        let picked=choices[Math.floor(Math.random() * choices.length)];
        return picked.toLowerCase()
}


    rock.addEventListener('click', ()=>{
        const computerSelection=getComputerChoice();
        const playerSelection='rock';
        playRound(playerSelection,computerSelection);
    });
    paper.addEventListener('click', ()=>{
        const computerSelection=getComputerChoice();
        const playerSelection='paper';
        playRound(playerSelection,computerSelection);
    });
    scissors.addEventListener('click', ()=>{
        const computerSelection=getComputerChoice();
        const playerSelection='scissors';
        playRound(playerSelection,computerSelection);
    });


    
function playRound(playerSelection,computerSelection){
    console.log(computerSelection)
    playerSelection.toLowerCase();
    const winConditions={
        rock:{scissors:true},
        paper:{rock:true},
        scissors:{paper:true}
    }
    if(playerSelection==computerSelection){
               result.textContent='Tied'
            return outCome.append(result);
        }
        else if(winConditions[playerSelection][computerSelection]){
            playerScore++;
            result.textContent=`You win! ${playerSelection} beats ${computerSelection}`;
            return  outCome.append(result);
        }
        else {
               computerScore++;
               result.textContent=`You lose! ${computerSelection} beats ${playerSelection}`;
               return outCome.append(result);
        }
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

