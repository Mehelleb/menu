export class Plat{
    price?:number;
    constructor(
        public name: string,
        public imgUrl:string,
        public description: string,
        public createdAt: Date,
        public like:number
        ){}

addLike():void{
     this.like++;
}
removeLike():void{
    this.like--;
}
setPrice(price:number):void{
    this.price=price;
}
}