import { Component, Input, OnInit } from '@angular/core';
import { Plat } from '../models/plat';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-plat',
  imports: [NgStyle],
  templateUrl: './plat.component.html',
  styleUrl: './plat.component.scss'
})
export class PlatComponent implements OnInit {
  @Input() plat!:Plat

  userLiked!:boolean;
  btnTxtMsgLike!:string;
ngOnInit(): void {
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
  this.plat.addLike();
  this.btnTxtMsgLike="Unliker";
  this.userLiked=false; 
}

Unlike():void{
  this.plat.removeLike();
  this.btnTxtMsgLike="Liker"
  this.userLiked=true;
 }
}


