import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent, title:"首頁"},
    {path:'about', component:AboutComponent, title:"關於"},
];
