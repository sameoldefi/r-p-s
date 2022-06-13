// let userChoice;
let win = 0
let lose = 0
let tie = 0
let wrongAnswer = 0


function computerPlay(){
    const choice = ['rock', 'paper', 'scissors'];
    let computerRandom = Math.floor(Math.random()* 3) ;
    let computerSelection = choice[computerRandom];
    // console.log(computerSelection);
    return computerSelection;
}

function result (userChoice) {
let computerChoice = computerPlay();

// ---------------------- Player choice - Rock ----------------------

if ( userChoice.toLowerCase() === 'rock' && computerChoice == 'rock' ){
    tie++
return tieResult ="Player: " + userChoice + '\n' +  "Computer: "+ computerChoice + '\n' + "It's A Tie ! ! ! ";
}
else if (userChoice.toLowerCase() === 'rock' && computerChoice == 'paper'){
    lose++;
    return loseResult = "Player: " + userChoice + '\n' + "Computer: "+ computerChoice + '\n' + "You Lost";
}
else if (userChoice.toLowerCase() === 'rock' && computerChoice == 'scissors'){
    win++
    return  winResult = "Player: " + userChoice + '\n' + "Computer: "+ computerChoice + '\n' + "You Won!!!";
}

// ----------------------  Player choice - Paper ----------------------

else if ( userChoice.toLowerCase() === 'paper' && computerChoice == 'rock' ){
    win++
    return  winResult = "Player: " + userChoice + '\n' + "Computer: "+ computerChoice + '\n' +"You Won!!! Paper eats Rock";
}
else if(userChoice.toLowerCase() === 'paper' && computerChoice == 'paper'){
    tie++
    return tieResult = "Player: " + userChoice + '\n' + "Computer: "+ computerChoice + '\n' +"It's A Tie ! ! ! Paper and Paper are friends";
}
else if(userChoice.toLowerCase() === 'paper' && computerChoice == 'scissors'){
    lose++
    return loseResult =  "Player: " + userChoice + '\n' + "Computer: "+ computerChoice + '\n' +"You Lost Paper loses to scissors";
}

// ---------------------- Player choice - scissors ----------------------

else if (userChoice.toLowerCase() === 'scissors' && computerChoice == 'rock'){
    lose++
    return loseResult = "Player: " + userChoice + '\n' + "Computer: "+ computerChoice + '\n' +"You Lost";
}
else if (userChoice.toLowerCase() === 'scissors' && computerChoice == 'paper'){
    win++
    return  winResult = "Player: " + userChoice + '\n' + "Computer: "+ computerChoice + '\n' +"You Won!!!";
}
else if (userChoice.toLowerCase() === 'scissors' && computerChoice == 'scissors'){
    tie++
    return tieResult = "Player: " + userChoice + '\n' + "Computer: "+ computerChoice + '\n' +"It's A Tie ! ! ! ";
}
else {
    wrongAnswer++
    return notRight = "You need to write rock, paper or scissors";
}

}

// ---------------------- Start Game ----------------------

const rockBtn = document.querySelector('#button1');
const paperBtn = document.querySelector('#button2');
const scissorsBtn = document.querySelector('#button3');

rockBtn.addEventListener('click', () => console.log(result('Rock')));
paperBtn.addEventListener('click', () => console.log(result('Paper')));
scissorsBtn.addEventListener('click', () => console.log(result('Scissors')));

 
