function insert_Row() {

    let table = document.getElementById("sampleTable");

    // Create new row
    let newRow = document.createElement("tr");

    // Create cells
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");

    // Add text
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";

    // Append cells to row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);

    // Insert row at top (before first row)
    table.insertBefore(newRow, table.rows[0]);
}
