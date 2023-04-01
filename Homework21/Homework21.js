
function addCustomer() {
    
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const address = document.getElementById("address").value;
  
    
    const table = document.getElementById("customerTableBody");
    const row = table.insertRow(-1);
    const firstNameCell = row.insertCell(0);
    const lastNameCell = row.insertCell(1);
    const addressCell = row.insertCell(2);
    firstNameCell.innerHTML = fname;
    lastNameCell.innerHTML = lname;
    addressCell.innerHTML = address;
  
    
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("address").value = "";
  }
  
  
  function removeLastEntry() {
    const table = document.getElementById("customerTableBody");
    const rowCount = table.rows.length;
    if (rowCount > 0) {
      table.deleteRow(rowCount - 1);
    }
  }
  