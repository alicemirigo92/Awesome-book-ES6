export default class Book {
  constructor(author, title) {
    this.title = title;
    this.author = author;
    this.id = Date.now();
  }
}
