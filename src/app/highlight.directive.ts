import { Directive, ElementRef, Input  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() highlightColor: string | undefined;

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = this.highlightColor || null;
 }

}
