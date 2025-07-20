var Book = /** @class */ (function () {
    function Book(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.removeBook = function (isbn) {
        this.books = this.books.filter(function (book) { return book.getIsbn() !== isbn; });
    };
    Library.prototype.findBook = function (title) {
        return this.books.find(function (book) { return book.getTitle() === title; });
    };
    Library.prototype.listBooks = function () {
        this.books.forEach(function (book) {
            console.log("Title: ".concat(book.getTitle(), ", Author: ").concat(book.getAuthor(), ", ISBN: ").concat(book.getIsbn()));
        });
    };
    return Library;
}());
var library = new Library();
library.addBook(new Book("Book A", "Author A", "ISBN001"));
library.addBook(new Book("Book B", "Author B", "ISBN002"));
library.addBook(new Book("Book C", "Author C", "ISBN003"));
library.listBooks();
console.log("Tìm sách:", library.findBook("Book A"));
library.removeBook("ISBN001");
library.listBooks();
