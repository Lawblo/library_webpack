import createLibrary from './libraryUI';

const UI = (() => {
  function main() {
    const libUI = document.querySelector('.libUI');
    libUI.appendChild(createLibrary.main());
  }
  return { main };
})();

export default UI;
