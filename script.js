let selectedRow = null;

document.getElementById("saveButton").addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let course = document.getElementById("course").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;

    if (name && age && course && email && contact) {
        let table = document.getElementById("studentTableBody");
        let row = table.insertRow();

        row.innerHTML = `
            <td>${name}</td>
            <td>${age}</td>
            <td>${course}</td>
            <td>${gender}</td>
            <td>${email}</td>
            <td>${contact}</td>
            <td>
                <button class="edit-btn" onclick="editRow(this)">Edit</button>
                <button class="delete-btn" onclick="deleteRow(this)">Delete</button>
            </td>
        `;

        document.getElementById("studentForm").reset();
    } else {
        alert("Please fill out all fields!");
    }
});

function deleteRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editRow(button) {
    selectedRow = button.parentNode.parentNode;
    
    document.getElementById("name").value = selectedRow.cells[0].innerText;
    document.getElementById("age").value = selectedRow.cells[1].innerText;
    document.getElementById("course").value = selectedRow.cells[2].innerText;
    document.querySelector(`input[name="gender"][value="${selectedRow.cells[3].innerText}"]`).checked = true;
    document.getElementById("email").value = selectedRow.cells[4].innerText;
    document.getElementById("contact").value = selectedRow.cells[5].innerText;

    document.getElementById("saveButton").style.display = "none";
    document.getElementById("updateButton").style.display = "block";
}

document.getElementById("updateButton").addEventListener("click", function() {
    if (selectedRow) {
        selectedRow.cells[0].innerText = document.getElementById("name").value;
        selectedRow.cells[1].innerText = document.getElementById("age").value;
        selectedRow.cells[2].innerText = document.getElementById("course").value;
        selectedRow.cells[3].innerText = document.querySelector('input[name="gender"]:checked').value;
        selectedRow.cells[4].innerText = document.getElementById("email").value;
        selectedRow.cells[5].innerText = document.getElementById("contact").value;

        selectedRow = null;

        document.getElementById("studentForm").reset();
        document.getElementById("saveButton").style.display = "block";
        document.getElementById("updateButton").style.display = "none";
    }
});
