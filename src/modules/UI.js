import createLibrary from './libraryUI';

const UI = (() => {
  function formTab() {
    createLibrary.clearMain();
    createLibrary.bookForm();
    createLibrary.addFormEvents();
  }

  function displayTab() {
    createLibrary.clearMain();
    createLibrary.displayBooks();
    createLibrary.addDisplayEvents();
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
