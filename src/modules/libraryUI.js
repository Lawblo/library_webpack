import Library from './library';
import Book from './book';
import UI from './UI';

const createLibrary = (() => {
  function bookCard(book) {
    const card = document.createElement('div');
    card.classList.add('book-card');
    card.innerHTML = `
    <div class="card-title">
      <p>Title: </p>
      <p>${book.title}</p>
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
            <input type="radio" id="book-read" name="read-book" value=true required> 
            <input type="radio" id="book-not-read" name="read-book" value=false required>
            <input type="submit" value="submit" id="book-submit">`;

    libraryContainer.appendChild(form);
    document.querySelector('main').appendChild(libraryContainer);
  }

  function addLibraryEvents() {
    const button = document.querySelector('#book-submit');

    button.addEventListener('click', (e) => {
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

      UI.clearMain();
      displayBooks();
    });
  }

  return { displayBooks, bookForm, addLibraryEvents };
})();

export default createLibrary;
