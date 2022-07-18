import createLibrary from './libraryUI';

const UI = (() => {
  function main() {
    const body = document.querySelector('body');
    body.appendChild(createLibrary.main());
  }
  return { main };
})();

export default UI;
