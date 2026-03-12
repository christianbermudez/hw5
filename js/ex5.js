const buildTable = () => {
  let output = document.getElementById("output");

  // Create table
  let table = document.createElement("table");

  for (let i = 1; i <= 12; i++) {
    let row = document.createElement("tr");
    let cell = document.createElement("td");

    cell.textContent = i;
    cell.style.textAlign = "center";

    // Blue background for multiples of 4
    if (i % 4 === 0) {
      cell.classList.add("blue-bg");
    }

    row.appendChild(cell);
    table.appendChild(row);
  }

  output.appendChild(table);
}

buildTable();
