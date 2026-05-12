import { Component } from '@angular/core';

@Component({
  selector: 'app-content2',
  //standalone: true,
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

  canExit = false;
  onmousemove(event: any) {
    this.eventValue=`    
      現在位置 x:${event.offsetX} y:${ event.offsetY} 
      target:${event.target.tagName} 
      currentTarget:${event.currentTarget.tagName}`; 

      const centerX = 75;
      const centerY = 75;
      const targetRange = 10;

      if (Math.abs(event.offsetX - centerX) <= targetRange 
          && Math.abs(event.offsetY - centerY) <= targetRange) {
        this.canExit = true;
        console.log("canExit");
      }     
  }

    GoHome(event: any) {   
      if(!this.canExit){
         alert("必須正中靶心才能離開此頁面");
         event.preventDefault();
      }
      //event.preventDefault();　
      //event.stopPropagation();　//停止向上傳遞
      //event.stopImmediatePropagation(); //也會停止水平傳遞

    console.log('event.target.tagName:'+event.target.tagName);// 瀏覽器按F12看log
    console.log('event.currentTarget.tagName:'+event.currentTarget.tagName);
  }

  myonclick(event: any) {
    console.log(`myonclick()你點擊了 ${event.target.tagName} 元素`);
  }

  mymouseenter(event: any) {
    console.log(`滑鼠進來了`);
  }  

    mymouseleave(event: any) {
    console.log(`滑鼠離開了`);
  }  

}
