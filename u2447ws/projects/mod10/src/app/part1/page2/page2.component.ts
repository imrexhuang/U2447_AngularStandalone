import { Component } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-page2',
  imports: [],
  template: `
    <p>
      page2 works!
    </p>

      <h1> {{s1.a}} </h1>
    <button (click)="Display()">
      Display()
    </button>
    {{result}}
  `,
  styles: ``
})
export class Page2Component {
 constructor(public s1: Service1Service) {
    this.s1.a = 'data2';
    console.log(this.s1.a);
  }

  ngOnInit(): void {
    console.log(this.s1.a);
  }

  result: string = '';
  Display(): void {
    this.result ="form page2:" +this.s1.a;
  }
}
