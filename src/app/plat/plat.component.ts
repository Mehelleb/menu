import { Component, Input, OnInit } from '@angular/core';
import { Plat } from '../models/plat';
import { LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-plat',
  imports: [NgStyle, NgClass, UpperCasePipe, TitleCasePipe, LowerCasePipe, DatePipe],
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
    this.unLike();
  }else{
    this.onLike();}
}

onLike():void{
  this.userLiked=true; 
  this.plat.addLike();
  this.btnTxtMsgLike="Unliker";
  
}

unLike():void{
  this.plat.removeLike();
  this.btnTxtMsgLike="Liker";
  this.userLiked=false; 
 
 }
}


