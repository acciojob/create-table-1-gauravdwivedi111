function insert_Row() {

    let table = document.getElementById("sampleTable");

    // Insert row at position 0 (top)
    let newRow = table.insertRow(0);

    // Insert cells
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // Add text
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
