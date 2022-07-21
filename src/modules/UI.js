import createLibrary from './libraryUI';

const UI = (() => {
  function clearMain() {
    const main = document.querySelector('main');

    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
  }

  function formTab() {
    clearMain();
    createLibrary.bookForm();
    createLibrary.addLibraryEvents();
  }

  function displayTab() {
    clearMain();
    createLibrary.displayBooks();
  }

  function tabEvents() {
    const newBtn = document.getElementById('add-book');
    newBtn.addEventListener('click', formTab);

    const displayBtn = document.getElementById('display-books');
    displayBtn.addEventListener('click', displayTab);
  }
  function build() {
    tabEvents();
  }

  return { build };
})();

export default UI;
