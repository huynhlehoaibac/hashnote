import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  Renderer2,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
  HostListener,
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
  encapsulation: ViewEncapsulation.None,
})
export class TextareaHighlightComponent implements OnChanges, OnDestroy {
  /**
   * The textarea to highlight
   */
  @Input() textareaElement: HTMLTextAreaElement;

  @Input() textareaValue: string;

  highlightElementContainerStyle: { [key: string]: string } = {};

  highlightedText: string;

  @ViewChild('highlightElement') private highlightElement: ElementRef;

  private textareaEventListeners: Array<() => void> = [];

  private highlightTagElements: Array<{
    element: HTMLElement;
    clientRect: ClientRect;
  }>;

  private isDestroyed = false;

  constructor(private renderer: Renderer2, private cd: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.textareaElement) {
      this.textAreaElementChanged();
    }

    if (changes.textareaValue) {
      this.decorateTags();
    }
  }

  ngOnDestroy(): void {
    this.isDestroyed = true;
    this.textareaEventListeners.forEach((unregister) => unregister());
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.refresh();
  }

  private textAreaElementChanged() {
    this.refresh();

    setTimeout(() => {
      this.textareaEventListeners.forEach((unregister) => unregister());
      this.textareaEventListeners = [
        this.renderer.listen(this.textareaElement, 'input', (value) => {
          this.decorateTags();
        }),
        this.renderer.listen(this.textareaElement, 'scroll', () => {
          this.highlightElement.nativeElement.scrollTop = this.textareaElement.scrollTop - 24;
          this.highlightTagElements = this.highlightTagElements.map((tag) => {
            tag.clientRect = tag.element.getBoundingClientRect();
            return tag;
          });
        }),
        this.renderer.listen(this.textareaElement, 'mouseup', () => {
          this.refresh();
        }),
      ];
    });
  }

  private refresh() {
    const computed: any = getComputedStyle(this.textareaElement);
    styleProperties.forEach((prop) => {
      this.highlightElementContainerStyle[prop] = computed[prop];
    });
  }

  private decorateTags() {
    const textareaValue =
      typeof this.textareaValue !== 'undefined'
        ? this.textareaValue
        : this.textareaElement.value;

    let highlightedText = textareaValue;

    const matchMentions = /(@[\S]+)\b/g;
    highlightedText = highlightedText.replace(
      matchMentions,
      `<span class='textarea-highlight-tag bg-pink'>$1</span>`
    );

    const matchHashtags = /(#[\S]+)\b/g;
    highlightedText = highlightedText.replace(
      matchHashtags,
      `<span class='textarea-highlight-tag'>$1</span>`
    );

    this.highlightedText = highlightedText;
  }
}
