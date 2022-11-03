import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRegistroRoutingModule } from './auth-registro-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RegistroComponent],
  imports: [CommonModule,
    ReactiveFormsModule,
  
    AuthRegistroRoutingModule],
  exports: [RegistroComponent],
})
export class AuthRegistroModule {}
