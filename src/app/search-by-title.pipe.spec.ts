import { SearchByTitlePipe } from './search-by-title.pipe';

describe('SearchByTitlePipe', () => {
  const pipe = new SearchByTitlePipe();
  const books = ["Learn Java", "Learn Angular","JavaScript"];
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('search by valid book title', () => {
    expect(pipe.transform(books,'Learn').length).toEqual(2);
  });
  
  it('search by invalid book title', () => {
    expect(pipe.transform(books,'Testing').length).toEqual(0);
  });

});
