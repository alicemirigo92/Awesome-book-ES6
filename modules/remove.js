export default class Remove {
  constructor(id) {
    this.id = id;
    this.collection = JSON.parse(localStorage.getItem('bookCollection'));
  }


  removeBook() {
    this.collection = this.collection.filter((book) => book.id !== this.id);
    localStorage.setItem('bookCollection', JSON.stringify(this.collection));
  }
}
