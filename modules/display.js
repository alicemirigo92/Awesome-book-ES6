import Remove from './remove.js';


export default class Display {
  constructor() {
    this.collection = JSON.parse(localStorage.getItem('bookCollection')) || [];
  }


  displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    this.collection.forEach((book) => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
      bookDiv.id = `book-${book.id}`;
      bookDiv.innerHTML = `
            <h2 class="author-name">"${book.title}"</h2>
            <h3 class="book-title">by- ${book.author}</h3>
            <button type="submit" id="remove-button">Remove</button>
        `;
      const removeButton = bookDiv.querySelector('#remove-button');
      removeButton.addEventListener('click', () => {
        const remove = new Remove(book.id);
        remove.removeBook();
        const parent = bookDiv.parentNode;
        parent.removeChild(bookDiv);
      });
      bookList.appendChild(bookDiv);
    });
  }
}
