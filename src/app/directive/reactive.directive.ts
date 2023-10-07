import { Directive, OnInit, 
  ElementRef, 
  Renderer2,
HostListener
} from '@angular/core';

@Directive({
  selector: '[appReactive]'
})
export class ReactiveDirective {

  constructor(private eleRef:ElementRef, private renderer:Renderer2) { }

  @HostListener('mouseenter') mouseenter(e:Event) {
    this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor', 'green');
  }

  @HostListener('mouseleave') mouseleave(e:Event) {
    this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor', 'transparent');
  }

}
