import { Routes } from '@angular/router';
import { About } from './presentation/about/about';
import { Contact } from './presentation/contact/contact';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'contact',
    component: Contact
  }

];