import Book from './book.js';


export default class Add {
  constructor(author, title) {
    this.author = author;
    this.title = title;
    this.collection = JSON.parse(localStorage.getItem('bookCollection')) || [];
  }


  addNewBook() {
    const newBook = new Book(this.title, this.author);
    this.collection.push(newBook);
    localStorage.setItem('bookCollection', JSON.stringify(this.collection));
  }
}
