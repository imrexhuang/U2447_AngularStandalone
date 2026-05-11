import { Component } from '@angular/core';

@Component({
  selector: 'uuu-nav',
  imports: [],
  template: `
    <nav>
      <ul><a href="home">Home</a> </ul>
      <ul><a href="about">About</a> </ul>
    </nav>
  `,
  styles: `
    nav {
      background-color: #333;
      color: white;
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
  `
})
export class NavComponent {

}
