import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[directiveSelector]'
})
export class BasicCustomDirectiveAndRendererExampleDirective {

  @HostBinding('style.backgroundColor') backGroundColor:string='transparent'

  constructor(private elRef:ElementRef,private render:Renderer2) { }

  @HostListener('mouseenter')mouseOver(){
    this.backGroundColor='blue';
  }

  @HostListener('mouseleave')mouseLeave(){
    this.backGroundColor='transparent';
  }
}

