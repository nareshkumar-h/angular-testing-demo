export class Book {
    id!:number;
    title!:string;
    price!:number;

    constructor(id:number, title:string, price:number){
        this.id = id;
        this.title = title;
        this.price = price;
    }

    get discountedPrice(){
        let discount = 10;
        return this.price - this.price *  discount/100;
    }
}

