import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { Products } from './pages/products/products';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'nosotros', component: AboutUs},
    {path: 'productos', component: Products},
    {path: 'contactos', component: Contact},
    {path: '**', redirectTo: ''}
];







