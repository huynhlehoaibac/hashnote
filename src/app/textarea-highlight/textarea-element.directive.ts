import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[paTextareaElement]',
  host: {
    '[class.textarea-element]': 'true',
  },
})
export class TextareaElementDirective {
  @HostBinding('style.background')
  backgroundColor: string = 'none';

  @HostBinding('style.position')
  position: string = 'relative';

  @HostBinding('style.z-index')
  zIndex: number = 2;

  constructor() {}
}
