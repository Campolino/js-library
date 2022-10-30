let myLibrary = [{ 'id': 1, 'title': "Senhor da Chuva", 'author': "André Vianco", 'pages': 267, 'read': "yes" }, { 'id': 2, 'title': "It", 'author': "Stephen King", 'pages': 1168, 'read': "no" }];

const page = document.querySelector('main');
const FR = document.querySelector('form');

FR.addEventListener('submit', (e) => {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const pages = document.querySelector('#pages');
  const read = document.querySelector('#read');

  e.preventDefault();

  if(pages.value <= 0) {
    alert('Sorry! Number of pages need to be more than 0.')
  } else {
    addBookToLibrary(
      new Book(title.value, author.value, pages.value, read.value)
    );
    FR.reset();
  
    showLibrary();
  }
});

class Book {
  constructor(title = "Blank Book", author = "Nobody", pages = 0, read = "no") {
    this.id = myLibrary.length + 1,
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
  }
}

function addBookToLibrary(book) {
  myLibrary.unshift(book);
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
  let del = document.createElement('button');
  del.setAttribute('id', `${book.id}`);
  del.textContent = 'delete';

  del.addEventListener('click', () => {
    myLibrary.splice(myLibrary.find(e => e.id == book.id), 1);
    showLibrary();
  });

  container.appendChild(title);
  container.appendChild(author);
  container.appendChild(pages);
  container.appendChild(read);
  container.appendChild(del);
  return container;
}

showLibrary();