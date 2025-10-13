import { Component, OnInit } from '@angular/core';
import { Plat } from '../../app/models/plat';
import { PlatComponent } from '../plat/plat.component';
import { PlatsService } from '../../app/services/Plats-service';


@Component({
  selector: 'app-list-plats',
  imports: [PlatComponent],
  templateUrl: './list-plats.component.html',
  styleUrl: './list-plats.component.scss'
})
export class ListPlatsComponent implements OnInit{
  constructor(private pls:PlatsService){}

  
  tacos!:Plat;
  burger!:Plat;
  pizza!:Plat;
  plats!:Plat[];
  ngOnInit(): void {
    this.plats=this.pls.getPlats() 
    
  }
  
}
