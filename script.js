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
      cellDiv.addEventListener("mouseover", () => paintCell(cellDiv));

      // Appends cell to the row
      rowDiv.appendChild(cellDiv);
    }
    board.appendChild(rowDiv);
  }
  CONTAINER.appendChild(board);
}

function paintCell(cellNode) {
  cellNode.style.backgroundColor = "black";
  cellNode.style.border = "1px white solid";
}

function resizeGrid(newSize) {
  if (newSize > 100 || !newSize.length) {
    return null;
  }

  const oldBoard = document.querySelector("#board");
  CONTAINER.removeChild(oldBoard);

  createGrid(newSize);
}

createGrid(16);

// const cells = document.querySelectorAll(".cell");

// cells.forEach((cell) => {
//   cell.addEventListener("mouseover", () => paintCell(cell));
// });

const resizeButton = document.querySelector("#size-changer");

resizeButton.addEventListener("click", () => {
  let userSize = window.prompt("Choose a new size");
  resizeGrid(parseInt(userSize));
});
