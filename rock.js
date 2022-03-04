function computerPlay(){
    let num = Math.floor(Math.random() * 3);
    if (num == 1){
        return "rock";
    }else if(num==2){
        return "paper"
    }else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie"
    }else if((computerSelection == 'rock' && playerSelection == 'scissors')||
            (computerSelection == 'scissors' && playerSelection == 'paper')||
            (computerSelection == 'paper' && playerSelection == 'rock')){
        return 'computer win'
    }else {
        return 'player win'
    }
}

let result = 0
for (let i = 0; i < 5; i++){
    const playerSelection = prompt("type your choice");
    const computerSelection = computerPlay();
    console.log(computerSelection);
    let r = playRound(playerSelection, computerSelection);
    console.log(r)

    if (r=='computer win'){
        result += 1;
    }
}
if (result > 3){
    console.log('computer winner');
}else {
    console.log('player winner')
}




