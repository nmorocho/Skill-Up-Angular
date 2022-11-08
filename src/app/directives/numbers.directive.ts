import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[numbers]'
})
export class NumbersDirective {

  constructor(private ref: ElementRef) { }
   //hace un rastreo de los eventos del input
   @HostListener('input', ['$event']) ngOnChanges(changes: Event): void {
  
    const initValue =   this.ref.nativeElement.value;
    this.ref.nativeElement.value = initValue.replace(/[^0-9]*/g, '');
     if (initValue !== this.ref.nativeElement.value) {
      changes.preventDefault();
    }
     
  } 
}
