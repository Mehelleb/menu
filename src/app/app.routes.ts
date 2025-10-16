import { Routes } from '@angular/router';
import { ListPlatsComponent } from '../components/list-plats/list-plats.component';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';

export const routes: Routes = [
    { path: 'plats', component: ListPlatsComponent},
    { path: '', component: LandingPageComponent}
];
