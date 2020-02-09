import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p [FundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    //BOA PRÁTICA:
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) {
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow');

    //console.log(this._elementRef);
    //NÃO É UMA BOA PRATICA MAS FUNCIONA--this._elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

}
