// import Library from './library';
// import Book from './book';

const createLibrary = (() => {
  function main() {
    const libraryContainer = document.createElement('div');
    libraryContainer.classList.add('libraryContainer');

    libraryContainer.innerHTML = `
        `;

    return libraryContainer;
  }

  return { main };
})();

export default createLibrary;
