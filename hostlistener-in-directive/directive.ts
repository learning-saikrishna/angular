import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[directiveSelector]'
})
export class BasicCustomDirectiveAndRendererExampleDirective {

  constructor(private elRef:ElementRef,private render:Renderer2) { }

  @HostListener('mouseenter')mouseOver(){
    this.render.setStyle(this.elRef.nativeElement,'background-color','blue');
  }

  @HostListener('mouseleave')mouseLeave(){
    this.render.setStyle(this.elRef.nativeElement,'background-color','transparent');
  }

}
