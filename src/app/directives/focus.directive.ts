import {AfterViewInit, Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, AfterViewInit{

  constructor(private  element: ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.focus()
  }

  ngAfterViewInit(): void {}
}
