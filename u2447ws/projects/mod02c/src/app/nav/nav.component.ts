import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'uuu-nav',
  imports: [RouterLinkActive, RouterLink],
  template: `
    <nav>
        <ul>
      @for ( route of routeList; track route) {
        @if (route.title) {
        <li>
            <a [routerLink]="route.path" routerLinkActive="active">{{ route.title }}</a>
        </li>
        }
      }
         </ul>
    </nav>
  `,
  styles: `
    nav {    
      padding: 10px;
    }
    nav ul {
      display: inline-block;
      margin: 0;
      padding: 0;
    }
    nav ul a {
      color: white;
      text-decoration: none;
      padding: 5px 10px;
    }
    .active {
      background-color: darkgray;
        color: white;
        font-weight: bold;

    }
  `
})
export class NavComponent {
  routeList = routes
}
