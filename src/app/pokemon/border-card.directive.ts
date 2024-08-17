import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = "#f5f5f5";
  private defautColor: string = "#009688";
  private defaultHeight: number = 180;

  constructor(private el:ElementRef) {

  this.setBorder(this.initialColor);
  this.setHeight(this.defaultHeight);
   }

   @Input('pokemonBorderCard') borderColor: string| undefined
   // methode angular si il passe dessus on met une bordur

// methode angular si il passe dessus on met une bordure
   @HostListener('mouseenter') onMouseEnter() {
   this.setBorder( this.borderColor || this.defautColor);
   }

  //  si il part on revient a la couleur de base
   @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor)
   }

  private setHeight(height: number){
    // on va aller dans le dom
    this.el.nativeElement.style.height = `${height} 'px'`

  }
  private setBorder(color: string){
    let border = `solid 4px ${color}`
this.el.nativeElement.style.border = border;
  }

}
