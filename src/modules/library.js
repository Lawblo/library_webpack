const Library = (() => {
  function setLibrary(library) {
    if (typeof library !== typeof []) {
      return;
    }
    localStorage.setItem('library', JSON.stringify(library));
  }

  function initLibrary() {
    if (Array.isArray(JSON.parse(localStorage.getItem('library')))) {
      return;
    }
    setLibrary([]);
  }

  function getLibrary() {
    initLibrary();
    const library = JSON.parse(localStorage.getItem('library'));
    return library;
  }

  function addBook(book) {
    initLibrary();
    const library = getLibrary();
    if (library.some((e) => e.title === book.title)) {
      return;
    }
    library.push(book);
    setLibrary(library);
  }

  function removeBook(title) {
    initLibrary();
    const library = getLibrary();
    const newLibrary = [];
    library.forEach((libBook) => {
      if (libBook.title !== title) {
        newLibrary.push(libBook);
      }
    });
    setLibrary(newLibrary);
  }

  return {
    initLibrary,
    getLibrary,
    setLibrary,
    addBook,
    removeBook,
  };
})();

export default Library;
