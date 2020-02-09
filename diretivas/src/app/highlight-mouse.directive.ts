import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow');*/
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'pink');*/
    this.backgroundColor = 'pink';
  }
  /* @HostBinding('style.backgroundColor') backgroundColor: string;*/
  @HostBinding('style.backgroundColor') get setColor() {
    //Aqui| neste caso poderia ser adiconado qualquer outro código extra
    return this.backgroundColor;
  }
  private backgroundColor: string;

  constructor() { }
  /*private _elementRef: ElementRef,
  private _renderer: Renderer
) { }*/

}
