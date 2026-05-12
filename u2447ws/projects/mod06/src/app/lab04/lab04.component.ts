import { Component } from '@angular/core';
import { LifeCycleComponent } from '../life-cycle/life-cycle.component';

@Component({
  selector: 'app-lab04',
  imports: [LifeCycleComponent],
  templateUrl: './lab04.component.html',
  styles: ``
})
export class Lab04Component {
 name = "Life Cycle Hooks"
  num:number=0;
  constructor() {
    setTimeout(() => {     
      this.name = (++this.num).toString();
      console.log(`外部改變 name : ${this.name}`);
    }, 3000);
  }
}
