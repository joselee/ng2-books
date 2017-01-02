import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Book, BookService } from '../book.service';
import { slideInDownAnimation } from '../../animations';

@Component({
  selector: 'book-detail',
  templateUrl: 'book-detail.component.html'
})
export class BookDetailComponent implements OnInit {
    private book: Book;
    private id: number;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private bookService: BookService) { }

    ngOnInit() {
        this.route
            .params
            .map((params: Params) => params['id'])
            .do(id => this.id = +id)
            .subscribe(id => this.getBook());
    }

    getBook() {
        this.bookService.getBook(this.id)
            .subscribe(book => this.book = book);
    }
}