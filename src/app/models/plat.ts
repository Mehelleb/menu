import { TypeLike } from "./type-like.typ";
export class Plat{
    price?:number;
    id:string;
    
    constructor(
        public name: string,
        public imgUrl:string,
        public description: string,
        public createdAt: Date,
        public like:number
      ){
        this.id= crypto.randomUUID().substring(0, 8);
        }


addLike():void{
     this.like++;
}
removeLike():void{
    this.like--;
}
onLiked(typeLike: TypeLike){
    if(typeLike ==='onLike'){
        this.addLike();
    }else if(
        typeLike ==='unLike'){
            this.removeLike();
        }
}
setPrice(price:number):void{
    this.price=price;
}
withPrice(price:number):Plat{
    this.setPrice(price)
    return this;
}
}