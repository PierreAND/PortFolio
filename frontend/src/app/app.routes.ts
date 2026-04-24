import { Routes } from '@angular/router';
import { About } from './presentation/about/about';
import { Contact } from './presentation/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: About
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