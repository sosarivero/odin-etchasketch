const container = document.querySelector("#container");

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
  container.appendChild(board);
}

function resizeGrid(newSize) {
  newSize = parseInt(newSize);
  if (newSize > 100 || isNaN(newSize)) {
    return null;
  }
  console.log("hola");

  const oldBoard = document.querySelector("#board");
  container.removeChild(oldBoard);

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

function resizeGrid(newSize) {
  newSize = parseInt(newSize);
  if (newSize > 100 || isNaN(newSize)) {
    return null;
  }

  const oldBoard = document.querySelector("#board");
  container.removeChild(oldBoard);

  createGrid(newSize);
}

function removeCellsMode() {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    cell.replaceWith(cell.cloneNode(true));
  });
}

function setCellListener(callbackFn) {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => callbackFn(cell));
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
  resizeGrid(userSize);
});

const rainbowButton = document.querySelector("#rainbow");

rainbowButton.addEventListener("click", () => {
  removeCellsMode();
  setCellListener(randomlyColorCell);
});

// Creates a default 16x16 grid
createGrid(16);
