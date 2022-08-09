import { Book } from './book';

describe('Book', () => {
  it('should create an instance', () => {
    const book = new Book(1,"Learn Angular",1000);
    expect(book).toBeTruthy();
  });

  it('should set and get the book values', () => {
    const book = new Book(1,"Learn Angular",1000);
    expect(book.id).toEqual(1);
    expect(book.title).toEqual("Learn Angular");
    expect(book.price).toEqual(1000);
  });

  it('should check the discount price', () => {
    const book = new Book(1,"Learn Angular",1000);
    expect(book.discountedPrice).toEqual(900);
  });

});
