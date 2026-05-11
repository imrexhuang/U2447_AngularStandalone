import { Component } from '@angular/core';
import { Content1Component } from "../content1/content1.component";
import { Content2Component } from "../content2/content2.component";

@Component({
  selector: 'uuu-home',
  imports: [],
  template: `
    <h2>
      home works!
    </h2>
    Hello {{user}}<br>
    <div>
     <input type="text" #txtName [value]="user">
     <button (click)="onSend2(txtName.value)" >Send</button>
   </div>    
  `,
  styles: ``
})
export class HomeComponent {
  time = new Date();
  user = "Rex";
  onSend2(name: string){
    this.user = name;
  }
}
