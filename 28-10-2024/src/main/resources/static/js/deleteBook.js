
document.getElementById("removeBookButton").addEventListener("click", function() {
    document.getElementById("removeBookForm").style.display = "block";
    document.getElementById("bookForm").style.display = "none";
});

function removeBookByNumber(event) {
    event.preventDefault();

    const bookNumber = parseInt(document.getElementById("bookNumber").value);

    const rows = document.getElementById('bookTable').querySelectorAll('tr');

    if (bookNumber > 0 && bookNumber <= rows.length) {
        rows[bookNumber].remove();
        document.getElementById("removeBookForm").style.display = "none";
        document.getElementById("removeBookByNumberForm").reset();
    } else {
        alert("Numero libro non valido!");
    }
}



document.querySelectorAll(".deleteButton").forEach(button => {
    button.addEventListener("click", function() {
        const row = button.closest("tr");
        row.parentNode.removeChild(row);
    });
});


function deleteRow(button) {
    const row = button.parentNode.parentNode;

    row.parentNode.removeChild(row);

}
