import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHideAfter]',
})
export class HideAfterDirective implements OnInit {
  @Input('appHideAfter') delay = 0;


  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    setTimeout(() => {
      this.viewContainerRef.clear();
    }, this.delay);
  }
}

// This example is from ...
//
// Structural Directives in Angular – How to Create Custom Directive [Decoded Frontend]
// https://www.youtube.com/watch?v=07CaGlbMPbw