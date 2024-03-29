const CONTAINER = document.querySelector("#container");

function createGrid(sideSize) {
  const board = document.createElement("div");
  board.id = "board";

  for (let i = 0; i < sideSize; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    for (let j = 0; j < sideSize; j++) {
      const cellDiv = document.createElement("div");
      cellDiv.classList.add("cell");

      // Adds functionality to the cell
      cellDiv.addEventListener("mouseover", () => blackenCell(cellDiv));

      // Appends cell to the row
      rowDiv.appendChild(cellDiv);
    }
    board.appendChild(rowDiv);
  }
  CONTAINER.appendChild(board);
}

function resizeGrid(newSize) {
  if (newSize > 100 || !newSize.length) {
    return null;
  }
  console.log("hola");

  const oldBoard = document.querySelector("#board");
  CONTAINER.removeChild(oldBoard);

  createGrid(newSize);
}

function removeCellMode() {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    // cellClone = cell.cloneNode(true);
    // cell.parentNode.replaceChild(cellClone, cell);
    cell.replaceWith(cell.cloneNode(true));
  });
}

function blackenCell(cellNode) {
  cellNode.style.backgroundColor = "black";
  cellNode.style.border = "1px white solid";
}

function randomlyColorCell(cellNode) {
  cellNode.style.backgroundColor = getRandomRGB();
}

function getRandomRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

// Adds event listeners to buttons
const resizeButton = document.querySelector("#size-changer");

resizeButton.addEventListener("click", () => {
  let userSize = window.prompt("Choose a new size");
  resizeGrid(parseInt(userSize));
  resizeGrid(16);
});

const rainbowButton = document.querySelector("#rainbow");

// rainbowButton.addEventListener("click", () => {});

// Creates a default 16x16 grid
createGrid(16);
