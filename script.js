let win = 0
let lose = 0
let tie = 0
let wrongAnswer = 0

function computerPlay(){
    const choice = ['rock', 'paper', 'scissors'];
    let computerRandom = Math.floor(Math.random()* 3) ;
    let computerSelection = choice[computerRandom];
    return computerSelection;
}

function result (userChoice) {
let computerChoice = computerPlay();

// ---------------------- Player choice - Rock ----------------------

if ( userChoice.toLowerCase() === 'rock' && computerChoice == 'rock' ){
    tie++
    div.textContent= computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    gameResult.textContent = "you lose this time" + lose + ' ' + win;
    return gameResult.textContent + ' ' + gameResult.textContent;
}
else if (userChoice.toLowerCase() === 'rock' && computerChoice == 'paper'){
    lose++;
    div.textContent= computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    gameResult.textContent = "you lose this time" + lose + ' ' + win;
    return gameResult.textContent + ' ' + gameResult.textContent;
}
else if (userChoice.toLowerCase() === 'rock' && computerChoice == 'scissors'){
    win++
    div.textContent= computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    gameResult.textContent = "you lose this time" + lose + ' ' + win;
    return gameResult.textContent + ' ' + gameResult.textContent;
}

// ----------------------  Player choice - Paper ----------------------

else if ( userChoice.toLowerCase() === 'paper' && computerChoice == 'rock' ){
    win++
    div.textContent= computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    gameResult.textContent = "you lose this time" + lose + ' ' + win;
    return gameResult.textContent + ' ' + gameResult.textContent;    
}
else if(userChoice.toLowerCase() === 'paper' && computerChoice == 'paper'){
    tie++
    div.textContent= computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    gameResult.textContent = "you lose this time" + lose + ' ' + win;
    return gameResult.textContent + ' ' + gameResult.textContent;

}
else if(userChoice.toLowerCase() === 'paper' && computerChoice == 'scissors'){
    lose++
    div.textContent= computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    gameResult.textContent = "you lose this time" + lose + ' ' + win;
    return gameResult.textContent + ' ' + gameResult.textContent;
}

// ---------------------- Player choice - scissors ----------------------

else if (userChoice.toLowerCase() === 'scissors' && computerChoice == 'rock'){
    lose++
     div.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
     gameResult.textContent = "you lose this time" + lose + ' ' + win;
    return gameResult.textContent + ' ' + gameResult.textContent;

}
else if (userChoice.toLowerCase() === 'scissors' && computerChoice == 'paper'){
    win++
    div.textContent= computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    gameResult.textContent = "you lose this time" + lose + ' ' + win;
    return gameResult.textContent + ' ' + gameResult.textContent;
}
else if (userChoice.toLowerCase() === 'scissors' && computerChoice == 'scissors'){
    tie++
    div.textContent= computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    gameResult.textContent = "you lose this time" + lose + ' ' + win;
    return gameResult.textContent + ' ' + gameResult.textContent;
}

if (win >= 1) {
    console.log("hello");
}
}

// ---------------------- Start Game ----------------------


const div = document.querySelector('#computersResult');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const gameResult = document.querySelector('#gameResult');

rockBtn.addEventListener('click', () => result('Rock'));
paperBtn.addEventListener('click', () => result('Paper'));
scissorsBtn.addEventListener('click', () => result('Scissors'));

 
