import { Component } from '@angular/core';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';


@Component({
  selector: 'app-part1',
  imports: [Page1Component, Page2Component],
  templateUrl: './part1.component.html',
  styles: ``
})
export class Part1Component {

}
