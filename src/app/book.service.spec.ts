import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import { Book } from './model/book';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      
    });
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
   expect(service).toBeTruthy();
  });

  it('should get books from rest api', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
    service.getBooks().subscribe( (res:any)=>{
      expect(res.length).toEqual(3);
    });
   });
});
