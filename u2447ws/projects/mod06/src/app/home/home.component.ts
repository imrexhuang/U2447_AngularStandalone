import { Component } from '@angular/core';
import { TagButtonComponent } from "../tag-button/tag-button.component";

@Component({
  selector: 'uuu-home', 
  imports: [TagButtonComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  ondelete(tag:string){
    alert(`delete: ${tag}`);
  }
}
