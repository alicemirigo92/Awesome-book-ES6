import Display from './modules/display.js';
import Add from './modules/add.js';
import { DateTime } from './modules/luxon.js';

const addBookForm = document.getElementById('add-book-form');
const date = document.getElementById('DateTime');
setInterval(() => {
  date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
}, 1000);
const display = new Display();

document.addEventListener('DOMContentLoaded', display.displayBooks());

addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookTitle = document.getElementById('book-title').value.trim();
  const authorName = document.getElementById('author-name').value.trim();
  if (bookTitle && authorName) {
    const add = new Add(authorName, bookTitle);
    add.addNewBook();
  }

  addBookForm.reset();
  display.displayBooks();
});
