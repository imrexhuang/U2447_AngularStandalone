import { Component } from '@angular/core';
import { TagButtonComponent } from '../tags/tag-button.component';
import { TagListComponent } from '../tags/tag-list.component';

@Component({
  selector: 'app-content1',
  imports: [TagButtonComponent, TagListComponent],
  templateUrl: './content1.component.html',
  styles: ``
})
export class Content1Component {
 mytag="tag1";
  mytag2="tag2";
tags = ["tag1", "tag2", "tag3"];
}
