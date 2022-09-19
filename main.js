// Form Modal
const modal = document.querySelector('.add-book');

document.querySelector('.popup__btn').addEventListener('click', () => {
  document.querySelector('.add-book').showModal();
});
document.querySelector('.close-btn').addEventListener('click', () => {
  document.querySelector('.add-book').close();
});

// Book class
myLibrary = [];

class Book {
  constructor(id, title, author, page, genre, publishedYear) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.page = page;
    this.genre = genre;
    this.publishedYear = publishedYear;
  }

  //Clear form field
  clearFormField() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('page').value = '';
    document.getElementById('year').value = '';
    document.getElementById('genre').value = '';
  }

  //Show error message
  setErrorMessage(message) {
    //select div element
    const divMessage = document.getElementById('error-message');
    //Add error message
    divMessage.innerText = message;
    //Add error class
    divMessage.classList.add('error');
    //Append to form

    //Time out
    setTimeout(function () {
      divMessage.innerText = '';
      divMessage.classList.remove('error');
    }, 3000);
  }

  // Add book to array
  addBookToLibrary(e) {
    myLibrary.push(e);
  }

  // Display book to dom
  displayBook(book) {
    //select container element
    const recentlyAddDiv = document.querySelector('.recently-add-content');
    //create div element
    const contentDiv = document.createElement('div');
    //add class to div
    contentDiv.classList.add('content');

    contentDiv.innerHTML = `
                    <h2 class="title">${book.title}</h2>
                    <div class="content-desc">
                      <span class="uid">${book.id}</span>
                      <p>Author: <span class="author">${book.author}</span></p>
                      <p>Genre: <span class="genre">${book.genre}</span></p>
                      <p>Pages: <span class="pages">${book.page}</spancla></p>
                      <p>Published: <span class="published">${book.publishedYear}</span></p>
                    </div>
                    <div class="content-btns">
                      <button class="remove-btn" data-button="remove" title="Remove book">
                        <svg class="svg-btn" style="width:24px;height:24px" viewBox="0 0 24 24">
                          <path class="remove" fill="currentColor" d="M13 19C13 20.1 13.3 21.12 13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V13.09C19.67 13.04 19.34 13 19 13C15.69 13 13 15.69 13 19M22.54 16.88L21.12 15.47L19 17.59L16.88 15.47L15.47 16.88L17.59 19L15.47 21.12L16.88 22.54L19 20.41L21.12 22.54L22.54 21.12L20.41 19L22.54 16.88Z" />
                        </svg>
                      </button>
                      <a href="#" class="reading-now" data-reading title="Toggle reading"></a>
                    </div>
    `;

    recentlyAddDiv.appendChild(contentDiv);
  }

  // Remove book
  removeBook(target) {
    // if (target.classList.contains('remove')) {
    //   target.parentElement.parentElement.parentElement.parentElement.remove();
    // } else if (target.classList.contains('sgv-btn')) {
    //   target.parentElement.parentElement.parentElement.remove();
    // } else

    if (target.classList.contains('remove-btn')) {
      target.parentElement.parentElement.remove();
    }
  }

  //Toggle Reading
  toggleReading(target) {
    if (target.classList.contains('reading-now')) {
      target.parentElement.parentElement.classList.toggle('toggle-bg');
      // document.querySelector('.content').classList.toggle('toggle-bg');
      target.classList.toggle('toggle-btn');
    }
  }
}

class Storage {
  // get book from local storage
  static getBookFromLocalStorage() {
    let books;
    //check for existing books in local storage
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  // add to local storage
  static addBookToLocalStorage(book) {
    const books = Storage.getBookFromLocalStorage();

    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
  // display from local storage
  static displayBookFromLocalStorage() {
    const books = Storage.getBookFromLocalStorage();

    books.map((book) => {
      //select container element
      const recentlyAddDiv = document.querySelector('.recently-add-content');
      //create div element
      const contentDiv = document.createElement('div');
      //add class to div
      contentDiv.classList.add('content');

      contentDiv.innerHTML = `
              <h2 class="title">${book.title}</h2>
              <div class="content-desc">
              <span class="uid">${book.id}</span>
                <p>Author: <span class="author">${book.author}</span></p>
                <p>Genre: <span class="genre">${book.genre}</span></p>
                <p>Pages: <span class="pages">${book.page}</spancla></p>
                <p>Published: <span class="published">${book.publishedYear}</span></p>
              </div>
              <div class="content-btns">
                <button class="remove-btn" data-button="remove" title="Remove book">
                  <svg class="svg-btn" style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path class="remove" fill="currentColor" d="M13 19C13 20.1 13.3 21.12 13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V13.09C19.67 13.04 19.34 13 19 13C15.69 13 13 15.69 13 19M22.54 16.88L21.12 15.47L19 17.59L16.88 15.47L15.47 16.88L17.59 19L15.47 21.12L16.88 22.54L19 20.41L21.12 22.54L22.54 21.12L20.41 19L22.54 16.88Z" />
                  </svg>
                </button>
                <a href="#" class="reading-now" data-reading title="Toggle reading"></a>
              </div>
  `;

      recentlyAddDiv.appendChild(contentDiv);
      return contentDiv;
    });
  }

  //remove book
  static removeBookFromLocalStorage(target) {
    const books = Storage.getBookFromLocalStorage();

    books.map((book, index) => {
      if (book.id === target) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

//Load book from local storage
document.addEventListener(
  'DOMContentLoaded',
  Storage.displayBookFromLocalStorage
);
// Add Event listener
document.getElementById('form').addEventListener('submit', (e) => {
  //Get input value
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const page = document.getElementById('page').value;
  const publishedYear = document.getElementById('year').value;
  const genre = document.getElementById('genre').value;
  const id = uid();
  //Instantiate Book constructor
  const book = new Book(id, title, author, page, genre, publishedYear);

  // Form Validation
  if (
    title === '' ||
    author === '' ||
    page === '' ||
    genre === '' ||
    publishedYear === ''
  ) {
    book.setErrorMessage('Please fill all the field');
  } else {
    book.addBookToLibrary(book);
    //Add to local storage
    Storage.addBookToLocalStorage(book);

    book.clearFormField();
    book.displayBook(book);
  }
  e.preventDefault();
});

document
  .querySelector('.recently-add-content')
  .addEventListener('click', (e) => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const page = document.getElementById('page').value;
    const publishedYear = document.getElementById('year').value;
    const genre = document.getElementById('genre').value;
    const book = new Book(title, author, page, genre, publishedYear);
    book.removeBook(e.target);
    book.toggleReading(e.target);
    Storage.removeBookFromLocalStorage(
      e.target.parentElement.previousElementSibling.firstChild.nextSibling
        .textContent
    );
  });

const uid = function () {
  return (
    Date.now().toString(36) +
    Math.floor(
      Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)
    ).toString(36)
  );
};
