import { Component } from '@angular/core';
import { Content1Component } from "../content1/content1.component";
import { Content2Component } from "../content2/content2.component";

@Component({
  selector: 'uuu-home',
  imports: [Content1Component, Content2Component],
  template: `
    <h2>
      home works!
    </h2>
    <uuu-content2></uuu-content2> <hr>
<uuu-content1 ></uuu-content1> <hr>

  Hello {{user}}, 現在時間: {{time}}
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
