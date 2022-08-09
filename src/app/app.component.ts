import { Component } from '@angular/core';
import { Book } from './model/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookApp';

  submitted =  false;
  book!:Book;
  onSubmit(){
    console.log("Created Book Successfully");
    this.submitted = true;
  }
}
