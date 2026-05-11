import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'uuu-nav',
  imports: [RouterLinkActive, RouterLink],
  template: `
    <nav>
      <ul><a routerLink="home" routerLinkActive="active">Home</a> </ul>
      <ul><a routerLink="about" routerLinkActive="active">About</a> </ul>
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

}
