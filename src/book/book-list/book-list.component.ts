import { Component, OnInit } from '@angular/core';
import { Book, BookService } from '../book.service'; 

@Component({
  selector: 'book-list',
  templateUrl: 'book-list.component.html'
})
export class BookListComponent implements OnInit {
    books: Book[];
    constructor(private bookService: BookService) {}

    ngOnInit() {
        this.bookService.getBooks().subscribe(books => this.books = books);
    }
}