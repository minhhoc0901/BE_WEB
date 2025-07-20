class Book {
    private title: string;
    private author: string;
    private isbn: string;
    constructor(title: string, author: string, isbn: string) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getIsbn(): string {
        return this.isbn;
    }
}

class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public removeBook(isbn: string): void {
        this.books = this.books.filter(book => book.getIsbn() !== isbn);
    }

    public findBook(title: string): Book | undefined {
        return this.books.find(book => book.getTitle() === title);
    }

    public listBooks(): void {
        this.books.forEach(book => {
            console.log(`Title: ${book.getTitle()}, Author: ${book.getAuthor()}, ISBN: ${book.getIsbn()}`);
        });
    }
}


const library = new Library();
library.addBook(new Book("Book A", "Author A", "ISBN001"));
library.addBook(new Book("Book B", "Author B", "ISBN002"));
library.addBook(new Book("Book C", "Author C", "ISBN003"));

library.listBooks();
console.log("Tìm sách:", library.findBook("Book A"));
library.removeBook("ISBN001");
library.listBooks();
