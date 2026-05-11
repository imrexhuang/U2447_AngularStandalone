import { Component } from '@angular/core';

@Component({
  selector: 'uuu-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  imgUrl ="https://www.uuu.com.tw/Public/content/edm/220725_GoogleSeminar/images/photo-2.png"
  width = 200;

  setWidth(iwidth:string){
    this.width = Number(iwidth);
  }
}
