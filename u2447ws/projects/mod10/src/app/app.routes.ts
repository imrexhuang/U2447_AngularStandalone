import { Routes } from '@angular/router';
import { NotfoundComponent } from './layout/notfound.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch:'full' },
    { path: 'home', component: HomeComponent, title: '首頁'},  
    { path: 'part1', component: Part1Component, title: '相依注入觀察用的Service'},    
    { path: 'part2', component: Part2Component , title:'使用 Service 存取 HTTPClient'},      
    { path: 'about', component: AboutComponent, title: '關於'}, 
    { path: '**', component:NotfoundComponent}
];
