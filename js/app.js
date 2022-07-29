const playground = document.querySelector(`.chessboard`);

for (let i = 0; i < 64; i++) {
  const chessBox = document.createElement("div");
  chessBox.className = `chess-box`;
  chessBox.innerHTML = i + 1;
  playground.appendChild(chessBox);
}
