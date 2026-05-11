import { Component } from '@angular/core';

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
     <button (click)="onSend(txtName.value)" >Send</button>
   </div>    
  `,
  styles: ``
})
export class HomeComponent {
  time = new Date();
  user = "Rex";
  onSend(name: string){
    this.user = name;
  }
}
