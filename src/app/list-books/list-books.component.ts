import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  books!:any[];

  getBooks(){
    this.bookService.getBooks().subscribe((res:any)=>{
      this.books = res;
    })
  }

}
