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
  newSize = parseInt(newSize);
  if (newSize > 100 || isNaN(newSize)) {
    return null;
  }

  const oldBoard = document.querySelector("#board");
  CONTAINER.removeChild(oldBoard);

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

// This works in a bit of a hacky way.
// Basically the cells by default have a white background,
// and the container that holds everything has a black background.
// So we can change the opacity value of each cell to give illusion of darkening.
function darkenCell(cellNode) {
  // By default the DOM method of style.opacity has a value of '', even when opacity is set in stylesheet.
  if (cellNode.style.opacity === "") {
    cellNode.style.opacity = 0.9;
  } else if (cellNode.style.opacity <= 0.0) {
    return null;
  } else {
    cellNode.style.opacity -= 0.1;
  }
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

const darkenButton = document.querySelector("#darken");
darkenButton.addEventListener("click", () => {
  removeCellsMode();
  setCellListener(darkenCell);
});

// Creates a default 16x16 grid
createGrid(16);
