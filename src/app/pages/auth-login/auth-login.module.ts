import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLoginRoutingModule } from './auth-login-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthLoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  exports: [LoginComponent],
})
export class AuthLoginModule {}
