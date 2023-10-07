import { Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  OnInit,
  Input
} from '@angular/core';

@Directive({
  selector: '[appReactiveBinding]'
})
export class ReactiveBindingDirective implements OnInit {
  @Input() defaultColor:string = 'lightgreen';
  @Input() hoverColor:string = 'yellow';
  @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(private eleRef:ElementRef) { }
  ngOnInit(): void {
      this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter(e:Event) {
    this.backgroundColor = this.hoverColor;
    console.log('hello');
    
  }

  @HostListener('mouseleave') mouseleave(e:Event) {
    this.backgroundColor = this.defaultColor;
  }
}
