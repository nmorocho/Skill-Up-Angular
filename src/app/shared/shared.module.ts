import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarduserdetailComponent } from './components/carduserdetail/carduserdetail.component';


@NgModule({
  declarations: [NavbarComponent, CarduserdetailComponent],
  imports: [CommonModule ],
  exports: [NavbarComponent, CarduserdetailComponent],
})
export class SharedModule {}
