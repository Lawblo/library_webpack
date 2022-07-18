import Library from './library';
import Book from './book';

const createLibrary = (() => {
  function main() {
    const libraryContainer = document.createElement('div');

    libraryContainer.innerHTML = `
        <button> TEST </button>
        `;

    return libraryContainer;
  }

  return { main };
})();

export default createLibrary;
