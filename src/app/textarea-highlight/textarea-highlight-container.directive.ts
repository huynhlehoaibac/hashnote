import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[paTextareaHighlightContainer]',
  host: {
    '[class.textarea-highlight-container]': 'true',
  },
})
export class TextareaHighlightContainerDirective {
  @HostBinding('style.position')
  backgroundColor: string = 'relative';

  constructor() {}
}
