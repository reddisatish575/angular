import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  color : string = 'grey';

  constructor(
    private element : ElementRef,
    @Inject(DOCUMENT) private doc : Document,
    private renderer : Renderer2
  ) {
    // console.log("uix element HoverDirective ::: ",element);
    // console.log("uix doc HoverDirective ::: ",doc);
    console.log("uix renderer HoverDirective ::: ",renderer);
  }

  ngOnInit(): void {

    // ------------------ type -1 using elementRef start -------------------------------
    // this.element.nativeElement.style.backgroundColor = this.color;
    // ------------------ type -1 end  -------------------------------

    // ------------------ type -2 using renderer start -------------------------------
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.color
    )
    // ------------------ type -2 end  -------------------------------

    // ------------------ type -3 starts using host listener  -------------------------------

    // @HostListener('mouseenter') onMouseEnter() {
    //   this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'green');
    // }

    // @HostListener('mouseleave') onMouseLeave() {
    //   this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'transparent');
    // }

    // ------------------ type -3 end  -------------------------------

  }

}
