let myLibrary = [];

function Book(title, author, pages, genre, publishedYear) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.genre = genre;
  this.publishedYear = publishedYear;
}

const title = document.querySelector('[data-title]');
const author = document.querySelector('[data-author]');
const page = document.querySelector('[data-page]');
const year = document.querySelector('[data-year]');
const genre = document.querySelector('[data-genre]');
const addBookBtn = document.querySelector('.add-book--btn');

Book.prototype.addBookToLibrary = function (e) {
  myLibrary.push(e);
};
Book.prototype.removeBookFromLibrary = function () {};
Book.prototype.displayBook = function () {};
Book.prototype.readingBook = function () {};

const book = new Book('The Hobbit', 'J.R.R Tolkin', '376', '1945', 'Fantasy');

addBookBtn.addEventListener('click', () => {
  book.addBookToLibrary(e);
});
