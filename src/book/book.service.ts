import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class Book {
    id: number;
    title: string;
    authorId: number;
    imageUrl: string;
}

@Injectable()
export class BookService {
    constructor(private http: Http) { }

    getBooks() {
        return this.http
            .get('api/books.json')
            .map((response: Response) => <Book[]>response.json())
            .catch(this.handleError);
    }

     handleError(error: Response) {
        console.error(error);
        return Observable.throw(`Error status code ${error.status} at ${error.url}`);
    }
}