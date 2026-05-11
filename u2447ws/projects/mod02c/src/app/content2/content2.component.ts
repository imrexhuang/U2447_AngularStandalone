import { Component } from '@angular/core';

@Component({
  selector: 'uuu-content2',
  imports: [],
  templateUrl: './content2.component.html',
  styles: ``
})
export class Content2Component {
  countries = ['All', 'Canada', 'USA', 'UK', 'India', 'Japan'];
  country="UK";

  onchangeABC(value: string) {
    this.country = value;
  }


}
