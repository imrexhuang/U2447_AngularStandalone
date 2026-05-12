import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'uuu-nav',
  standalone: true,
  imports: [RouterModule],
  template: `
  <style>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        overflow: hidden;
    }

    li a {
        display: block;
        text-align: center;
        text-decoration: none;
        padding: 14px 16px;
    }

    li a:hover {
        background-color: darkgray;
        color: white;
    }

    .active {
        background-color: darkgray;
        color: white;
        font-weight: bold;
    }
</style>

<nav>
    <ul>
        @for( route of routeList ; track route.path){
            @if(route.title){
            <li >
                <a routerLink="{{route.path}}" 
                    routerLinkActive="active" 
                    >{{route.title}}</a>
            </li>
            }
        }
    </ul>
</nav>
  `,
  styles: ``
})
export class NavComponent {
  routeList = routes;
}
