import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { ListBooksComponent } from './list-books/list-books.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    console.log("App Component Test -> Before Each Test case run this method")
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,ViewBookComponent,ListBooksComponent
      ],
      // providers: [BookService]
      
    }).compileComponents();
  });

  afterEach(async () => {
    console.log("App Component Test -> After Each Test case run this method")
  });

  it('should create the app', () => {
    console.log("App Component => Test Case 1")
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'BookApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('BookApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.page-title')?.textContent).toContain('BookApp');
  });

  
});
