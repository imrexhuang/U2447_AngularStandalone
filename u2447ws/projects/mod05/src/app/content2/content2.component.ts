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
}
