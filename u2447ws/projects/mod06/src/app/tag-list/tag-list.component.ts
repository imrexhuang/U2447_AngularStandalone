import { Component } from '@angular/core';
import { TagButtonComponent } from "../tag-button/tag-button.component";

@Component({
  selector: 'tagList',
  imports: [TagButtonComponent],
  template: `
     @if (!readOnly) {
      <input type="text" #insterTag 
        (keyup.enter)="addTag(insterTag.value); insterTag.value='';" 
        placeholder="Add a tag" />
      }
    <div style="display: flex;">
        @for (item of tags; track $index) {        
            <tagButton [tag]="item" [canDelete]="!readOnly" (delete)="deleteTag($event)"></tagButton>       
        }
    </div>

  `,
  styles: ``
})
export class TagListComponent {

}
