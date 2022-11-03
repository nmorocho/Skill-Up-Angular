import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLoginRoutingModule } from './auth-login-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthLoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [LoginComponent],
})
export class AuthLoginModule {}
