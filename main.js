let myLibrary = [
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R Tolkin',
    page: 376,
    genre: 'Fantasy',
    publishedYear: 1945,
  },
];

function Book(title, author, pages, genre, publishedYear) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.genre = genre;
  this.publishedYear = publishedYear;
}

// Add book to array
Book.prototype.addBookToLibrary = function (e) {
  myLibrary.push(e);
};
// Display book to dom
Book.prototype.displayBook = function () {
  const recentlyAddDiv = document.querySelector('.recently-add-content');

  let list = myLibrary.map((book) => {
    `<ul>
    <li>${book.title}
    ${book.author}
   ${book.page}
    ${book.year}
   ${book.genre}</li>
    
    </ul>`;
  });

  recentlyAddDiv.appendChild(list);
};
// Remove book from array
Book.prototype.removeBookFromLibrary = function () {};
// Toggle the reading status
Book.prototype.readingBook = function () {};
document.getElementById('form').addEventListener('submit', (e) => {
  console.log('submit');
  //Get input value
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const page = document.getElementById('page').value;
  const year = document.getElementById('year').value;
  const genre = document.getElementById('genre').value;
  // const readingNow = document.getElementById('reading-now').value;
  // const readingList = document.getElementById('reading-list').value;

  //Instantiate Book constructor
  const book = new Book(title, author, page, year, genre);
  book.addBookToLibrary(book);
  console.log(book);
  e.preventDefault();
});
console.log(myLibrary);

/*
// Algorithem 

1. create a BOOK constructor
2. create addBook prototype
    1. save book inputs in variable
    2. push book to array

3. display book card
    1. use map method to display each book

4. create removeBook prototype
    1.select the remove button
    2. select the current book
    3 remove it from array
    4. remove from the DOM
5. create readingBook prototype
    1. change status using toggle button
    2. show status change by changing bg-color








*/
