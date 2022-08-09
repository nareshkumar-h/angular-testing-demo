import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './book.service';
import { SearchByTitlePipe } from './search-by-title.pipe';
import { HighlightDirective } from './highlight.directive';
import { ViewBookComponent } from './view-book/view-book.component';
@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    SearchByTitlePipe,
    HighlightDirective,
    ViewBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
