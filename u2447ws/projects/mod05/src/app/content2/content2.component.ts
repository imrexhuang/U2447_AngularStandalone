import { Component } from '@angular/core';

@Component({
  selector: 'app-content2',
  standalone: true,
  imports: [],
  templateUrl: './content2.component.html',
  styles: ``
})
export class Content2Component {
  eventValue:string="";
  oninput(event: Event) {
    const input = event.target as HTMLInputElement //轉型
    this.eventValue = `你輸入: ${input.value}`;    
  }
  onmousemove(event: any) {
    this.eventValue=`    
      現在位置 x:${event.offsetX} y:${ event.offsetY} 
      target:${event.target.tagName} 
      currentTarget:${event.currentTarget.tagName}`; 
  }

    GoHome(event: any) {   
      event.preventDefault();　
      //event.stopPropagation();　//停止向上傳遞
      event.stopImmediatePropagation(); //也會停止水平傳遞

    console.log('event.target.tagName:'+event.target.tagName);// 瀏覽器按F12看log
    console.log('event.currentTarget.tagName:'+event.currentTarget.tagName);
  }

  myonclick(event: any) {
    console.log(`myonclick()你點擊了 ${event.target.tagName} 元素`);
  }

}
