let myLibrary = [{ 'title': "Senhor da Chuva", 'author': "André Vianco", 'pages': 267, 'read': true }, { 'title': "It", 'author': "Stephen King", 'pages': 1168, 'read': false }];

const page = document.querySelector('main');

const add_button = document.querySelector('#add_book');
add_button.addEventListener('click', () => {
  page.appendChild(createForm());
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

function createForm() {
  let form = document.createElement('form');
  
  let TL = document.createElement('input');
  TL.setAttribute('type', 'text');
  TL.setAttribute('name', 'Title');
  TL.setAttribute('placeholder', 'Book title');
  
  let AU = document.createElement('input');
  AU.setAttribute('type', 'text');
  AU.setAttribute('name', 'Author');
  AU.setAttribute('placeholder', 'Author name');
  
  let PG = document.createElement('input');
  PG.setAttribute('type', 'number');
  PG.setAttribute('name', 'Pages');
  PG.setAttribute('placeholder', 'Number of pages');
  
  let RE = document.createElement('input');
  RE.setAttribute('type', 'text');
  RE.setAttribute('name', 'Read');
  RE.setAttribute('placeholder', 'Already read?');

  populateForm(form, TL, AU, PG, RE);
  return form;
}

function populateForm(form, title, author, pages, read) {
  form.appendChild(title);
  form.appendChild(author);
  form.appendChild(pages);
  form.appendChild(read);
}

showLibrary();