import { Component, OnInit } from '@angular/core';
import { Author, AuthorService } from '../author.service'; 

@Component({
  selector: 'author-list',
  templateUrl: 'author-list.component.html'
})
export class AuthorListComponent implements OnInit {
    authors: Author[];
    constructor(private authorService: AuthorService) {}

    ngOnInit() {
        this.authorService.getAuthors().subscribe(authors => this.authors = authors);
    }
}