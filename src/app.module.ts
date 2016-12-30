import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRouterModule, RouterComponents } from './app-router.module';
import { AppComponent } from './app.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        AppRouterModule
    ],
    declarations: [
        AppComponent,
        RouterComponents
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
