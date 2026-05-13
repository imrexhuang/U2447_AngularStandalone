// import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';
// 因為要雙向綁定,改成model語法
import { booleanAttribute, Component,  input, model,  } from '@angular/core';
import { TagButtonComponent } from './tag-button.component';


@Component({
  selector: 'tagList',
  imports: [TagButtonComponent],
  template: `
    <!--  @if (!readOnly) { -->
      @if (!readOnly()) {
      <input type="text" #insterTag 
        (keyup.enter)="addTag(insterTag.value); insterTag.value='';" 
        placeholder="Add a tag" />
      }
    <div style="display: flex;">
       <!-- @for (item of tags; track $index) {    -->
        @for (item of tags(); track $index) {     
            <tagButton [tag]="item" [canDelete]="!readOnly" (delete)="deleteTag($event)"></tagButton>       
        }
    </div>

  `,
  styles: ``
})
export class TagListComponent {
  
  //@Input({transform: booleanAttribute}) readOnly:boolean=false;  
  //@Input('List') tags: string[] = [];
  //@Output('ListChange') tagsChange =new EventEmitter<string[]>();
  // 因為要雙向綁定,改成model語法
  readOnly= input<boolean, boolean>(false, {transform: booleanAttribute});
  tags = model<string[]>([],{alias:"List"});

  deleteTag(tagName: string){
    //this.tags = this.tags.filter(tag => tag !== tagName);
    //this.tagsChange.emit(this.tags);
     // 因為要雙向綁定,改成model語法
    this.tags.set(this.tags().filter(tag => tag !== tagName));
  }
  
  addTag(tagName: string){
    //this.tags.push(tagName);
    //console.log (this.tags.length);
    //this.tagsChange.emit(this.tags);
     // 因為要雙向綁定,改成model語法
    this.tags.update((old)=>[...old, tagName]);
  }



}
