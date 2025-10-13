import { Component, OnInit } from '@angular/core';
import { PlatComponent } from '../components/plat/plat.component';
import { ListPlatsComponent } from '../components/list-plats/list-plats.component';
import { HeaderComponent } from '../components/header/header.component';


@Component({
  selector: 'app-root',
   imports: [ListPlatsComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
}

