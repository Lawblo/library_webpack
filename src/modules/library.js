import Book from './book';

export default class Library {
  constructor(books) {
    this.books = books;
  }

  static addBook(title, author, pages) {
    this.books.push(new Book(title, author, pages));
  }
}
