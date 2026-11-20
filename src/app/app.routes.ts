import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Mateusz Czech — fotograf ślubny' },
  { path: 'sluby/:category', component: GalleryComponent },
  { path: 'portfolio/:category', component: GalleryComponent },
  { path: '**', redirectTo: '' }
];
