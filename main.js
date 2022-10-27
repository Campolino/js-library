let myLibrary = [{ 'title': "Senhor da Chuva", 'author': "André Vianco", 'pages': 267, 'read': true }, { 'title': "It", 'author': "Stephen King", 'pages': 1168, 'read': false }];

const page = document.querySelector('main');

const toggleForm = document.querySelector('#add_book');
toggleForm.addEventListener('click', () => {
  let form = document.querySelector('form');
  form.classList.toggle('visible');
  toggleForm.textContent = 'Remove form'
});

function Book(title = "Blank Book", author = "Nobody", pages = 0, read = false ) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

function addBookToLibrary() {
  // do stuff here
}

function showLibrary() {
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
  read.textContent = `${book.read == true ? 'Already read' : 'Not read yet'}`;

  container.appendChild(title);
  container.appendChild(author);
  container.appendChild(pages);
  container.appendChild(read);
  return container;
}

showLibrary();