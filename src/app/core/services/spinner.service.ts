import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {


  constructor(private spi: NgxSpinnerService) { }
  
callshow(){
this.spi.show();
}

callhide(){
  this.spi.hide();
}
}
