import { Component, ViewChild } from '@angular/core';
import { DemoContent1Component } from "../demo-content1/demo-content1.component";

@Component({
  selector: 'app-lab03',
  imports: [DemoContent1Component],
  templateUrl: './lab03.component.html',
  styles: ``
})
export class Lab03Component {
  @ViewChild(DemoContent1Component)  demo1!: DemoContent1Component;
  changeColor() {
    this.demo1.ChangeColor();
  }
}
