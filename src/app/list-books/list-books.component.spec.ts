import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BookService } from '../book.service';

import { ListBooksComponent } from './list-books.component';

describe('ListBooksComponent with fake service', () => {
  let component: ListBooksComponent;
  let fixture: ComponentFixture<ListBooksComponent>;

  beforeEach(async () => {

    let bookFakeService = {
      getBooks(){
        return of(["Learn Angular", "Learn TypeScript"]);
      }
    }

    await TestBed.configureTestingModule({
      declarations: [ ListBooksComponent ],
      imports:[
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: BookService,
          useValue: bookFakeService
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('load books from fake service', () => {
    expect(component).toBeTruthy();
    expect(component.books.length).toEqual(2);
    expect(component.books[0]).toEqual("Learn Angular");
  });

  
});
