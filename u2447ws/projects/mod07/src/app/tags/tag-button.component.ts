import { booleanAttribute, Component, EventEmitter, input, output,  } from '@angular/core';

@Component({
  selector: 'tagButton',
  imports: [],
  template: `
     <div  style="width: auto; background-color: beige; border-radius: 10px; padding: 6px; margin: 2px;">
      <!-- <label  >{{ tagName }}</label> 非Signal用法   -->
       <!-- Signal用法要加()   -->
      <label  >{{ tagName() }}</label> 
     <!-- @if (canDelete) {  非Signal用法 -->
      <!-- Signal用法要加()   -->
      @if (canDelete()) {
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
          (click)="onDelete()" >
          <path fill="red" d="M14.142 14.142c.781.781.781 2.047 0 2.828-.39.39-.902.586-1.414.586s-1.024-.195-1.414-.586L10 16.414l-1.414 1.414c-.781.781-2.047.781-2.828 0-.781-.781-.781-2.047 0-2.828L7.586 14l-1.414-1.414c-.781-.781-.781-2.047 0-2.828.781-.781 2.047-.781 2.828 0L10 11.586l1.414-1.414c.781-.781 2.047-.781 2.828 0 .781.781.781 2.047 0 2.828L12.414 14l1.414 1.414z"/>
        </svg>
      }
    </div>

  `,
  styles: ``
})
export class TagButtonComponent {
  //@Input ({required:true, alias:'tag'}) tagName:string ="";
  //@Input ({transform:booleanAttribute}) canDelete: boolean=false;
  //@Output() delete = new EventEmitter<string>();

  tagName = input.required<string>({alias:'tag'});
  canDelete = input <boolean, boolean>(false, {transform:booleanAttribute})
  delete =output<string>();

  onDelete(){
    //this.delete.emit(this.tagName);
    this.delete.emit( this.tagName() );//因為Signal要多加()
  }
}
