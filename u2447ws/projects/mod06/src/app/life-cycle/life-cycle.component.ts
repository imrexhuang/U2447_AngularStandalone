import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lifeCycle',
  standalone: true,
  template: `
    <h1>Hello {{name}}!    </h1>
    <button (click)="changeName()">變更名稱</button>
    <ng-content select=".title"></ng-content>
  `,
  styles: [
  ]
})
export class LifeCycleComponent implements OnInit {
  @Input() name: string = "";
  data: string[] = [];
 
  changeName() {    
    this.name = this.name + '!';
    console.log(`內部改變 name ${this.name} `);
  }
 constructor() {
  console.log('constructor');
  }
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngDoDestroy() {
    console.log('ngDoDestroy');
  }
}
