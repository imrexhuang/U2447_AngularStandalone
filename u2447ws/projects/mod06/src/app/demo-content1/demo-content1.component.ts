import { Component, ContentChild, ElementRef, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-demo-content1',
  imports: [],
  template: `
<div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: lightgray; border: 2px solid gray; padding: 20px;"> 
      <h2>Demo Content 1</h2>
      <hr/>
      <div>
        <ng-content></ng-content>  
      </div>
       <div style="border: 2px solid gray;">
        select:
        <ng-content select="[tips]"></ng-content>  
      </div> 
      
    </div>

  `,
  styles: ``
})

export class DemoContent1Component {
  @ContentChild('antherTips') antherTips! :ElementRef<HTMLElement>;
  @ViewChild('box') box!: ElementRef<HTMLElement> ;
  constructor(){
  console.log('constructor', this.antherTips);
  }
  ngInit(){
    console.log('ngInit', this.antherTips);
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit', this.antherTips);
    this.antherTips.nativeElement.addEventListener('mousemove', () => {
      this.antherTips.nativeElement.style.backgroundColor = 'yellow';

    });

    this.antherTips.nativeElement.addEventListener('mouseleave', () => {     
      this.antherTips.nativeElement.style.backgroundColor = '';
    });

    
  }

   ChangeColor() {
    this.box.nativeElement.style.backgroundColor = 'lightblue';
    this.box.nativeElement.style.color = 'blue';
  } 
}
