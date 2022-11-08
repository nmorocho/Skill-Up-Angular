import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarduserdetailComponent } from './components/carduserdetail/carduserdetail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent, CarduserdetailComponent,FooterComponent],
  imports: [CommonModule,RouterModule],
  exports: [NavbarComponent, CarduserdetailComponent,FooterComponent],

})

export class SharedModule {}