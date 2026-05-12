import { Component } from '@angular/core';
import { TagButtonComponent } from "../tag-button/tag-button.component";
import { TagListComponent } from '../tag-list/tag-list.component';

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

  tags: string[] = [];
  // onChange(tags: string[]) {
  //   this.tags = tags;    
  // }

}
