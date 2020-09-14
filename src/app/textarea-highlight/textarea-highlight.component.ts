import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';

const styleProperties = Object.freeze([
  'direction', // RTL support
  'boxSizing',
  'width', // on Chrome and IE, exclude the scrollbar, so the mirror div wraps exactly as the textarea does
  'height',
  'overflowX',
  'overflowY', // copy the scrollbar for IE

  'borderTopWidth',
  'borderRightWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderStyle',

  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',

  // https://developer.mozilla.org/en-US/docs/Web/CSS/font
  'fontStyle',
  'fontVariant',
  'fontWeight',
  'fontStretch',
  'fontSize',
  'fontSizeAdjust',
  'lineHeight',
  'fontFamily',

  'textAlign',
  'textTransform',
  'textIndent',
  'textDecoration', // might not make a difference, but better be safe

  'letterSpacing',
  'wordSpacing',

  'tabSize',
  'MozTabSize',
]);

@Component({
  selector: 'pa-textarea-highlight',
  templateUrl: './textarea-highlight.component.html',
  styleUrls: ['./textarea-highlight.component.scss'],
})
export class TextareaHighlightComponent implements OnChanges {
  /**
   * The textarea to highlight
   */
  @Input() textareaElement: HTMLTextAreaElement;

  @Input() textareaValue: string;

  highlightElementContainerStyle: { [key: string]: string } = {};

  highlightedText: string;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.textareaElement) {
      this.textAreaElementChanged();
    }

    if (changes.tags || changes.tagCssClass || changes.textareaValue) {
      this.addTags();
    }
  }

  private textAreaElementChanged() {
    this.refresh();
  }

  private refresh() {
    const computed: any = getComputedStyle(this.textareaElement);
    styleProperties.forEach((prop) => {
      this.highlightElementContainerStyle[prop] = computed[prop];
    });
  }

  private addTags() {
    const textareaValue =
      typeof this.textareaValue !== 'undefined'
        ? this.textareaValue
        : this.textareaElement.value;


  }
}
