import Library from './library';
import Book from './book';

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
    libraryContainer.classList.add('library-container');

    libraryContainer.innerHTML = `
        <form action="" id="enter-book">
            <h1>Enter a new book: </h1>
            <input type="text"  id="book-title" placeholder="Title">
            <input type="text" name="" id="book-author" placeholder="Author">            
            <input type="number" name="" id="book-pages" placeholder="Pages">
            <div id="read">
                <div>
                    <label for="book-read">Read:</label>
                    <input type="radio" id="book-read" name="read-book" value=true> 
                </div>
                <div>
                    <label for="book-not-read">Not read:</label>
                    <input type="radio" id="book-not-read" name="read-book" value=false> </div>
                </div>
            <input type="submit" value="submit" id="book-submit">
        </form>
`;

    document.querySelector('main').appendChild(libraryContainer);
  }

  function addLibraryEvents() {
    const button = document.querySelector('#book-submit');

    button.addEventListener('click', (e) => {
      e.preventDefault();
      const title = document.getElementById('book-title').value;
      const author = document.getElementById('book-author').value;
      const pages = document.getElementById('book-pages').value;
      const read = document.querySelector(
        'input[name="read-book"]:checked',
      ).value;

      const createBook = new Book(title, author, pages, read);
      Library.addBook(createBook);
    });
  }

  return { displayBooks, bookForm, addLibraryEvents };
})();

export default createLibrary;
