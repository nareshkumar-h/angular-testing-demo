import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByTitle'
})
export class SearchByTitlePipe implements PipeTransform {

  transform(books:any[], value:string): any[] {
    return books.filter(bookName=>bookName.includes(value));
  }

}
