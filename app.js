//I rewrote this because my previous code just kept confusing me more and more.

const boardCells = document.querySelectorAll('.board-cell');
const turn = document.querySelector('.turn');
const result = document.querySelector('.result');

const player1 = 'X'
const player2 = 'O'

let gameActive = true

let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '',]
];

startGame();

function startGame(){
  boardCells.forEach((cell, index) => {
    cell.innerHTML = '';
    cell.addEventListener('click', handleClick.bind(null, cell, index));
  });
};

function handleClick(cell, index){
  if (gameActive === true){
  const cellValue = cell.innerHTML;
  if (cellValue === ''){
  if (turn.innerHTML === 'Player 1'){
    cell.innerHTML = player1;
    turn.innerHTML = 'Player 2'
    board[Math.floor(index / 3)][index % 3] = player1;
  } else {
    cell.innerHTML = player2;
    turn.innerHTML = 'Player 1';
    board[Math.floor(index / 3)][index % 3] = player2;
  }
}
}

cell.removeEventListener('click', handleClick);
checkWinner();
}

function checkWinner() {
    for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !== '') {
      showResult(board[i][0]);
      gameActive = false
      console.log ("You Win!")
      return;
    }
  }
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[0][i] !== '') {
      showResult(board[0][i]);
      gameActive = false
      console.log ("You Win!")
      return;
    }
  }
  if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== '') {
    showResult(board[0][0]);
    gameActive = false
    console.log ("You Win!")
    return;
  }
  if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] !== '') {
    showResult(board[0][2]);
    gameActive = false
    console.log ("You Win!")
    return;
  }
  let count = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] != '') {
        count++;
      }
    }
  }
  if (count == 9) {
    showResult('Tie');
    return;
  }
}

function showResult(symbol){
  if (symbol === player1){
    result.innerHTML = 'Player 1 Wins!';
  } else if (symbol === player2){
    result.innerHTML = 'Player 2 Wins!';
  } else{
    result.innerHTML == 'Tie!';
  }
  result.getElementsByClassName.display = 'flex';
}

function restartGame (){
  gameActive = true
  result.style.display = 'none';
  turn.innerHTML = 'Player 1';

  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  startGame();
}