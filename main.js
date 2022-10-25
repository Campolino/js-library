let myLibrary = [{ 'title': "Senhor da Chuva", 'author': "André Vianco", 'pages': 267, 'read': true }, { 'title': "Senhor da Chuva", 'author': "André Vianco", 'pages': 267, 'read': true }, { 'title': "Senhor da Chuva", 'author': "André Vianco", 'pages': 267, 'read': true }];

const page = document.querySelector('main');

function Book(title = "Blank Book", author = "Nobody", pages = 0, read = false ) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

function AddBookToLibrary() {
  // do stuff here
}

function ShowLibrary() {
  myLibrary.forEach(book => {
    page.appendChild(CreateCard(book));
  })
}

function CreateCard(book) {
  let card = document.createElement('div');
  card.className = 'card';
  card.appendChild(PopulateCard(book));
  return card;
}

function PopulateCard(book) {
  let container = document.createElement('div');
  container.className = 'container';
  let title = document.createElement('h4');
  title.textContent = `${book.title}`;
  let author = document.createElement('p');
  author.textContent = `${book.author}`;
  let pages = document.createElement('p');
  pages.textContent = `${book.pages}`;
  let read = document.createElement('p');
  read.textContent = `${book.read}`;

  container.appendChild(title);
  container.appendChild(author);
  container.appendChild(pages);
  container.appendChild(read);
  return container;
}

ShowLibrary();