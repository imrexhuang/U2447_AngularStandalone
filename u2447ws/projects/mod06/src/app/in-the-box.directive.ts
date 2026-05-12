import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[InTheBox]'
})
export class InTheBoxDirective {
  @Input("InTheBox") borderStyle : string="";
  @HostListener("mouseenter") onMouseEnter(){
    this.putInTheBox(this.borderStyle);
  }
  @HostListener("mouseleave") onMouseLeave(){
    this.putInTheBox("none");
  }
  ngOnInit(){
    if(!this.borderStyle){
      this.borderStyle="solid 2px red"
    }
  }
  constructor(private el:ElementRef) { 
    //this.putInTheBox("solid 2px red")
  }
  putInTheBox(borderStyle: string) {
    this.el.nativeElement.style.border =borderStyle;   
  }

}
