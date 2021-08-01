var score = [1,2,3,4,5,6];
var turn;

//Player 1 Details
var player1 = {
    name: "Mario",
    score: 0,
    roll: [],
}
//Player 2 Details
var player2 = {
    name: "Luigi",
    score: 0,
    roll: [],
}

window.onload = () => {
    //SelectTurn
    selectTurn();
    //update button text
    updateButtonText();
    //update the score
    updateScore();
    //update player name
    playerName();

}
let selectTurn = () => {
    turn = Math.round(Math.random())+1;
}
let updateButtonText = () => {
    var button = document.getElementById('button');
    var result = document.getElementById('result');
    result.style.visibility = "";

    //To check if the game is over or not
    if(player1.roll.length == 1 && player2.roll.length == 1) {
        button.remove();
        //to check who wins?
        result.textContent = player1.score === player2.score ? `Match Draw`: `${player1.score>player2.score ? player1.name: player2.name} Wins`;
    }
    else {
        turn = player1.roll.length === 1 ? 2: player2.roll.length === 1 ? 1: turn;
        button.textContent = `${turn === 1 ? player1.name: player2.name} Roll`;
    }
}
let updateScore = () => {
    document.getElementById('player-1-score').textContent = player1.score;
    document.getElementById('player-2-score').textContent = player2.score;
    updateRoll();
}
let playerName = () => {
    document.getElementById("player-1-name").textContent = player1.name;
    document.getElementById("player-2-name").textContent = player2.name;
}

var ButtonClick = () => {
    var roll = score[Math.floor(Math.random()*score.length)];
    if(turn === 1) {
    player1.roll.push(roll);
    player1.score = calculateScore(player1.roll);
    }
    else {
        player2.roll.push(roll);
        player2.score = calculateScore(player2.roll);
    }
   // changeTurn();
    updateButtonText();
    updateScore();

}
var calculateScore = (roll) => {
    return roll.reduce((total, num) => total+num, 0);
}
var updateRoll = () => {
    var playerOne = document.getElementById('player-1-round-roll');
    var playerTwo = document.getElementById('player-2-round-roll');
    player1.roll.forEach((roll,index) => {
        playerOne[index].textContent = rolls;
    })
    player2.roll.forEach((roll,index) => {
        playerTwo[index].textContent = rolls;
    })
} 
