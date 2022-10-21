let myLibrary = [{ 'title': "Senhor da Chuva", 'author': "André Vianco", 'pages': 267, 'read': true }];

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
    console.log(book.title);
    console.log(book.pages);
  })
}

ShowLibrary()
