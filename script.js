function createGrid(sideSize) {
  const container = document.querySelector("#container");

  for (let i = 0; i < sideSize; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    for (let j = 0; j < sideSize; j++) {
      const cellDiv = document.createElement("div");
      cellDiv.classList.add("cell");
      // Appends cell to the row
      rowDiv.appendChild(cellDiv);
    }
    container.appendChild(rowDiv);
  }
}

function paintCell(cellNode) {
  cellNode.style.backgroundColor = "black";
  cellNode.style.border = "1px white solid";
}

createGrid(16);

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("mouseover", () => paintCell(cell));
});
