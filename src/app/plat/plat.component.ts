import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plat',
  imports: [],
  templateUrl: './plat.component.html',
  styleUrl: './plat.component.scss'
})
export class PlatComponent implements OnInit {
  name!:string;
  description!:string;
  createdAt!:Date;
  like!:number;
  imageUrl!:string;
  userLiked!:boolean;
  btnTxtMsgLike!:string;
ngOnInit(): void {
  this.name="Tacos";
  this.description="Une viande au choix, des frites et de la sauce frmagère.";
  this.createdAt= new Date();
  this.like=0;
  this.imageUrl = "https://t4.ftcdn.net/jpg/06/97/54/79/360_F_697547912_nImpPVXGEFh7RXrNkpEQOy5ksAqkKW8H.jpg"
  this.userLiked=false;
  this.btnTxtMsgLike="Liker";
}
onLiking(){
  if(this.userLiked){
    this.onLike();
  }else{
    this.Unlike();}
}

onLike():void{
  this.like--;
  this.btnTxtMsgLike="Unliker";
  this.userLiked=false; 
}

Unlike():void{
  this.like++;
  this.btnTxtMsgLike="Liker"
  this.userLiked=true;
 }
}


