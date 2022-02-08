import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]',
})
export class NumberOnlyDirective {
  private regexIntegerOnly: RegExp = new RegExp('^[0-9]*$');
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight', 'Ta'];

  constructor(private elementRef: ElementRef) {}




  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = '#A1C92D66';
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const inputValue: string = this.elementRef.nativeElement.value.concat(
      event.key
    );
    console.log(event.key);
    if (inputValue && !String(inputValue).match(this.regexIntegerOnly)) {
      event.preventDefault();
    }
    return;
  }

  // @HostListener('paste', ['$event']) onPaste(event) {
  //   return;
  // }
}


// This example is from ...
//
// Angular Custom Directive- Allow Only Number/Decimal -
// User should be restricted to enter only number [by Angular All]
// https://www.youtube.com/watch?v=qH9RHHmzvIA