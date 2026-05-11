import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
/**
 * 路由
講義 p.4-4
補充教材 p.16

 */
export const routes: Routes = [
    {path:'home', component:HomeComponent, title:"首頁"},
    {path:'about', component:AboutComponent, title:"關於"},
];
