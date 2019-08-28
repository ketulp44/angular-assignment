import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[slideChange]'
})
export class SlideChangeDirective {

  constructor(private el: ElementRef) { }

  @Input('parent') parent: ElementRef;

  
  
  @HostListener('slid.bs.carousel') onChange() {
    console.log('mouse click');
    console.log(this.el.nativeElement);
    console.log(this.parent);
    
    
    
  }
 

}
