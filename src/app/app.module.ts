import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { AuthRegistroModule } from './pages/auth-registro/auth-registro.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLoginModule } from './pages/auth-login/auth-login.module';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, UserDetailsComponent],
  imports: [
    NgxSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthRegistroModule,
    AuthLoginModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
