const playerOneAddLife = document.getElementById('player1-AddLife');
const playerTwoAddLife = document.getElementById('player2-AddLife');
const playerOneRemoveLife = document.getElementById('player1-RemoveLife');
const playerTwoRemoveLife = document.getElementById('player2-RemoveLife');
const playerOneScore = document.getElementById('life1');
const playerTwoScore = document.getElementById('life2');
const resetButton = document.getElementById('reset');
const playerOneList = document.querySelector('.player1List');
const playerTwoList = document.querySelector('.player2List');
const playerOneHistory = document.getElementById('historyOne');
const playerTwoHistory = document.getElementById('historyTwo');

playerOneAddLife.addEventListener('click', function() {
  playerOneScore.innerText = parseInt(playerOneScore.innerText) + 1;
  setTimeout(() => {
  }
  , 2000);
})

const history = [];
history.push(playerOneScore.innerText);
playerOneList.innerHTML = `<li>${history}</li>`;
playerOneHistory.addEventListener('click', function(e) {
  playerOneList.classList.toggle('visible')
})


playerOneRemoveLife.addEventListener('click', function() {
  const history = [];
  playerOneScore.innerText = parseInt(playerOneScore.innerText) - 1;
  history.push(playerOneScore.innerText);
  playerOneList.innerHTML = `<li>${history}</li>`;
  // setTimeout(() => {
  //   history;
  // }
  // , 2000);
})

resetButton.addEventListener('click', function() {
// delete the list of the historic of the scores and reset the page
  playerOneScore.innerText = 20;
  playerTwoScore.innerText = 20;
  playerOneList.innerHTML = '';
  playerTwoList.innerHTML = '';
})
