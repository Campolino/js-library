let myLibrary = [{ 'title': "Senhor da Chuva", 'author': "André Vianco", 'pages': 267, 'read': "yes" }, { 'title': "It", 'author': "Stephen King", 'pages': 1168, 'read': "no" }];

const page = document.querySelector('main');
const FR = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');

FR.addEventListener('submit', (e) => {
  e.preventDefault();

  addBookToLibrary(
    new Book(title.value, author.value, pages.value, read.value)
  );

  FR.reset();

  showLibrary();
});

class Book {
  constructor(title = "Blank Book", author = "Nobody", pages = 0, read = "no") {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function showLibrary() {
  page.textContent = '';
  myLibrary.forEach(book => {
    page.appendChild(createCard(book));
  })
}

function createCard(book) {
  let card = document.createElement('div');
  card.className = 'card';
  card.appendChild(populateCard(book));
  return card;
}

function populateCard(book) {
  let container = document.createElement('div');
  container.className = 'container';
  let title = document.createElement('h4');
  title.textContent = `${book.title}`;
  let author = document.createElement('p');
  author.textContent = `Author: ${book.author}`;
  let pages = document.createElement('p');
  pages.textContent = `Pages: ${book.pages}`;
  let read = document.createElement('p');
  read.textContent = `${book.read == "yes" ? 'Already read' : 'Not read yet'}`;

  container.appendChild(title);
  container.appendChild(author);
  container.appendChild(pages);
  container.appendChild(read);
  return container;
}

showLibrary();