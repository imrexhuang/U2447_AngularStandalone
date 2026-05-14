import { Component } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-page1',
  imports: [],
  template: `
    <p>
      page1 works!
    </p>

    <h1> {{s1.a}} </h1>
    <button (click)="Display()">
      Display()
    </button>
    {{result}}

  `,
  styles: ``,
  providers: [Service1Service]
})
export class Page1Component {
  constructor(public s1: Service1Service) {
    this.s1.a = 'data1';
    console.log(this.s1.a);
  }

  ngOnInit(): void {
    console.log(this.s1.a);
  }

  result: string = '';
  Display(): void {
    this.result ="form page1:" +this.s1.a;
  }
}
