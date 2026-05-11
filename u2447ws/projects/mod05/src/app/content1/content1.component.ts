import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content1',
  imports: [NgClass],
  templateUrl: './content1.component.html',
  styles: ``
})
export class Content1Component {
  myclass="subTitle dark";
  isDark = true;
  isTitle = false; 
}
