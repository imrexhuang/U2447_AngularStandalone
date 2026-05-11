import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Content2Component } from './content2/content2.component';
import { Content1Component } from './content1/content1.component';

/**
 * 路由
講義 p.4-4
補充教材 p.16

 */
export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent, title:"首頁"},
    {path:'content1', component:Content1Component, title:"內容1"},
    {path:'content2', component:Content2Component, title:"內容2"},
    {path:'about', component:AboutComponent, title:"關於"},
    {path:'**', component:NotfoundComponent}
];
