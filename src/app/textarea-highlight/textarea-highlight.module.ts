import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { TextareaHighlightContainerDirective } from './textarea-highlight-container.directive';
import { TextareaElementDirective } from './textarea-element.directive';
import { TextareaHighlightComponent } from './textarea-highlight.component';

@NgModule({
  declarations: [
    TextareaHighlightComponent,
    TextareaHighlightContainerDirective,
    TextareaElementDirective,
  ],
  imports: [CommonModule, ClarityModule],
  exports: [
    TextareaHighlightComponent,
    TextareaHighlightContainerDirective,
    TextareaElementDirective,
  ],
})
export class TextareaHighlightModule {}
