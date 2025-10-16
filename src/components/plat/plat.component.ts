import { Component, Input, OnInit } from '@angular/core';
import { Plat } from '../../app/models/plat';
import {NgClass, NgStyle, UpperCasePipe, DatePipe, CurrencyPipe} from '@angular/common';
import { PlatsService } from '../../app/services/Plats-service';

@Component({
  selector: 'app-plat',
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe, CurrencyPipe],
  templateUrl: './plat.component.html',
  styleUrl: './plat.component.scss'
})
export class PlatComponent implements OnInit {
  constructor(private pls:PlatsService){}
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
  this.pls.likerUnPlat(this.plat.id, 'onLike');
  this.userLiked=true; 
  this.btnTxtMsgLike="Unliker";
  console.log("hhhhh")
  
}

unLike():void{
  this.pls.likerUnPlat(this.plat.id, 'unLike');
  this.btnTxtMsgLike="Liker";
  this.userLiked=false; 
  console.log("gggggggggggg")
 
 }
}


