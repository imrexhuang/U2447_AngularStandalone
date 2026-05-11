import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  NavComponent, HomeComponent, FooterComponent],
  template: `
    <div class="container">
      <header>
         <h1>Welcome to {{title}}!</h1>
        <uuu-nav></uuu-nav>
      </header>
      <main>
       <router-outlet />
      </main>
      <footer></footer>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    header {
      flex: 1;
      background-color: #f0f0f0;
      padding: 10px;
    }
    main {
      flex: 8;
      padding: 10px;
      overflow: auto;
    }
    footer {
      flex: 0.5;
      background-color: #f0f0f0;
      padding: 10px;
    }
  `],
})
export class AppComponent {
  title = 'mod02c';
}
