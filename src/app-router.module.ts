import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { AuthorDetailComponent } from './author/author-detail/author-detail.component';

const routes: Routes = [
    {
        path: 'books',
        component: BookListComponent
    },
    {
        path: 'books/:id',
        component: BookDetailComponent
    },
    {
        path: 'authors',
        component: AuthorListComponent
    },
    {
        path: 'authors/:id',
        component: AuthorDetailComponent
    },
    {
        path: '',
        redirectTo: '/books',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/books'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule { }

export const RouterComponents = [
    BookListComponent,
    BookDetailComponent,
    AuthorListComponent,
    AuthorDetailComponent
];