import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClickToShow]'
})
export class ClickToShowDirective {

  constructor(private renderer: Renderer2,private hostElement: ElementRef) {
    console.log('init')
    // this.renderer.setStyle(this.hostElement.nativeElement,'background-color','red')
  }

  @HostListener('click')
  onClick(event:any){
    console.log('hi')
    this.renderer.addClass(this.hostElement.nativeElement,'display-block');
  }
}
