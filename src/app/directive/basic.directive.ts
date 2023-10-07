import { Directive,ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appBasic]'
})
export class BasicDirective implements OnInit {

  constructor(private eleRef:ElementRef) { }

  ngOnInit(): void {
      this.eleRef.nativeElement.style.backgroundColor = 'red';
      this.eleRef.nativeElement.style.color = 'white';
      this.eleRef.nativeElement.style.padding = '6px 12px';
  }
}
