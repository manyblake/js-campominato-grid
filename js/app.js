const playground = document.querySelector(`.chessboard`);
const difficultyCheck = document.getElementById(`game-difficulty`);
const gameStart = document.querySelector(`.button`);

gameStart.addEventListener(`click`, function () {
  const selectedDifficulty = parseInt(difficultyCheck.value);
  const numberOfChessBoxes = selectedDifficulty ** 2;

  for (let i = 0; i < numberOfChessBoxes; i++) {
    const chessBox = document.createElement(`div`);
    chessBox.className = `chess-box`;
    chessBox.innerHTML = i + 1;
    playground.appendChild(chessBox);
    chessBox.addEventListener(`click`, getChessBox);
  }

  playground.style.gridTemplateColumns = `repeat(${selectedDifficulty}, 1fr)`;
  playground.classList.remove(`hidden`);
  gameStart.classList.add(`hidden`);
  difficultyCheck.classList.add(`hidden`);
});

function getChessBox() {
  const chessBox = this;
  chessBox.classList.toggle(`clicked`);
  console.log(`Hai clickato la casella ${this.innerHTML}`);
}
