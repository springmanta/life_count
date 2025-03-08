const playerOneAddLife = document.getElementById('player1-AddLife');
const playerTwoAddLife = document.getElementById('player2-AddLife');
const playerOneRemoveLife = document.getElementById('player1-RemoveLife');
const playerTwoRemoveLife = document.getElementById('player2-RemoveLife');
const playerOneScore = document.getElementById('life1');
const playerTwoScore = document.getElementById('life2');
const resetButton = document.getElementById('reset');
const playerOneList = document.querySelector('.player1List');
const playerTwoList = document.querySelector('.player2List');
// create a list with the historic of the scores

playerOneAddLife.addEventListener('click', function() {
  let history = [];
  playerOneScore.innerText = parseInt(playerOneScore.innerText) + 1;
  history.push(playerOneScore.innerText);
  playerOneList.innerHTML += `<li>${history}</li>`;
})

playerOneRemoveLife.addEventListener('click', function() {
  let history = [];
  playerOneScore.innerText = parseInt(playerOneScore.innerText) - 1;
  history.push(playerOneScore.innerText);
  playerOneList.innerHTML += `<li>${history}</li>`;
})

playerTwoAddLife.addEventListener('click', function() {
  let history = [];
  history.push(playerTwoScore.innerText);
  // create li with the current score and append it to the ul
  playerTwoList.innerHTML += `<li>${history}</li>`;
  playerTwoScore.innerText = parseInt(playerTwoScore.innerText) + 1;
})

playerTwoRemoveLife.addEventListener('click', function() {
  let history = [];
  playerTwoScore.innerText = parseInt(playerTwoScore.innerText) - 1;
  history.push(playerTwoScore.innerText);
  playerTwoList.innerHTML += `<li>${history}</li>`;
})

resetButton.addEventListener('click', function() {
// delete the list of the historic of the scores and reset the page
  playerOneScore.innerText = 20;
  playerTwoScore.innerText = 20;
  playerOneList.innerHTML = '';
  playerTwoList.innerHTML = '';
})
