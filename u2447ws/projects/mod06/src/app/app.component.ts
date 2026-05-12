import { Component } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'mod06';
}
