import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }


  // getBooks(){
  //   const url = "http://localhost:3000/books";
  //   return this.http.get(url);
  // }

  getBooks(){
    console.log("BookService => getBooks method called ");
    const books =  ["Learn C", "Learn C++", "Learn Java"];
    return of(books);
  }
}
