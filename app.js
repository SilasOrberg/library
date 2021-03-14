let myLibrary = [];

// Constructor for the book objects
function Book (name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}

// Function to display form
document.getElementById("new-book-button").addEventListener("click", function () {
    document.getElementById('book-form').innerHTML = 
    `<label for="book">Name</label><br>
    <input type="text" id="book"><br>
    <label for="author">Author</label><br>
    <input type="text" id="author"><br>
    <label for="pages">Pages</label><br>
    <input type="text" id="pages"><br>
    <div id="button-div">
        <button id="submit-button">SUBMIT</button>
    </div>`
});

// Function to add the books from form to array and collapse form
document.querySelector('body').addEventListener('click', event => {
    if (event.target.matches('#submit-button')) {

        // Get user input and create new book
        const newBook = new Book (document.getElementById("book").value,
        document.getElementById("author").value,
        document.getElementById("pages" ).value);

        // Add it to array and display in table
        myLibrary.push(newBook);
        displayBooks(newBook);

        // Collapse form
        event.preventDefault();
        document.getElementById('book-form').innerHTML = '';
    }
});

// Access form for use in the following functions
let bookTable = document.getElementById("book-table");

// Function to display newly created books in the table
function displayBooks (book) {

    // Create new row
    let row = bookTable.insertRow(1);
    // How to add script to the row?
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    
    // Insert  Book, author and pages into row
    cell1.textContent = book.name;
    cell2.textContent = book.author;
    cell3.textContent = book.pages;
    cell4.innerHTML = '<button id="delete-button">Delete book</button>'
    cell5.innerHTML = '<button id="read-button">Read?</button>'
}

// Function that deletes a book from the array
function deleteRow (row) {
    // Remove from array
    myLibrary.splice(row.rowIndex, row.rowIndex + 1)

    // Remove from table

}

// document.querySelector('body').addEventListener('click', event => {
//     if (event.target.matches('#delete-button')) {
//         console.log(event.closest('tr'))
//     }
// });

// Next steps are to create button to remove books. And read button. 
