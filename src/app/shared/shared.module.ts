import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MyaccountslistComponent } from './components/myaccountslist/myaccountslist.component';

@NgModule({
  declarations: [NavbarComponent,FooterComponent, MyaccountslistComponent],
  imports: [CommonModule,RouterModule],
  exports: [NavbarComponent, FooterComponent, MyaccountslistComponent],
})

export class SharedModule {}