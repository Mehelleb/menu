import { Component, OnInit } from '@angular/core';
import { PlatComponent } from '../components/plat/plat.component';
import { HeaderComponent } from '../components/header/header.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
   imports: [HeaderComponent, RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
}

