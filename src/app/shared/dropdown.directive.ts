import { Directive, HostListener, HostBinding, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen = false;

  constructor(private elementRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
    // Direct dom access
    // this.renderer.listen('window', 'click',(e:Event) => {
    //   console.log('click outside, hello world');
    //   this.closeMenu(e);
    // });
  }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  closeMenu(e) {
    if(e.target != this.elementRef.nativeElement)
      console.log(e.target, this.elementRef.nativeElement);
    
    // Direct dom access
    // access nativeElement child
    let dom:HTMLElement = this.elementRef.nativeElement;
    // access some child element
    let element = dom.querySelector('#name');
      // this.isOpen = false;
  }
}
