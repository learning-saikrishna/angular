import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[directiveSelector]'
})
export class BasicCustomDirectiveAndRendererExampleDirective {

  constructor(private elRef:ElementRef,private render:Renderer2) { }

  ngOnInit(){
    this.render.setStyle(this.elRef.nativeElement,'background-color','blue');
  }
}
