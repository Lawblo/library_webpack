import Library from './library';
import Book from './book';

const createLibrary = (() => {
  function clearMain() {
    const main = document.querySelector('main');

    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
  }

  function bookCard(book) {
    const card = document.createElement('div');
    card.classList.add('book-card');
    card.innerHTML = `
    <div class="card-title">
      <p>Title: </p>
      <p class='card-title-title'>${book.title}</p>
    </div>
    <div class="card-author">
      <p>Author: </p>
      <p>${book.author}</p>
    </div>
    <div class="card-pages">
      <p>Pages: </p>
      <p>${book.pages}</p>
    </div>
    <div class="card-read">
      <p>Read: </p>
      <p>${book.read}</p>
    </div>
    <input class='delete-btn' type='button' value='X'></button>
    `;
    return card;
  }

  function displayBooks() {
    const libraryContainer = document.createElement('div');
    libraryContainer.classList.add('library-container');

    const header = document.createElement('h1');
    header.textContent = 'Your books: ';
    libraryContainer.appendChild(header);

    const bookCards = document.createElement('div');
    bookCards.classList.add('book-cards');
    const books = Library.getLibrary();
    books.forEach((book) => {
      bookCards.appendChild(bookCard(book));
    });

    libraryContainer.appendChild(bookCards);

    document.querySelector('main').appendChild(libraryContainer);
    addDisplayEvents();
  }

  function bookForm() {
    const libraryContainer = document.createElement('div');
    libraryContainer.classList.add('new-book-container');

    const header = document.createElement('h1');
    header.textContent = 'Enter a new book: ';
    libraryContainer.appendChild(header);

    const form = document.createElement('form');
    form.setAttribute('id', 'enter-book');

    form.innerHTML = `
            <input type="text"  id="book-title" placeholder="Title" required>
            <input type="text" name="" id="book-author" placeholder="Author" required>            
            <input type="number" name="" id="book-pages" placeholder="Pages" required>
            <div>
              <label for="book-read">Read: </label>
              <input type="radio" id="book-read" name="read-book" value=true required> 
            </div>
            <div>
              <label for="book-not-read">Not read: </label>
              <input type="radio" id="book-not-read" name="read-book" value=false required>
            </div>
            <input type="submit" value="submit" id="book-submit">
      `;

    libraryContainer.appendChild(form);
    document.querySelector('main').appendChild(libraryContainer);
  }
  function newBookBtnEvent(e) {
    e.preventDefault();
    const title = document.getElementById('book-title');
    const author = document.getElementById('book-author');
    const pages = document.getElementById('book-pages');
    const read = document.querySelector('input[name="read-book"]:checked');

    const createBook = new Book(
      title.value,
      author.value,
      pages.value,
      read.value
    );
    Library.addBook(createBook);

    clearMain();
    displayBooks();
  }

  function deleteBtnEvent(e) {
    const parent = e.target.parentNode;
    const cardTitle = parent.querySelector('.card-title-title');
    Library.removeBook(cardTitle.textContent);
    clearMain();
    displayBooks();
  }

  function addFormEvents() {
    const button = document.querySelector('#book-submit');
    button.addEventListener('click', (e) => newBookBtnEvent(e));
  }

  function addDisplayEvents() {
    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach((deleteBtn) =>
      deleteBtn.addEventListener('click', (e) => deleteBtnEvent(e))
    );
  }

  return {
    displayBooks,
    bookForm,
    addFormEvents,
    addDisplayEvents,
    clearMain,
  };
})();

export default createLibrary;
