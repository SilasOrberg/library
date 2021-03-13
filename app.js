let myLibrary = [];

function Book () {

}

function addBookToLibrary () {
    // Turn it into an object

    // Push object to library
    myLibrary.push(userInput)
};

function addNewBook (book, author, pages) {
    // Ask for userInput here
    


    // Probably split this function into two
    // Create new row
    let bookTable = document.getElementById("book-table");
    let row = bookTable.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    // Insert  Book, author and pages into row
    cell1.textContent = book;
    cell2.textContent = author;
    cell3.textContent = pages;
};

document.getElementById("new-book-button").addEventListener("click", function () {
    addNewBook("penis", "penisman", "69")
});

