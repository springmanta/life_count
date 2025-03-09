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
  const history = [];
  playerOneScore.innerText = parseInt(playerOneScore.innerText) + 1;
  history.push(playerOneScore.innerText);
  playerOneList.innerHTML += `<li>${history}</li>`;
  setTimeout(() => {
    console.log(history);
  }
  , 2000);
})
playerOneRemoveLife.addEventListener('click', function() {
  const history = [];
  playerOneScore.innerText = parseInt(playerOneScore.innerText) - 1;
  history.push(playerOneScore.innerText);
  playerOneList.innerHTML += `<li>${history}</li>`;
  setTimeout(() => {
    console.log(history);
  }
  , 2000);
})

playerOneHistory.addEventListener('click', function(e) {
  e.preventDefault();
  playerOneList.classList.toggle('visible')
})

playerTwoAddLife.addEventListener('click', function() {
  const history = [];
  playerTwoScore.innerText = parseInt(playerTwoScore.innerText) + 1;
  history.push(playerTwoScore.innerText);
  playerTwoList.innerHTML += `<li>${history}</li>`;
  setTimeout(() => {
    console.log(history);
  }
  , 2000);
})
playerTwoRemoveLife.addEventListener('click', function() {
  const history = [];
  playerTwoScore.innerText = parseInt(playerTwoScore.innerText) - 1;
  history.push(playerTwoScore.innerText);
  playerTwoList.innerHTML += `<li>${history}</li>`;
  setTimeout(() => {
    console.log(history);
  }
  , 2000);
})

playerTwoHistory.addEventListener('click', function(e) {
  e.preventDefault();
  playerTwoList.classList.toggle('visible')
})



resetButton.addEventListener('click', function() {
// delete the list of the historic of the scores and reset the page
  playerOneScore.innerText = 20;
  playerTwoScore.innerText = 20;
  playerOneList.innerHTML = '';
  playerTwoList.innerHTML = '';
})
