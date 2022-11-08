import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRegistroRoutingModule } from './auth-registro-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthRegistroRoutingModule,
  ],
  exports: [RegistroComponent],
})
export class AuthRegistroModule {}
