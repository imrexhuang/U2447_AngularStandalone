import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input({transform: booleanAttribute}) readOnly:boolean=false;  
  @Input('List') tags: string[] = [];
  @Output('ListChange') tagsChange =new EventEmitter<string[]>();

  deleteTag(tagName: string){
    this.tags = this.tags.filter(tag => tag !== tagName);
    this.tagsChange.emit(this.tags);
  }
  
  addTag(tagName: string){
    this.tags.push(tagName);
    console.log (this.tags.length);
    this.tagsChange.emit(this.tags);
  }
}
