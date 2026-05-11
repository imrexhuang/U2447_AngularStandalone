import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'uuu-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styles: ``
})
export class NavComponent {
  routeList = routes;
}
