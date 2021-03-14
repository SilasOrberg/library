// Webpage resets as soon as I click button that makes a simple alert



function addNewBook (book, author, pages) {
    // Make form pop up
    document.getElementById('book-form').innerHTML = 
    `<label for="book">Name</label><br>
    <input type="text"><br>
    <label for="author">Author</label><br>
    <input type="text"><br>
    <label for="pages">Pages</label><br>
    <input type="text"><br>
    <div id="button-div">
        <button id="submit-button">SUBMIT</button>
    </div>`
}

// Adding eventlistener to already-existing button that triggers the creation of the next button
document.getElementById("new-book-button").addEventListener("click", function () {
    addNewBook("goodName", "goodAuthor", "540")
});

// When this button is clicked, the webpage is reset, the book + form created by the addNewBook function are removed.
// Event delegation used since button is not in the DOM from the beginning.
document.querySelector('body').addEventListener('click', event => {
    if (event.target.matches('#submit-button')) {
        alert('hi')
    }
});

// How do I get around this issue so that I can simply collapse the form and allow for the user to add another book by making the form pop up again?