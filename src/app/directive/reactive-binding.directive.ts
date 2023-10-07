import { Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appReactiveBinding]'
})
export class ReactiveBindingDirective implements OnInit {
  defaultColor:string = 'lightgreen';
  hoverColor:string = 'yellow';
  @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(private eleRef:ElementRef, private renderer:Renderer2) { }
  ngOnInit(): void {
      this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter(e:Event) {
    this.backgroundColor = this.hoverColor;
  }

  @HostListener('mouseleave') mouseleave(e:Event) {
    this.backgroundColor = this.defaultColor;
  }
}
