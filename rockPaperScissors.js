
    const rock=document.querySelector('#rockImg');
    const paper=document.querySelector('#paperImg');
    const scissors=document.querySelector('#scissorsImg');
    const weaponDiv=document.querySelector('.weaponDiv');
    const outComeDiv=document.querySelector('.outCome');
    const h3=document.createElement('h3');
    h3.className="result";
    const p=document.createElement('p');
    const p2=document.querySelector('.compScore');
    const p3=document.querySelector('.playerScore');
let playerScore=0;
let computerScore=0;
let winner=5;

function getComputerChoice(){
        let choices=['Rock','Paper','Scissors']
        let picked=choices[Math.floor(Math.random() * choices.length)];
        return picked.toLowerCase()
}
function checkWinner(playerScore,compScore){
    
    if(playerScore===winner){
        p.textContent='Great Job you won agains a computer hoorayyy';
        return outComeDiv.append(p);
        }
     if(compScore===winner){
          p.textContent='Bruhh aint no way you lost to a computer💀';
        return outComeDiv.append(p);
    }
}

function checkScore(playerScore,compScore){
        p3.textContent="user:"+ playerScore;
        p2.textContent="computer:"+compScore;
     outComeDiv.append(p3);
      outComeDiv.append(p2);
}
let clickable=true;
    rock.addEventListener('click', ()=>{
        if(!clickable)return;
       const computerSelection=getComputerChoice();
        const playerSelection='rock';
       playRound(playerSelection,computerSelection);
        checkScore(playerScore,computerScore);
        checkWinner(playerScore,computerScore);
       if (playerScore >= winner || computerScore >= winner) {
        clickable=false;
    }
       });

    paper.addEventListener('click', ()=>{
        if(!clickable)return;

        const computerSelection=getComputerChoice();
        const playerSelection='paper';
        playRound(playerSelection,computerSelection);
        checkScore(playerScore,computerScore);
         checkWinner(playerScore,computerScore);
        if (playerScore >= winner || computerScore >= winner) {
            clickable=false;
    }

    });
    scissors.addEventListener('click', ()=>{
        if(!clickable) return;
        const computerSelection=getComputerChoice();
        const playerSelection='scissors';
        playRound(playerSelection,computerSelection);
        checkScore(playerScore,computerScore);
        checkWinner(playerScore,computerScore);
        if (playerScore >= winner || computerScore >= winner) {
        clickable=false;
    }
    });


    
function playRound(playerSelection,computerSelection){
    playerSelection.toLowerCase();
    const winConditions={
        rock:{scissors:true},
        paper:{rock:true},
        scissors:{paper:true}
    }
    if(playerSelection==computerSelection){
               h3.textContent='Tied'
            return outComeDiv.append(h3);
        }
        else if(winConditions[playerSelection][computerSelection]){
            playerScore++;
            h3.textContent=`You win! ${playerSelection} beats ${computerSelection}`;
            return  outComeDiv.appendChild(h3);
        }
        else {
            computerScore++; 
               h3.textContent=`You lose! ${computerSelection} beats ${playerSelection}`;
               return  outComeDiv.append(h3);
        }
    }
        
function restartBrowser() {
 location.reload();
}
