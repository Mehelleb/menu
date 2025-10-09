import { Component, OnInit } from '@angular/core';
import { PlatComponent } from './plat/plat.component';
import { Plat } from './models/plat';


@Component({
  selector: 'app-root',
   imports: [PlatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  tacos!:Plat;
  ngOnInit(): void {
    this.tacos=new Plat(
      "Tacos",
      "https://t4.ftcdn.net/jpg/06/97/54/79/360_F_697547912_nImpPVXGEFh7RXrNkpEQOy5ksAqkKW8H.jpg",
      "Une viande au choix, des frites et de la sauce frmagère.",
      new Date(),
      10
    );
  }
}

