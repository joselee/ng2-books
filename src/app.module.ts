import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
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
    imports: [
        NgbModule.forRoot(),
        BookModule,
        AuthorModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
