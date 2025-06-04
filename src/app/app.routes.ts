import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { GallerieComponent } from './Pages/gallerie/gallerie.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'gallerie', component: GallerieComponent },
];
