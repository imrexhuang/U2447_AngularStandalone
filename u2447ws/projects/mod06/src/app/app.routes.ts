import { Routes } from '@angular/router';
import { NotfoundComponent } from './layout/notfound.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Lab03Component } from './lab03/lab03.component';
import { Lab04Component } from './lab04/lab04.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch:'full' },
    { path: 'home', component: HomeComponent, title: '首頁'},  
    { path: 'lab03', component: Lab03Component, title: '內容投影'},  
    { path: 'lab04', component: Lab04Component, title: '生命週期'}, 
    { path: 'about', component: AboutComponent, title: '關於'}, 
    { path: '**', component:NotfoundComponent}
];
