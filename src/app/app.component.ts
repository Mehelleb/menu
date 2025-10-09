import { Component } from '@angular/core';
import { PlatComponent } from './plat/plat.component';


@Component({
  selector: 'app-root',
   imports: [PlatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
