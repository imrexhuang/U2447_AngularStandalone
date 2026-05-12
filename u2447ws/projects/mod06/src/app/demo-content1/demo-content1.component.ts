import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-content1',
  imports: [],
  template: `
<div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: lightgray; border: 2px solid gray; padding: 20px;"> 
      <h2>Demo Content 1</h2>
      <hr/>
      <div>
        <ng-content></ng-content>  
      </div>
       <div style="border: 2px solid gray;">
        select:
        <ng-content select="[tips]"></ng-content>  
      </div> 
      
    </div>

  `,
  styles: ``
})

export class DemoContent1Component {

}
