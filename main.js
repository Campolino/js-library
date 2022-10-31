let myLibrary = [{ 'id': 1, 'title': "Senhor da Chuva", 'author': "André Vianco", 'pages': 267, 'read': "yes" }, { 'id': 2, 'title': "It", 'author': "Stephen King", 'pages': 1168, 'read': "no" }];

const page = document.querySelector('main');
const FR = document.querySelector('form');
const TB = document.querySelector('#title');
const TA = document.querySelector('#author');
const TP = document.querySelector('#pages');
const TR = document.querySelector('#read');

FR.addEventListener('submit', (e) => {
  e.preventDefault();

  if(pages.value <= 0) {
    alert('Sorry! Number of pages need to be more than 0.')
  } else {
    addBookToLibrary(
      new Book(TB.value, TA.value, TP.value, TR.value)
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
  book.read == 'yes' ? '' : card.classList.toggle('not-read');
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

  let edit = document.createElement('button');
  edit.textContent = 'change status';

  edit.addEventListener('click', () => {
    book = myLibrary.at(myLibrary.findIndex(e => e.id == book.id));
    
    book.read == 'yes' ? book.read = 'no' : book.read = 'yes';
    showLibrary();
  });

  let del = document.createElement('button');
  del.setAttribute('id', `${book.id}`);
  del.textContent = 'delete';

  del.addEventListener('click', () => {
    myLibrary.splice(myLibrary.findIndex(e => e.id == book.id), 1);
    showLibrary();
  });

  container.appendChild(title);
  container.appendChild(author);
  container.appendChild(pages);
  container.appendChild(read);

  let div_button = document.createElement('div');
  div_button.setAttribute('class', 'card-button');
  div_button.appendChild(edit);
  div_button.appendChild(del);

  container.appendChild(div_button);
  return container;
}

showLibrary();