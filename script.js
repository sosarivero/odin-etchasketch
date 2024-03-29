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

createGrid(16);

// const cells = document.querySelectorAll(".cell");

// cells.forEach((cell) => {
//   cell.addEventListener("mouseover", () => paintCell(cell));
// });

const resizeButton = document.querySelector("#size-changer");

resizeButton.addEventListener("click", () => {
  let userSize = window.prompt("Choose a new size");
  resizeGrid(userSize);
});
