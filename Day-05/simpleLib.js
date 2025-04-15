class Library {
  constructor() {
    this.Book = [];
  }

  addBook(book) {
    this.Book.push(book);
  }

  removeBook(book) {
    this.Book = this.Book.filter((i) => i != book);
  }

  display() {
    console.log(this.Book);
  }
}

const lib = new Library();
lib.addBook("JavaScript");
lib.addBook("Python");
lib.display();
lib.removeBook("Python");
lib.display();
