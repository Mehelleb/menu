export class Plat{
    constructor(
        public name: string,
        public imgUrl:string,
        public description: string,
        public createdAt: Date,
        public like:number){}

addLike():void{
     this.like--;
}
removeLike():void{
    this.like++;
}
}