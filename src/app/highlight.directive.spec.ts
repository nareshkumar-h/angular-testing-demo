import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { ViewBookComponent } from './view-book/view-book.component';

describe('HighlightDirective', () => {

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ HighlightDirective, ViewBookComponent ],    
      imports:[HttpClientModule]
    })
    .compileComponents();
  });

  it('should test the highlight directive style', () => {
    const fixture = TestBed.createComponent(ViewBookComponent);
    fixture.detectChanges();
    // query the proper element inside our test component's template.
    const element: HTMLElement = fixture.nativeElement.querySelector("h5"); 
    console.log("Element:" , element.style.color);
    expect(element.style.color).toEqual("blue");
  });
});
