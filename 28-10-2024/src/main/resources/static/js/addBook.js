




document.getElementById("addBookButton").addEventListener("click", function() {

    document.getElementById("bookForm").style.display = "block";

    document.getElementById("removeBookForm").style.display = "none";
});

document.getElementById("newBookForm").addEventListener("submit", function(event) {

    event.preventDefault();


    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;

    const tableBody = document.getElementById("bookTable").getElementsByTagName('tbody')[0];


    addNewRowV1(tableBody , title , year);



    document.getElementById("bookForm").style.display = "none";

    document.getElementById("newBookForm").reset();



});


function addNewRowV1(tableBody , title, year){


    const newRowHTML = `
        <tr>
            <td>${title}</td>
            <td>${year}</td>
        </tr>
    `


    tableBody.innerHTML += newRowHTML;

}

