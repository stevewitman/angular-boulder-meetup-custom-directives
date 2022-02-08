import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetBackground]',
})
export class SetBackgroundDirective implements OnInit {


  
  constructor(private elementRef: ElementRef) {}


 
  
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = '#A1C92D66';
  }

}

// This example is from ...
//
// Custom Attribute Directive | Directives | Angular 12+ [by procademy]
// https://www.youtube.com/watch?v=DxfAEhdOl_0