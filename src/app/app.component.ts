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
  burger!:Plat;
  pizza!:Plat;
  plats!:Plat[];
  ngOnInit(): void {
    this.plats=[
      this.tacos=new Plat(
      "Tacos",
      "https://t4.ftcdn.net/jpg/06/97/54/79/360_F_697547912_nImpPVXGEFh7RXrNkpEQOy5ksAqkKW8H.jpg",
      "Une viande au choix, des frites et de la sauce fromagère.",
      new Date(),
      10,
    ),
    this.burger=new Plat(
      "Burger",
      "https://media.istockphoto.com/id/1309352410/fr/photo/cheeseburger-avec-la-tomate-et-la-laitue-sur-la-planche-en-bois.jpg?s=612x612&w=0&k=20&c=xkOJoHX-1XYVzGnCWnCQKDpsfbKT4244cE099kvDuj0=",
      "Un pain raffiné avec des sésames d'Alep",
      new Date,
      7
    ),
    this.pizza=new Plat(
      "Pizza",
    "https://media.istockphoto.com/id/1442417585/fr/photo/personne-recevant-un-morceau-de-pizza-au-pepperoni-au-fromage.jpg?s=612x612&w=0&k=20&c=xNz2rodZQQARx16BlXTkht9E19aw4ziOMm6UOjW5DKM=",
    "Italienne d'âme, française de munitions, indéscriptible... ",
    new Date(),
    17
    )
    ]
    this.plats[1].setPrice(10);
    
  }
  
}

